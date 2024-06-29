// pages/api/vehicle/patrolteam/search.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const patrolTeams = await prisma.patrolTeam.findMany({
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

    return NextResponse.json(patrolTeams, { status: 200 });
  } catch (error) {
    console.error("Error fetching patrol teams:", error);
    return NextResponse.json(
      { error: "Failed to fetch patrol teams" },
      { status: 500 }
    );
  }
}
