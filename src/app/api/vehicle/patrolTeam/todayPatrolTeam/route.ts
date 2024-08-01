// pages/api/vehicle/patrolTeam/todayPatrolTeam.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function GET(req: NextRequest) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 设置为当天的开始时间

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1); // 获取明天的开始时间

  try {
    // 查询今日巡逻班组信息
    const patrolSchedules = await prisma.patrolSchedule.findMany({
      where: {
        schedule_date: {
          gte: today,
          lt: tomorrow,
        },
      },
      include: {
        patrol_team: {
          include: {
            patrol_vehicle_assignments: {
              include: {
                vehicle: true,
              },
            },
            patrol_staff_assignments: {
              include: {
                staff: true,
              },
            },
          },
        },
      },
    });

    if (patrolSchedules.length === 0) {
      return NextResponse.json(
        { message: "No patrol team found for today" },
        { status: 404 }
      );
    }

    // 提取巡逻班组信息
    const patrolTeams = patrolSchedules.map((schedule) => schedule.patrol_team);

    return NextResponse.json(patrolTeams, { status: 200 });
  } catch (error) {
    console.error(MESSAGES.GET_TODAY_PATROL_TEAM_INFO_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.GET_TODAY_PATROL_TEAM_INFO_FAILED + error },
      { status: 500 }
    );
  }
}
