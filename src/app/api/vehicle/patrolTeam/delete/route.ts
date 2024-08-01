import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function DELETE(req: NextRequest) {
  const { patrol_team_id } = await req.json();

  try {
    // 删除与该班组相关的所有排班记录
    await prisma.patrolSchedule.deleteMany({
      where: {
        patrol_team_id: patrol_team_id,
      },
    });

    // 删除与该班组相关的所有成员分配记录
    await prisma.patrolStaffAssignment.deleteMany({
      where: {
        patrol_team_id: patrol_team_id,
      },
    });

    // 删除与该班组相关的所有车辆分配记录
    await prisma.patrolVehicleAssignment.deleteMany({
      where: {
        patrol_team_id: patrol_team_id,
      },
    });

    // 删除班组
    const deletedPatrolTeam = await prisma.patrolTeam.delete({
      where: {
        id: patrol_team_id,
      },
    });

    return NextResponse.json(
      { message: MESSAGES.DELETE_PATROL_TEAM_SUCCESS },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.DELETE_PATROL_TEAM_FAILED + error },
      { status: 500 }
    );
  }
}
