import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "../../errorMessages";

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

    let dayTeam = null;
    let nightTeam = null;

    // 获取日班团队成员和领导
    if (schedule.day_team_id && schedule.day_team) {
      const dayTeamMembers = await prisma.teamMember.findMany({
        where: {
          team_id: schedule.day_team_id,
        },
        include: {
          staff: true,
        },
      });

      const dayTeamLeader = schedule.day_team.leader_id
        ? await prisma.staff.findUnique({
            where: {
              id: schedule.day_team.leader_id,
            },
          })
        : null;

      dayTeam = {
        team_name: schedule.day_team.team_name,
        leader: dayTeamLeader,
        members: dayTeamMembers.map((member: any) => member.staff),
      };
    }

    // 获取夜班团队成员和领导
    if (schedule.night_team_id && schedule.night_team) {
      const nightTeamMembers = await prisma.teamMember.findMany({
        where: {
          team_id: schedule.night_team_id,
        },
        include: {
          staff: true,
        },
      });

      const nightTeamLeader = schedule.night_team.leader_id
        ? await prisma.staff.findUnique({
            where: {
              id: schedule.night_team.leader_id,
            },
          })
        : null;

      nightTeam = {
        team_name: schedule.night_team.team_name,
        leader: nightTeamLeader,
        members: nightTeamMembers.map((member: any) => member.staff),
      };
    }

    // 如果日班和夜班都为空，返回错误
    if (!dayTeam && !nightTeam) {
      return NextResponse.json(
        { message: "Both day and night teams are empty for today" },
        { status: 404 }
      );
    }

    return NextResponse.json({ dayTeam, nightTeam }, { status: 200 });
  } catch (error) {
    console.error(MESSAGES.GET_TODAY_TEAM_MEMBERS_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.GET_TODAY_TEAM_MEMBERS_FAILED + error },
      { status: 500 }
    );
  }
}
