import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const {
    code,
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
    const newVehicle = await prisma.vehicle.create({
      data: {
        code,
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
    return NextResponse.json(newVehicle, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.ADD_VEHICLE_FAILED + error },
      { status: 500 }
    );
  }
}
