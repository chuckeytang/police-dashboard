// pages/api/team/search.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const teams = await prisma.team.findMany({
      include: {
        leader: true,
        TeamMembers: {
          include: {
            staff: true,
          },
        },
      },
    });

    const formattedTeams = teams.map((team) => ({
      ...team,
      members: team.TeamMembers.map((tm) => tm.staff),
    }));

    return NextResponse.json(formattedTeams, { status: 200 });
  } catch (error) {
    console.error("Error fetching teams:", error);
    return NextResponse.json(
      { error: MESSAGES.GET_TEAM_FAILED + error },
      { status: 500 }
    );
  }
}
