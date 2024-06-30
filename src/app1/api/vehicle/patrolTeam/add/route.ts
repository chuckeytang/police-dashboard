// pages/api/vehicle/patrolTeam/add.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { team_name, vehicle_id, members } = data;

  const createData: any = { team_name };

  if (vehicle_id) {
    createData.patrol_vehicle_assignments = {
      create: {
        vehicle_id: vehicle_id,
      },
    };
  }

  if (members) {
    createData.patrol_staff_assignments = {
      create: members.map((member: { id: number; shift: string }) => ({
        staff_id: member.id,
        shift: member.shift,
      })),
    };
  }

  try {
    const newPatrolTeam = await prisma.patrolTeam.create({
      data: createData,
      include: {
        patrol_vehicle_assignments: true,
        patrol_staff_assignments: {
          include: {
            staff: true,
          },
        },
      },
    });
    return NextResponse.json(newPatrolTeam, { status: 201 });
  } catch (error) {
    console.error("Failed to add patrol team:", error);
    return NextResponse.json(
      { error: "Failed to add patrol team" },
      { status: 500 }
    );
  }
}