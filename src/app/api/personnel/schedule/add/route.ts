import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const newSchedule = await prisma.schedule.create({
      data: {
        schedule_date: new Date(data.schedule_date),
        day_team_id: data.day_team,
        night_team_id: data.night_team,
      },
    });
    return NextResponse.json(newSchedule, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.ADD_TEAM_SCHEDULE_FAILED + error },
      { status: 500 }
    );
  }
}
