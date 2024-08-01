import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const recentDutiesList = await req.json();
  const results = {
    success: [] as any[],
    failed: [] as any[],
  };

  for (const duty of recentDutiesList) {
    try {
      const newRecentDuty = await prisma.recentDuties.create({
        data: {
          duty_date: new Date(duty.duty_date),
          duty_type: duty.duty_type,
          content: duty.content,
        },
      });
      results.success.push(newRecentDuty);
    } catch (error: any) {
      results.failed.push({
        duty,
        error: error.message || error.toString(),
      });
    }
  }

  return NextResponse.json(results, {
    status: results.failed.length ? 207 : 200,
  });
}
