import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function DELETE(req: NextRequest) {
  const { schedule_date } = await req.json();

  try {
    const deletedSchedule = await prisma.schedule.deleteMany({
      where: {
        schedule_date: new Date(schedule_date),
      },
    });
    return NextResponse.json(
      { message: MESSAGES.DELETE_TEAM_SCHEDULE_SUCCESS },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting schedule:", error);
    return NextResponse.json(
      { error: MESSAGES.DELETE_TEAM_SCHEDULE_FAILED + error },
      { status: 500 }
    );
  }
}
