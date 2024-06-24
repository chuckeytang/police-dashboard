import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");
  const sort = searchParams.get("_sort") || "id";
  const order = searchParams.get("_order") || "ASC";

  try {
    const workFocus = await prisma.workFocus.findMany({
      where: {
        content: {
          contains: keyword || '',
        },
      },
      orderBy: {
        [sort]: order.toLowerCase(), // Prisma expects 'asc' or 'desc'
      },
    });
    return NextResponse.json(workFocus, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch work focus" },
      { status: 500 }
    );
  }
}
