import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "../../errorMessages";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const recentDuty = await prisma.recentDuties.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!recentDuty) {
      return NextResponse.json(
        { error: "Recent duty not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(recentDuty, { status: 200 });
  } catch (error) {
    console.error(MESSAGES.GET_RECENT_DUTIES_DETAILS_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.GET_RECENT_DUTIES_DETAILS_FAILED + error },
      { status: 500 }
    );
  }
}
