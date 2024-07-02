// pages/api/vehicle/patrolTeam/update/[id].ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { URL } from "url";
import { connect } from "http2";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  const data = await req.json();

  try {
    const updateData = {
      patrol_vehicle_assignments: data.vehicle_id
        ? {
            deleteMany: {}, // 清空现有的车辆分配
            create: {
              vehicle: {
                connect: { id: Number(data.vehicle_id) },
              },
            },
          }
        : undefined,
      patrol_staff_assignments: data.members
        ? {
            deleteMany: {}, // 清空现有的员工分配
            create: data.members.map(
              (member: { id: number; shift: string }) => ({
                staff: {
                  connect: { id: Number(data.staff_id) },
                },
                shift: member.shift,
              })
            ),
          }
        : undefined,
    };

    // 执行更新操作
    await prisma.patrolTeam.update({
      where: { id: Number(id) },
      data: updateData,
    });

    // 获取更新后的巡逻组信息，包括车辆和成员
    const updatedPatrolTeam = await prisma.patrolTeam.findUnique({
      where: { id: Number(id) },
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
    });

    // 格式化成员信息
    const members = updatedPatrolTeam
      ? updatedPatrolTeam.patrol_staff_assignments.map((psa) => ({
          ...psa,
          shift: psa.shift,
        }))
      : [];

    const vehicle =
      updatedPatrolTeam &&
      updatedPatrolTeam.patrol_vehicle_assignments.length > 0
        ? updatedPatrolTeam.patrol_vehicle_assignments[0].vehicle
        : null;

    return NextResponse.json(
      { ...updatedPatrolTeam, members, vehicle },
      { status: 200 }
    );
  } catch (error) {
    console.error(MESSAGES.UPDATE_PATROL_TEAM_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.UPDATE_PATROL_TEAM_FAILED + error },
      { status: 500 }
    );
  }
}
