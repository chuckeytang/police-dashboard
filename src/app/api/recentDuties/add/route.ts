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
      { error: "创建近期勤务失败" + error },
      { status: 500 }
    );
  }
}
