import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const incidentAnalysisList = await req.json();
  const results = {
    success: [] as any[],
    failed: [] as any[],
  };

  for (const incident of incidentAnalysisList) {
    try {
      const newIncidentAnalysis = await prisma.incidentAnalysis.create({
        data: {
          incident_number: incident.incident_number,
          receiver: incident.receiver,
          report_time: new Date(incident.report_time),
          contact_number: incident.contact_number,
          reporter: incident.reporter,
          incident_category: incident.incident_category,
          report_source: incident.report_source,
          incident_location: incident.incident_location,
          incident_details: incident.incident_details,
          incident_status: incident.incident_status,
          response_time: new Date(incident.response_time),
        },
      });
      results.success.push(newIncidentAnalysis);
    } catch (error: any) {
      results.failed.push({
        incident,
        error: error.message || error.toString(),
      });
    }
  }

  return NextResponse.json(results, {
    status: results.failed.length ? 207 : 200,
  });
}
