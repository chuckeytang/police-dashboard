import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const department = searchParams.get("department");
  const position = searchParams.get("position");
  const keyword = searchParams.get("keyword");
  const sort = searchParams.get("_sort") || "id";
  const order = searchParams.get("_order") || "ASC";

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
      orderBy: {
        [sort]: order.toLowerCase(), // Prisma expects 'asc' or 'desc'
      },
    });
    return NextResponse.json(staff, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.GET_POLICEMAN_FAILED + error },
      { status: 500 }
    );
  }
}
