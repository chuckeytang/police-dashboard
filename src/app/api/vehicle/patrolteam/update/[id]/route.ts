// pages/api/vehicle/patrolteam/update/[id].ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { URL } from "url";

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  const data = await req.json();

  try {
    // 更新巡逻组
    await prisma.patrolTeam.update({
      where: { id: Number(id) },
      data: {
        ...data,
        PatrolVehicleAssignments: data.vehicle_id
          ? {
              deleteMany: {},
              create: {
                vehicle_id: data.vehicle_id,
              },
            }
          : undefined,
        PatrolStaffAssignments: data.members
          ? {
              deleteMany: {},
              create: data.members.map(
                (member: { id: number; shift: string }) => ({
                  staff_id: member.id,
                  shift: member.shift,
                })
              ),
            }
          : undefined,
      },
    });

    // 获取更新后的巡逻组信息，包括车辆和成员
    const updatedPatrolTeam = await prisma.patrolTeam.findUnique({
      where: { id: Number(id) },
      include: {
        PatrolVehicleAssignments: {
          include: {
            vehicle: true,
          },
        },
        PatrolStaffAssignments: {
          include: {
            staff: true,
          },
        },
      },
    });

    // 格式化成员信息
    const members = updatedPatrolTeam
      ? updatedPatrolTeam.PatrolStaffAssignments.map((psa) => ({
          ...psa.staff,
          shift: psa.shift,
        }))
      : [];

    const vehicle =
      updatedPatrolTeam && updatedPatrolTeam.PatrolVehicleAssignments.length > 0
        ? updatedPatrolTeam.PatrolVehicleAssignments[0].vehicle
        : null;

    return NextResponse.json(
      { ...updatedPatrolTeam, members, vehicle },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating patrol team:", error);
    return NextResponse.json(
      { error: "Failed to update patrol team" },
      { status: 500 }
    );
  }
}
