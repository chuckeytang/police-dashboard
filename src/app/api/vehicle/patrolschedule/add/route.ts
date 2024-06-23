import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    console.error("Failed to add patrol schedule:", error);
    return NextResponse.json(
      { error: "Failed to add patrol schedule" },
      { status: 500 }
    );
  }
}
