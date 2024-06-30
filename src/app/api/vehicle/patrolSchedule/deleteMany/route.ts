import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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
      { error: "Failed to delete patrol schedule: " + error },
      { status: 500 }
    );
  }
}
