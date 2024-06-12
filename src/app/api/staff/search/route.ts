import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const department = searchParams.get("department");
  const position = searchParams.get("position");
  const keyword = searchParams.get("keyword");

  try {
    const staff = await prisma.staff.findMany({
      where: {
        AND: [
          department ? { department: department } : {},
          position ? { position: position } : {},
          keyword
            ? {
                OR: [
                  { police_number: { contains: keyword } },
                  { name: { contains: keyword } },
                  { contact: { contains: keyword } },
                ],
              }
            : {},
        ],
      },
    });
    return NextResponse.json(staff, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch staff" },
      { status: 500 }
    );
  }
}
