import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "../../errorMessages";

export async function PUT(req: NextRequest) {
  const { id, focus_date, content } = await req.json();

  try {
    const updatedWorkFocus = await prisma.workFocus.update({
      where: { id: Number(id) },
      data: {
        focus_date: new Date(focus_date),
        content,
      },
    });
    return NextResponse.json(updatedWorkFocus, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.UPDATE_WORK_FOCUS_FAILED + error },
      { status: 500 }
    );
  }
}
