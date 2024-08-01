import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "../../errorMessages";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");
  const sort = searchParams.get("_sort") || "id";
  const order = searchParams.get("_order") || "ASC";
  const start = parseInt(searchParams.get("_start") || "0", 10);
  const end = parseInt(searchParams.get("_end") || "1000", 10);
  const take = end - start;
  const skip = start;

  try {
    const recentDuties = await prisma.recentDuties.findMany({
      where: {
        OR: [
          { content: { contains: keyword || "" } },
          { duty_type: { contains: keyword || "" } },
        ],
      },
      orderBy: {
        [sort]: order.toLowerCase(), // Prisma expects 'asc' or 'desc'
      },
      take: take,
      skip: skip,
    });

    // 计算总数
    const total = await prisma.recentDuties.count({
      where: {
        OR: [
          { content: { contains: keyword || "" } },
          { duty_type: { contains: keyword || "" } },
        ],
      },
    });

    return NextResponse.json(
      { data: recentDuties, total: total },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.GET_RECENT_DUTIES_FAILED + error },
      { status: 500 }
    );
  }
}
