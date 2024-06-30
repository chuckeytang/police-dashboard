import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");
  const report_time_gte = searchParams.get("report_time_gte");
  const report_time_lte = searchParams.get("report_time_lte");
  const response_time_gte = searchParams.get("response_time_gte");
  const response_time_lte = searchParams.get("response_time_lte");
  const incident_status = searchParams.get("incident_status");
  const sort = searchParams.get("_sort") || "id";
  const order = searchParams.get("_order") || "ASC";

  try {
    const incidentAnalyses = await prisma.incidentAnalysis.findMany({
      where: {
        AND: [
          keyword
            ? {
                OR: [
                  { contact_number: { contains: keyword } },
                  { receiver: { contains: keyword } },
                  { reporter: { contains: keyword } },
                  { incident_category: { contains: keyword } },
                  { report_source: { contains: keyword } },
                  { incident_location: { contains: keyword } },
                  { incident_details: { contains: keyword } },
                ],
              }
            : {},
          report_time_gte
            ? { report_time: { gte: new Date(report_time_gte) } }
            : {},
          report_time_lte
            ? { report_time: { lte: new Date(report_time_lte) } }
            : {},
          response_time_gte
            ? { response_time: { gte: new Date(response_time_gte) } }
            : {},
          response_time_lte
            ? { response_time: { lte: new Date(response_time_lte) } }
            : {},
          incident_status ? { incident_status: incident_status } : {},
        ],
      },
      orderBy: {
        [sort]: order.toLowerCase(), // Prisma expects 'asc' or 'desc'
      },
    });
    return NextResponse.json(incidentAnalyses, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch incident analyses" },
      { status: 500 }
    );
  }
}
