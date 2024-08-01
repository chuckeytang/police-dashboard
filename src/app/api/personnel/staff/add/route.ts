import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function POST(req: NextRequest) {
  const { police_number, name, position, department, contact, vehicle } =
    await req.json();

  try {
    const newStaff = await prisma.staff.create({
      data: {
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
