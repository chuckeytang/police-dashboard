import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "../../errorMessages";

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
    return NextResponse.json(deletedRecentDuties, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.DELETE_RECENT_DUTIES_FAILED + error },
      { status: 500 }
    );
  }
}
