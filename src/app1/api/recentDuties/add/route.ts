import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { duty_date, duty_type, content } = await req.json();

  try {
    const newRecentDuty = await prisma.recentDuties.create({
      data: {
        duty_date: new Date(duty_date),
        duty_type,
        content,
      },
    });
    return NextResponse.json(newRecentDuty, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create recent duty" },
      { status: 500 }
    );
  }
}
