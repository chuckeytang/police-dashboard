import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    // 删除与给定日期相关的所有排班记录
    const deletedPatrolSchedule = await prisma.patrolSchedule.deleteMany({
      where: {
        schedule_date: {
          in: ids.map((id: string) => new Date(id)),
        },
      },
    });

    // 获取所有与删除的排班记录相关的 patrol_team_id
    const patrolTeamIds = await prisma.patrolSchedule
      .findMany({
        where: {
          schedule_date: {
            in: ids.map((id: string) => new Date(id)),
          },
        },
        select: {
          patrol_team_id: true,
        },
      })
      .then((records) => records.map((record) => record.patrol_team_id));

    // 删除与这些 patrol_team_id 相关的所有成员分配记录
    await prisma.patrolStaffAssignment.deleteMany({
      where: {
        patrol_team_id: {
          in: patrolTeamIds,
        },
      },
    });

    // 删除与这些 patrol_team_id 相关的所有车辆分配记录
    await prisma.patrolVehicleAssignment.deleteMany({
      where: {
        patrol_team_id: {
          in: patrolTeamIds,
        },
      },
    });

    // 删除班组记录
    await prisma.patrolTeam.deleteMany({
      where: {
        id: {
          in: patrolTeamIds,
        },
      },
    });

    return NextResponse.json(deletedPatrolSchedule, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.DELETE_PATROL_TEAM_FAILED + error },
      { status: 500 }
    );
  }
}
