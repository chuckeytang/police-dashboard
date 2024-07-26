import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

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
  const start = parseInt(searchParams.get("_start") || "0", 10);
  const end = parseInt(searchParams.get("_end") || "10", 10);
  const take = end - start;
  const skip = start;

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
                  {
                    user_id: isNaN(parseInt(keyword, 10))
                      ? undefined
                      : parseInt(keyword, 10),
                  },
                ],
              }
            : {},
        ],
      },
      orderBy: {
        [sort]: order.toLowerCase(), // Prisma expects 'asc' or 'desc'
      },
      take: take,
      skip: skip,
    });

    // 计算总数
    const total = await prisma.vehicle.count({
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
                  {
                    user_id: isNaN(parseInt(keyword, 10))
                      ? undefined
                      : parseInt(keyword, 10),
                  },
                ],
              }
            : {},
        ],
      },
    });

    return NextResponse.json({ data: vehicles, total: total }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.GET_VEHICLE_INFO_FAILED + error },
      { status: 500 }
    );
  }
}
