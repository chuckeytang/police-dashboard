// pages/api/team/add.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { team_name, leader_id, members } = data;
  const createData: any = { team_name };

  if (leader_id) {
    createData.leader = {
      connect: { id: leader_id },
    };
  }

  if (members) {
    createData.members = {
      connect: members.map((id: number) => ({ id })),
    };
  }

  try {
    const newTeam = await prisma.team.create({
      data: createData,
    });
    return NextResponse.json(newTeam, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add team" }, { status: 500 });
  }
}
