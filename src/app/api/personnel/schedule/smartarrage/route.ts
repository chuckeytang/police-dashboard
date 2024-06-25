import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import Holidays from "date-holidays";

const prisma = new PrismaClient();
const hd = new Holidays("CN"); // 'CN' 是中国的国家代码

interface TeamOrder {
  id: number;
  name: string;
  priority: number;
}

export async function POST(req: NextRequest) {
  const {
    overwrite,
    range,
    includeHolidays,
    startDate,
    endDate,
    dayOrder,
    nightOrder,
  }: {
    overwrite: string;
    range: string;
    includeHolidays: string;
    startDate: string;
    endDate: string;
    dayOrder: TeamOrder[];
    nightOrder: TeamOrder[];
  } = await req.json();

  // 检查 dayOrder 和 nightOrder 是否有重复优先级
  if (
    new Set(dayOrder.map((order) => order.priority)).size !== dayOrder.length ||
    new Set(nightOrder.map((order) => order.priority)).size !==
      nightOrder.length
  ) {
    return NextResponse.json(
      { error: "Day order and night order must have unique priorities." },
      { status: 400 }
    );
  }

  try {
    let start = new Date(startDate);
    let end = new Date(endDate);

    // 如果选择了当月，则设置 start 和 end 为当月的第一天和最后一天
    if (range === "month") {
      const now = new Date();
      start = new Date(now.getFullYear(), now.getMonth(), 1);
      end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    }

    // 获取所有需要排班的日期
    const dates = [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (
        includeHolidays === "exclude" &&
        (d.getDay() === 0 || d.getDay() === 6 || isHoliday(d))
      ) {
        continue;
      }
      dates.push(new Date(d));
    }

    const schedules = [];

    // 按优先级排序班组
    const sortedDayOrder = dayOrder.sort((a, b) => a.priority - b.priority);
    const sortedNightOrder = nightOrder.sort((a, b) => a.priority - b.priority);

    // 生成日班和夜班的排班表
    for (let i = 0; i < dates.length; i++) {
      const date = dates[i];
      const dayTeamIndex = i % sortedDayOrder.length;
      const nightTeamIndex = i % sortedNightOrder.length;

      const schedule = {
        schedule_date: date,
        day_team_id: sortedDayOrder[dayTeamIndex].id,
        night_team_id: sortedNightOrder[nightTeamIndex].id,
      };

      schedules.push(schedule);
    }

    if (overwrite === "overwrite") {
      // 覆盖现有排班
      await prisma.schedule.deleteMany({
        where: {
          schedule_date: {
            gte: start,
            lte: end,
          },
        },
      });
    }
    // 插入新排班，并逐个记录插入情况
    const createdSchedules = [];
    let i = 0; // 用于跟踪当前排班日期的索引
    let j = 0; // 用于跟踪当前累计排班的数量

    while (i < dates.length) {
      const date = dates[i];

      // 检查该日期是否已经有排班存在
      const existingSchedule = await prisma.schedule.findFirst({
        where: {
          schedule_date: date,
        },
      });

      // 如果没有现有排班，才插入新排班
      if (!existingSchedule) {
        const dayTeamIndex = j % sortedDayOrder.length;
        const nightTeamIndex = j % sortedNightOrder.length;

        const schedule = {
          schedule_date: date,
          day_team_id: sortedDayOrder[dayTeamIndex].id,
          night_team_id: sortedNightOrder[nightTeamIndex].id,
        };

        try {
          const created = await prisma.schedule.create({ data: schedule });
          createdSchedules.push(created);
          j++;
        } catch (error) {
          console.error(`Failed to create schedule for date ${date}:`, error);
        }
      } else {
        console.log(`Schedule for date ${date} already exists, skipping.`);
      }

      i++; // 无论是否插入排班，都递增索引以检查下一天
    }

    console.log("Created schedules:", createdSchedules);
    return NextResponse.json(createdSchedules, { status: 201 });
  } catch (error) {
    console.error("Failed to create schedules:", error);
    return NextResponse.json(
      { error: "Failed to create schedules" },
      { status: 500 }
    );
  }
}

function isHoliday(date: Date): boolean {
  const holiday = hd.isHoliday(date);
  return holiday !== false;
}
