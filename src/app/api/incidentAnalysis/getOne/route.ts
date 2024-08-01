import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "../../errorMessages";

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
      return NextResponse.json(
        { error: "Incident analysis not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(incidentAnalysis, { status: 200 });
  } catch (error) {
    console.error(MESSAGES.GET_INCIDENT_ANALYSIS_DETAILS_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.GET_INCIDENT_ANALYSIS_DETAILS_FAILED + error },
      { status: 500 }
    );
  }
}
