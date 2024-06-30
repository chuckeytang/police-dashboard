import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { startOfMonth } from "date-fns";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const startDateParam = searchParams.get("startDate");
  const endDateParam = searchParams.get("endDate");

  const today = new Date();
  const startDate = startDateParam
    ? new Date(startDateParam)
    : startOfMonth(today);
  const endDate = endDateParam ? new Date(endDateParam) : today;

  try {
    const incidentCounts = await prisma.incidentAnalysis.groupBy({
      by: ["receiver"],
      where: {
        report_time: {
          gte: startDate,
          lte: endDate,
        },
      },
      _count: {
        _all: true,
      },
    });

    return NextResponse.json(incidentCounts, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch incident counts" },
      { status: 500 }
    );
  }
}
