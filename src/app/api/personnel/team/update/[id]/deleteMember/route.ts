// pages/api/personnel/team/update/[id]/deleteMember.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function PATCH(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").slice(-2, -1)[0];
  const { member_id } = await req.json();

  if (!id || !member_id) {
    return NextResponse.json(
      { error: MESSAGES.MEMBER_NOT_IN_TEAM },
      { status: 400 }
    );
  }

  try {
    // 删除 TeamMember 记录
    await prisma.teamMember.deleteMany({
      where: {
        team_id: Number(id),
        staff_id: member_id,
      },
    });

    // 获取更新后的 Team 数据
    const updatedTeam = await prisma.team.findUnique({
      where: { id: Number(id) },
      include: {
        leader: true,
        TeamMembers: {
          include: {
            staff: true,
          },
        },
      },
    });

    const members = updatedTeam
      ? updatedTeam.TeamMembers.map((tm) => tm.staff)
      : [];

    return NextResponse.json({ ...updatedTeam, members }, { status: 200 });
  } catch (error) {
    console.error(MESSAGES.DELETE_TEAM_MEMBER_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.DELETE_TEAM_MEMBER_FAILED + error },
      { status: 500 }
    );
  }
}
