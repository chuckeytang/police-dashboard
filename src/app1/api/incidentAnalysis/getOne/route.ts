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
    const incidentAnalysis = await prisma.incidentAnalysis.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!incidentAnalysis) {
      return NextResponse.json({ error: "Incident analysis not found" }, { status: 404 });
    }

    return NextResponse.json(incidentAnalysis, { status: 200 });
  } catch (error) {
    console.error("Error fetching incident analysis:", error);
    return NextResponse.json(
      { error: `Failed to fetch incident analysis: ${error}` },
      { status: 500 }
    );
  }
}
