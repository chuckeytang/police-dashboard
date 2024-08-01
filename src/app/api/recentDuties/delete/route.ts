import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "../../errorMessages";

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    const deletedRecentDuty = await prisma.recentDuties.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(deletedRecentDuty, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.DELETE_RECENT_DUTIES_FAILED + error },
      { status: 500 }
    );
  }
}
