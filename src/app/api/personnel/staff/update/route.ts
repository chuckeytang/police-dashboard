import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function PUT(req: NextRequest) {
  const { id, police_number, name, position, department, contact, vehicle } =
    await req.json();

  try {
    const updatedStaff = await prisma.staff.update({
      where: { id: Number(id) },
      data: {
        police_number,
        name,
        position,
        department,
        contact,
        vehicle,
      },
    });
    return NextResponse.json(updatedStaff, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.UPDATE_POLICEMAN_FAILED + error },
      { status: 500 }
    );
  }
}
