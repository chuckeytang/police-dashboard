// pages/api/team/[id]/addMember.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { URL } from "url";
import { MESSAGES } from "@/app/api/errorMessages";

export async function PATCH(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").slice(-2, -1)[0];
  const { member_id } = await req.json();

  try {
    await prisma.teamMember.create({
      data: {
        team_id: Number(id),
        staff_id: member_id,
      },
    });

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
    console.error(MESSAGES.ADD_TEAM_MEMBER_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.ADD_TEAM_MEMBER_FAILED + error },
      { status: 500 }
    );
  }
}
