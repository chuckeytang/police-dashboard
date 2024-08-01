import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const newPatrolSchedule = await prisma.patrolSchedule.create({
      data: {
        schedule_date: new Date(data.schedule_date),
        patrol_team_id: data.patrol_team_id,
      },
      include: {
        patrol_team: true,
      },
    });
    return NextResponse.json(newPatrolSchedule, { status: 201 });
  } catch (error) {
    console.error(MESSAGES.ADD_PATROL_SCHEDULE_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.ADD_PATROL_SCHEDULE_FAILED + error },
      { status: 500 }
    );
  }
}
