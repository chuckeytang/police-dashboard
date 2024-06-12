import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { code, police_number, name, position, department, contact, vehicle } =
    await req.json();

  try {
    const newStaff = await prisma.staff.create({
      data: {
        code,
        police_number,
        name,
        position,
        department,
        contact,
        vehicle,
      },
    });
    return NextResponse.json(newStaff, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create staff" },
      { status: 500 }
    );
  }
}
