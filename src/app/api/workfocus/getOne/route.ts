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
    const workFocus = await prisma.workFocus.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!workFocus) {
      return NextResponse.json({ error: "Work focus not found" }, { status: 404 });
    }

    return NextResponse.json(workFocus, { status: 200 });
  } catch (error) {
    console.error("Error fetching work focus:", error);
    return NextResponse.json(
      { error: `Failed to fetch work focus: ${error}` },
      { status: 500 }
    );
  }
}
