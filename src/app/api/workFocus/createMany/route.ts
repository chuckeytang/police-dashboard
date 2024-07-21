import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const workFocusList = await req.json();
  const results = {
    success: [] as any[],
    failed: [] as any[],
  };

  for (const workFocus of workFocusList) {
    try {
      const newWorkFocus = await prisma.workFocus.create({
        data: {
          focus_date: new Date(workFocus.focus_date),
          content: workFocus.content,
        },
      });
      results.success.push(newWorkFocus);
    } catch (error: any) {
      results.failed.push({
        workFocus,
        error: error.message || error.toString(),
      });
    }
  }

  return NextResponse.json(results, {
    status: results.failed.length ? 207 : 200,
  });
}
