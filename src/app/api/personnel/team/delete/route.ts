import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    const deletedTeam = await prisma.team.deleteMany({
      where: {
        id: {
          in: ids.map((id: string) => Number(id)),
        },
      },
    });
    return NextResponse.json(deletedTeam, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete team" },
      { status: 500 }
    );
  }
}
