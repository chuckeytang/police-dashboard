import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const staff = await prisma.staff.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!staff) {
      return NextResponse.json({ error: "Staff not found" }, { status: 404 });
    }

    return NextResponse.json(staff, { status: 200 });
  } catch (error) {
    console.error(MESSAGES.GET_POLICEMAN_DETAILS_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.GET_POLICEMAN_DETAILS_FAILED + error },
      { status: 500 }
    );
  }
}
