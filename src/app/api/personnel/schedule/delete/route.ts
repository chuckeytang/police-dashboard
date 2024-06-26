import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    const deletedSchedule = await prisma.schedule.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(deletedSchedule, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete schedule" },
      { status: 500 }
    );
  }
}
