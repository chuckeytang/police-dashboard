import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    // 删除所有相关的排班记录
    await prisma.schedule.deleteMany({
      where: {
        OR: [{ day_team_id: Number(id) }, { night_team_id: Number(id) }],
      },
    });

    // 删除所有TeamMember
    await prisma.teamMember.deleteMany({
      where: {
        team_id: Number(id),
      },
    });

    // 删除班组记录
    const deletedTeam = await prisma.team.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(
      { message: MESSAGES.DELETE_TEAM_SUCCESS },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting team:", error);
    switch (error.code) {
      case "P2025":
        return NextResponse.json(
          { error: MESSAGES.TEAM_NOT_FOUND },
          { status: 404 }
        );
      default:
        return NextResponse.json(
          { error: MESSAGES.TEAM_DELETE_FAILED },
          { status: 500 }
        );
    }
  }
}
