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
    const workFocus = await prisma.workFocus.findMany({
      where: {
        content: {
          contains: keyword || "",
        },
      },
      orderBy: {
        [sort]: order.toLowerCase(), // Prisma expects 'asc' or 'desc'
      },
      take: take,
      skip: skip,
    });

    // 计算总数
    const total = await prisma.workFocus.count({
      where: {
        content: {
          contains: keyword || "",
        },
      },
    });

    return NextResponse.json(
      { data: workFocus, total: total },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.GET_WORK_FOCUS_FAILED + error },
      { status: 500 }
    );
  }
}
