import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    const deletedVehicle = await prisma.vehicle.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(deletedVehicle, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.DELETE_VEHICLE_FAILED + error },
      { status: 500 }
    );
  }
}
