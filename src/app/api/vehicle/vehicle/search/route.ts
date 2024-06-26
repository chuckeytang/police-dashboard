import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const vehicle_type = searchParams.get("vehicle_type");
  const status = searchParams.get("status");
  const usage_status = searchParams.get("usage_status");
  const department = searchParams.get("department");
  const keyword = searchParams.get("keyword");
  const sort = searchParams.get("_sort") || "id";
  const order = searchParams.get("_order") || "ASC";

  try {
    const vehicles = await prisma.vehicle.findMany({
      where: {
        AND: [
          vehicle_type ? { vehicle_type: vehicle_type } : {},
          status ? { status: status } : {},
          usage_status ? { usage_status: usage_status } : {},
          department ? { department: department } : {},
          keyword
            ? {
                OR: [
                  { plate_number: { contains: keyword } },
                  { brand_model: { contains: keyword } },
                  { user_id: parseInt(keyword, 10) || undefined },
                ],
              }
            : {},
        ],
      },
      orderBy: {
        [sort]: order.toLowerCase(), // Prisma expects 'asc' or 'desc'
      },
    });
    return NextResponse.json(vehicles, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch vehicles" },
      { status: 500 }
    );
  }
}
