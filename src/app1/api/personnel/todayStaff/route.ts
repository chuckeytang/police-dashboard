import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 设置为当天的开始时间

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1); // 获取明天的开始时间

  try {
    // 查询今日排班信息
    const schedule = await prisma.schedule.findFirst({
      where: {
        schedule_date: {
          gte: today,
          lt: tomorrow,
        },
      },
      include: {
        day_team: true,
        night_team: true,
      },
    });

    if (!schedule) {
      return NextResponse.json(
        { message: "No schedule found for today" },
        { status: 404 }
      );
    }

    // 获取日班和夜班团队成员
    const dayTeamMembers = await prisma.teamMember.findMany({
      where: {
        team_id: schedule.day_team_id,
      },
      include: {
        staff: true,
      },
    });

    const nightTeamMembers = await prisma.teamMember.findMany({
      where: {
        team_id: schedule.night_team_id,
      },
      include: {
        staff: true,
      },
    });

    // 获取日班和夜班领导
    const dayTeamLeader = await prisma.staff.findUnique({
      where: {
        id: schedule.day_team.leader_id
          ? schedule.day_team.leader_id
          : undefined,
      },
    });

    const nightTeamLeader = await prisma.staff.findUnique({
      where: {
        id: schedule.night_team.leader_id
          ? schedule.night_team.leader_id
          : undefined,
      },
    });

    const dayTeam = {
      team_name: schedule.day_team.team_name,
      leader: dayTeamLeader,
      members: dayTeamMembers.map((member) => member.staff),
    };

    const nightTeam = {
      team_name: schedule.night_team.team_name,
      leader: nightTeamLeader,
      members: nightTeamMembers.map((member) => member.staff),
    };

    return NextResponse.json({ dayTeam, nightTeam }, { status: 200 });
  } catch (error) {
    console.error("Error fetching today's staff:", error);
    return NextResponse.json(
      { error: "Failed to fetch today's staff" },
      { status: 500 }
    );
  }
}
