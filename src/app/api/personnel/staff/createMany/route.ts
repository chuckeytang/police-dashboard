import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const staffList = await req.json();
  const results = {
    success: [] as any[],
    failed: [] as any[],
  };

  for (const staff of staffList) {
    try {
      const newStaff = await prisma.staff.create({
        data: {
          police_number: staff.police_number,
          name: staff.name,
          position: staff.position,
          department: staff.department,
          contact: staff.contact,
          vehicle: staff.vehicle,
          skills: staff.skills || [],
        },
      });
      results.success.push(newStaff);
    } catch (error: any) {
      results.failed.push({
        staff,
        error: error.message || error.toString(),
      });
    }
  }

  return NextResponse.json(results, {
    status: results.failed.length ? 207 : 200,
  });
}
