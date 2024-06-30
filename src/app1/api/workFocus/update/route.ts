import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const { id, focus_date, content } = await req.json();

  try {
    const updatedWorkFocus = await prisma.workFocus.update({
      where: { id: Number(id) },
      data: {
        focus_date: new Date(focus_date),
        content,
      },
    });
    return NextResponse.json(updatedWorkFocus, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update work focus" },
      { status: 500 }
    );
  }
}
