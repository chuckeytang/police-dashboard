import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    const deletedVehicles = await prisma.vehicle.deleteMany({
      where: {
        id: {
          in: ids.map((id: string) => Number(id)),
        },
      },
    });
    return NextResponse.json(deletedVehicles, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: MESSAGES.DELETE_VEHICLE_FAILED + error },
      { status: 500 }
    );
  }
}
