import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "../../errorMessages";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    const deletedIncidentAnalysis = await prisma.incidentAnalysis.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(
      { message: MESSAGES.DELETE_INCIDENT_ANALYSIS_SUCCESS },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.DELETE_INCIDENT_ANALYSIS_FAILED + error },
      { status: 500 }
    );
  }
}
