import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "../../errorMessages";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: MESSAGES.WORK_FOCUS_NOT_SELECTED },
      { status: 400 }
    );
  }

  try {
    const workFocus = await prisma.workFocus.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!workFocus) {
      return NextResponse.json(
        { error: MESSAGES.WORK_FOCUS_NOT_FOUND },
        { status: 404 }
      );
    }

    return NextResponse.json(workFocus, { status: 200 });
  } catch (error) {
    console.error(MESSAGES.GET_WORK_FOCUS_DETAILS_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.GET_WORK_FOCUS_DETAILS_FAILED + error },
      { status: 500 }
    );
  }
}
