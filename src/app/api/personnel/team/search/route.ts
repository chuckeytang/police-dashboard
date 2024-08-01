import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url); // placeholder for npm run build not building static page
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

    return NextResponse.json(
      { data: formattedTeams, total: 0 },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching teams:", error);
    return NextResponse.json(
      { error: MESSAGES.GET_TEAM_FAILED + error },
      { status: 500 }
    );
  }
}
