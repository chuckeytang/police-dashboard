import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

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
      { error: MESSAGES.DELETE_PATROL_SCHEDULE_FAILED + error },
      { status: 500 }
    );
  }
}
