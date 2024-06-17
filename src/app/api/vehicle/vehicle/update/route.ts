import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  const {
    id,
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
    const updatedVehicle = await prisma.vehicle.update({
      where: { id: Number(id) },
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
    return NextResponse.json(updatedVehicle, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update vehicle" },
      { status: 500 }
    );
  }
}
