import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "../../errorMessages";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    const deletedWorkFocus = await prisma.workFocus.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(deletedWorkFocus, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.DELETE_WORK_FOCUS_FAILED + error },
      { status: 500 }
    );
  }
}
