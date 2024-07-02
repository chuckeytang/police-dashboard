import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    const deletedPatrolSchedule = await prisma.patrolSchedule.deleteMany({
      where: {
        schedule_date: {
          in: ids.map((id: string) => new Date(id)),
        },
      },
    });
    return NextResponse.json(deletedPatrolSchedule, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.DELETE_PATROL_SCHEDULE_FAILED + error },
      { status: 500 }
    );
  }
}
