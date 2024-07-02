import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("start");
  const endDate = searchParams.get("end");
  const scheduleId = searchParams.get("id");

  try {
    let patrolSchedules;

    if (scheduleId) {
      patrolSchedules = await prisma.patrolSchedule.findUnique({
        where: {
          id: parseInt(scheduleId, 10),
        },
        include: {
          patrol_team: true,
        },
      });
    } else if (startDate && endDate) {
      patrolSchedules = await prisma.patrolSchedule.findMany({
        where: {
          schedule_date: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        },
        include: {
          patrol_team: true,
        },
      });
    } else {
      return NextResponse.json(
        { error: "Missing required query parameters: start, end or id" },
        { status: 400 }
      );
    }

    return NextResponse.json(patrolSchedules, { status: 200 });
  } catch (error) {
    console.error(MESSAGES.GET_PATROL_SCHEDULE_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.GET_PATROL_SCHEDULE_FAILED + error },
      { status: 500 }
    );
  }
}
