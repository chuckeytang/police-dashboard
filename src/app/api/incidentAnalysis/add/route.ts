import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function POST(req: NextRequest) {
  const {
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
    const newIncidentAnalysis = await prisma.incidentAnalysis.create({
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
    return NextResponse.json(newIncidentAnalysis, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.CREATE_INCIDENT_ANALYSIS_FAILED + error },
      { status: 500 }
    );
  }
}
