import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "../../errorMessages";

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    const deletedWorkFocus = await prisma.workFocus.deleteMany({
      where: {
        id: {
          in: ids.map((id: string) => Number(id)),
        },
      },
    });
    return NextResponse.json(deletedWorkFocus, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.DELETE_WORK_FOCUS_FAILED + error },
      { status: 500 }
    );
  }
}
