import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    const deletedPatrolTeam = await prisma.patrolTeam.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(deletedPatrolTeam, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete patrol team" },
      { status: 500 }
    );
  }
}
