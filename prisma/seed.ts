import { PrismaClient } from "@prisma/client";
import { addDays, startOfMonth, endOfMonth } from "date-fns";

const prisma = new PrismaClient();

async function main() {
  // 创建团队并分配领导和成员
  const team1 = await prisma.team.create({
    data: {
      team_name: "勤务一组",
      leader: {
        connect: { id: 1 }, // 假设id为1的人员是领导
      },
      members: {
        connect: [{ id: 2 }, { id: 3 }], // 假设id为2和3的人员是成员
      },
    },
  });

  const team2 = await prisma.team.create({
    data: {
      team_name: "勤务二组",
      leader: {
        connect: { id: 4 }, // 假设id为4的人员是领导
      },
      members: {
        connect: [{ id: 5 }, { id: 6 }], // 假设id为5和6的人员是成员
      },
    },
  });

  console.log({ team1, team2 });

  // 获取当前月份的第一天和最后一天
  const today = new Date();
  const firstDayOfMonth = startOfMonth(today);
  const lastDayOfMonth = endOfMonth(today);

  // 生成本月的排班数据
  let currentDate = firstDayOfMonth;
  let isTeam1DayShift = true;

  while (currentDate <= lastDayOfMonth) {
    await prisma.schedule.create({
      data: {
        schedule_date: currentDate,
        day_team: {
          connect: { id: isTeam1DayShift ? team1.id : team2.id },
        },
        night_team: {
          connect: { id: isTeam1DayShift ? team2.id : team1.id },
        },
      },
    });

    // 切换班次
    isTeam1DayShift = !isTeam1DayShift;
    // 日期加1
    currentDate = addDays(currentDate, 1);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
