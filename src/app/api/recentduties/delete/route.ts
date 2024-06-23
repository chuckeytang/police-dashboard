import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    const deletedRecentDuties = await prisma.recentDuties.deleteMany({
      where: {
        id: {
          in: ids.map((id: string) => Number(id)),
        },
      },
    });
    return NextResponse.json(deletedRecentDuties, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete recent duties" },
      { status: 500 }
    );
  }
}
