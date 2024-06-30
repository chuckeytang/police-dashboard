import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("start");
  const endDate = searchParams.get("end");
  const scheduleId = searchParams.get("id");

  try {
    let schedules;

    if (scheduleId) {
      schedules = await prisma.schedule.findUnique({
        where: {
          id: parseInt(scheduleId, 10),
        },
        include: {
          day_team: true,
          night_team: true,
        },
      });
    } else if (startDate && endDate) {
      schedules = await prisma.schedule.findMany({
        where: {
          schedule_date: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        },
        include: {
          day_team: true,
          night_team: true,
        },
      });
    } else {
      return NextResponse.json(
        { error: "Missing required query parameters: start, end or id" },
        { status: 400 }
      );
    }

    return NextResponse.json(schedules, { status: 200 });
  } catch (error) {
    console.error("Error fetching schedules:", error);
    return NextResponse.json(
      { error: "Failed to fetch schedules" },
      { status: 500 }
    );
  }
}
