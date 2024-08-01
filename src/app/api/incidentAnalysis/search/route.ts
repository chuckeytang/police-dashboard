import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "../../errorMessages";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");
  const report_time_gte = searchParams.get("report_time_gte");
  const report_time_lte = searchParams.get("report_time_lte");
  const response_time_gte = searchParams.get("response_time_gte");
  const response_time_lte = searchParams.get("response_time_lte");
  const incident_status = searchParams.get("incident_status");
  const incident_category = searchParams.get("incident_category");
  const sort = searchParams.get("_sort") || "id";
  const order = searchParams.get("_order") || "ASC";
  const start = parseInt(searchParams.get("_start") || "0", 10);
  const end = parseInt(searchParams.get("_end") || "1000", 10);
  const take = end - start;
  const skip = start;

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
          incident_category ? { incident_category: incident_category } : {},
        ],
      },
      orderBy: {
        [sort]: order.toLowerCase(), // Prisma expects 'asc' or 'desc'
      },
      take: take,
      skip: skip,
    });

    // 计算总数
    const total = await prisma.incidentAnalysis.count({
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
          incident_category ? { incident_category: incident_category } : {},
        ],
      },
    });

    return NextResponse.json(
      { data: incidentAnalyses, total: total },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.GET_INCIDENT_ANALYSIS_FAILED + error },
      { status: 500 }
    );
  }
}
