import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");

  try {
    const recentDuties = await prisma.recentDuties.findMany({
      where: {
        OR: [
          { content: { contains: keyword || '' } },
          { duty_type: { contains: keyword || '' } },
        ],
      },
    });
    return NextResponse.json(recentDuties, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch recent duties" },
      { status: 500 }
    );
  }
}
