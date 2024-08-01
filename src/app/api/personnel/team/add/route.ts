// pages/api/team/add.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

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
    return NextResponse.json(
      { error: MESSAGES.CREATE_TEAM_FAILED + error },
      { status: 500 }
    );
  }
}
