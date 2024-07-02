import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "../../errorMessages";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const {
    id,
    incident_number,
    receiver,
    report_time,
    contact_number,
    reporter,
    incident_category,
    report_source,
    incident_location,
    incident_details,
    incident_status,
    response_time,
  } = await req.json();

  try {
    const updatedIncidentAnalysis = await prisma.incidentAnalysis.update({
      where: { id: Number(id) },
      data: {
        incident_number,
        receiver,
        report_time: new Date(report_time),
        contact_number,
        reporter,
        incident_category,
        report_source,
        incident_location,
        incident_details,
        incident_status,
        response_time: new Date(response_time),
      },
    });
    return NextResponse.json(updatedIncidentAnalysis, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.UPDATE_INCIDENT_ANALYSIS_FAILED + error },
      { status: 500 }
    );
  }
}
