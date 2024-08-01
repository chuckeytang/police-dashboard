import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "../../errorMessages";

export async function POST(req: NextRequest) {
  const { focus_date, content } = await req.json();

  try {
    const newWorkFocus = await prisma.workFocus.create({
      data: {
        focus_date: new Date(focus_date),
        content,
      },
    });
    return NextResponse.json(newWorkFocus, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.CREATE_WORK_FOCUS_FAILED + error },
      { status: 500 }
    );
  }
}
