import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const { id, duty_date, duty_type, content } = await req.json();

  try {
    const updatedRecentDuty = await prisma.recentDuties.update({
      where: { id: Number(id) },
      data: {
        duty_date: new Date(duty_date),
        duty_type,
        content,
      },
    });
    return NextResponse.json(updatedRecentDuty, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update recent duty" },
      { status: 500 }
    );
  }
}
