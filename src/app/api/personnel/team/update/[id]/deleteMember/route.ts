// pages/api/personnel/team/update/[id]/deleteMember.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").slice(-2, -1)[0];
  const { member_id } = await req.json();

  if (!id || !member_id) {
    return NextResponse.json(
      { error: "Missing team id or member id" },
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
    console.error("Failed to delete member:", error);
    return NextResponse.json(
      { error: "Failed to delete member" },
      { status: 500 }
    );
  }
}
