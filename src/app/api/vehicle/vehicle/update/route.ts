import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { MESSAGES } from "@/app/api/errorMessages";

export async function PUT(req: NextRequest) {
  const {
    id,
    plate_number,
    vehicle_type,
    brand_model,
    status,
    usage_status,
    department,
    user_id,
    borrow_time,
    return_time,
  } = await req.json();

  try {
    const updatedVehicle = await prisma.vehicle.update({
      where: { id: Number(id) },
      data: {
        plate_number,
        vehicle_type,
        brand_model,
        status,
        usage_status,
        department,
        user_id,
        borrow_time,
        return_time,
      },
    });
    return NextResponse.json(updatedVehicle, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.UPDATE_VEHICLE_INFO_FAILED + error },
      { status: 500 }
    );
  }
}
