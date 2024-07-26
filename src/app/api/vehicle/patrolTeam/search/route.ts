// pages/api/vehicle/patrolTeam/search.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const patrolTeams = await prisma.patrolTeam.findMany({
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

    return NextResponse.json({ data: patrolTeams, total: 0 }, { status: 200 });
  } catch (error) {
    console.error(MESSAGES.GET_PATROL_TEAM_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.GET_PATROL_TEAM_FAILED + error },
      { status: 500 }
    );
  }
}
