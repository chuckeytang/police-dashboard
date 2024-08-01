// pages/api/vehicle/patrolTeam/search.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url); // placeholder for npm run build not building static page
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
