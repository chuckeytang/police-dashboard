import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");

  try {
    const workFocus = await prisma.workFocus.findMany({
      where: {
        content: {
          contains: keyword || '',
        },
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
