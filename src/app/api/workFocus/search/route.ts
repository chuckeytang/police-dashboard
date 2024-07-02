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
    const workFocus = await prisma.workFocus.findMany({
      where: {
        content: {
          contains: keyword || "",
        },
      },
      orderBy: {
        [sort]: order.toLowerCase(), // Prisma expects 'asc' or 'desc'
      },
    });
    return NextResponse.json(workFocus, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.GET_WORK_FOCUS_FAILED + error },
      { status: 500 }
    );
  }
}
