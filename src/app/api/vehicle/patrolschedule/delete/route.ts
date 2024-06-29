import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { schedule_date } = await req.json();

  try {
    const deletedPatrolSchedule = await prisma.patrolSchedule.deleteMany({
      where: {
        schedule_date: new Date(schedule_date),
      },
    });
    return NextResponse.json(deletedPatrolSchedule, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete patrol schedule" },
      { status: 500 }
    );
  }
}
