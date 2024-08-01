import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const vehicleList = await req.json();
  const results = {
    success: [] as any[],
    failed: [] as any[],
  };

  for (const vehicle of vehicleList) {
    try {
      const newVehicle = await prisma.vehicle.create({
        data: {
          plate_number: vehicle.plate_number,
          vehicle_type: vehicle.vehicle_type,
          brand_model: vehicle.brand_model,
          status: vehicle.status,
          usage_status: vehicle.usage_status,
          department: vehicle.department,
          user_id: vehicle.user_id,
          borrow_time: vehicle.borrow_time,
          return_time: vehicle.return_time,
        },
      });
      results.success.push(newVehicle);
    } catch (error: any) {
      results.failed.push({
        vehicle,
        error: error.message || error.toString(),
      });
    }
  }

  return NextResponse.json(results, {
    status: results.failed.length ? 207 : 200,
  });
}
