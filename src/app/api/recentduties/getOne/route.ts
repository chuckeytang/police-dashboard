import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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
      return NextResponse.json({ error: "Recent duty not found" }, { status: 404 });
    }

    return NextResponse.json(recentDuty, { status: 200 });
  } catch (error) {
    console.error("Error fetching recent duty:", error);
    return NextResponse.json(
      { error: `Failed to fetch recent duty: ${error}` },
      { status: 500 }
    );
  }
}
