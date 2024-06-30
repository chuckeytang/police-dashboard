import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    const deletedSchedule = await prisma.schedule.deleteMany({
      where: {
        schedule_date: {
          in: ids.map((id: string) => new Date(id)),
        },
      },
    });
    return NextResponse.json(deletedSchedule, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete schedule" + error },
      { status: 500 }
    );
  }
}
