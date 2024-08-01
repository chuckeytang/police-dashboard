import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "../../errorMessages";

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
      { error: MESSAGES.UPDATE_RECENT_DUTIES_FAILED + error },
      { status: 500 }
    );
  }
}
