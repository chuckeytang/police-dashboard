// pages/api/team/[id].ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { URL } from "url";

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  const data = await req.json();

  try {
    // 更新团队
    await prisma.team.update({
      where: { id: Number(id) },
      data: {
        ...data,
        members: data.members
          ? {
              set: data.members.map((memberId: number) => ({ id: memberId })),
            }
          : undefined,
      },
    });

    // 获取更新后的团队信息，包括领导和成员
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

    // 格式化成员信息
    const members = updatedTeam
      ? updatedTeam.TeamMembers.map((tm) => tm.staff)
      : [];

    return NextResponse.json({ ...updatedTeam, members }, { status: 200 });
  } catch (error) {
    console.error("Error updating team:", error);
    return NextResponse.json(
      { error: "Failed to update team" },
      { status: 500 }
    );
  }
}
