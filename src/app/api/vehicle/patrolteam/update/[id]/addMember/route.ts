// pages/api/vehicle/patrolteam/update/[id]/addMember.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { URL } from "url";

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").slice(-2, -1)[0];
  const { member_id, shift } = await req.json();

  try {
    await prisma.patrolStaffAssignment.create({
      data: {
        patrol_team_id: Number(id),
        staff_id: member_id,
        shift: shift,
      },
    });

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

    const members = updatedPatrolTeam
      ? updatedPatrolTeam.PatrolStaffAssignments.map((psa) => ({
          ...psa,
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
    console.error("Error adding member:", error);
    return NextResponse.json(
      { error: "Failed to add member" },
      { status: 500 }
    );
  }
}
