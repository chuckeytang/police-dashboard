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

      if (!schedules) {
        return NextResponse.json(
          { error: `Schedule with id ${scheduleId} not found` },
          { status: 404 }
        );
      }

      return NextResponse.json({ data: schedules }, { status: 200 });
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

      // 计算总数
      const total = await prisma.schedule.count({
        where: {
          schedule_date: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        },
      });

      return NextResponse.json(
        { data: schedules, total: total },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Missing required query parameters: start, end or id" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error fetching schedules:", error);
    return NextResponse.json(
      { error: MESSAGES.GET_TEAM_FAILED + error },
      { status: 500 }
    );
  }
}
