// pages/api/vehicle/patrolTeam/delete.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    const deletedPatrolTeams = await prisma.patrolTeam.deleteMany({
      where: {
        id: {
          in: ids.map((id: string) => Number(id)),
        },
      },
    });
    return NextResponse.json(deletedPatrolTeams, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete patrol teams" },
      { status: 500 }
    );
  }
}
