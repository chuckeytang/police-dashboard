import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    // 删除所有相关的排班记录
    await prisma.schedule.deleteMany({
      where: {
        OR: [
          { day_team_id: { in: ids.map((id: string) => Number(id)) } },
          { night_team_id: { in: ids.map((id: string) => Number(id)) } },
        ],
      },
    });

    // 删除所有TeamMember
    await prisma.teamMember.deleteMany({
      where: {
        team_id: {
          in: ids.map((id: string) => Number(id)),
        },
      },
    });

    // 删除班组记录
    const deletedTeams = await prisma.team.deleteMany({
      where: {
        id: {
          in: ids.map((id: string) => Number(id)),
        },
      },
    });

    return NextResponse.json(
      { message: MESSAGES.DELETE_TEAM_SUCCESS, count: deletedTeams.count },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting teams:", error);
    let errorMessage = MESSAGES.TEAM_DELETE_FAILED;
    let statusCode = 500;

    if (error.code === "P2025") {
      errorMessage = MESSAGES.TEAM_NOT_FOUND;
      statusCode = 404;
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
