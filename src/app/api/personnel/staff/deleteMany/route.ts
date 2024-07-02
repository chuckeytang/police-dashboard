import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    const deletedStaff = await prisma.staff.deleteMany({
      where: {
        id: {
          in: ids.map((id: string) => Number(id)),
        },
      },
    });
    return NextResponse.json(deletedStaff, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.DELETE_POLICEMAN_FAILED + error },
      { status: 500 }
    );
  }
}
