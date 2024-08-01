import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const scheduleData: any = {
    schedule_date: new Date(data.schedule_date),
  };

  if (data.day_team) {
    scheduleData.day_team_id = data.day_team;
  }

  if (data.night_team) {
    scheduleData.night_team_id = data.night_team;
  }

  try {
    const newSchedule = await prisma.schedule.create({
      data: scheduleData,
    });
    return NextResponse.json(newSchedule, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.ADD_TEAM_SCHEDULE_FAILED + error },
      { status: 500 }
    );
  }
}
