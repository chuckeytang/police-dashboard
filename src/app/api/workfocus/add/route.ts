import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { focus_date, content } = await req.json();

  try {
    const newWorkFocus = await prisma.workFocus.create({
      data: {
        focus_date: new Date(focus_date),
        content,
      },
    });
    return NextResponse.json(newWorkFocus, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create work focus" },
      { status: 500 }
    );
  }
}
