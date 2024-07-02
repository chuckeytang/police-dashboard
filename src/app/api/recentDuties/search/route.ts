import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "../../errorMessages";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");
  const sort = searchParams.get("_sort") || "id";
  const order = searchParams.get("_order") || "ASC";

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
    });
    return NextResponse.json(recentDuties, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.GET_RECENT_DUTIES_FAILED + error },
      { status: 500 }
    );
  }
}
