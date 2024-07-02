import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

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
        skills: [],
      },
    });
    return NextResponse.json(newStaff, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.CREATE_POLICEMAN_FAILED + error },
      { status: 500 }
    );
  }
}
