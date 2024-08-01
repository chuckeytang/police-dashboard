import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { error } from "console";
import { MESSAGES } from "@/app/api/errorMessages";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: MESSAGES.VEHICLE_NOT_SELECTED + error },
      { status: 400 }
    );
  }

  try {
    const vehicle = await prisma.vehicle.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!vehicle) {
      return NextResponse.json(
        { error: MESSAGES.VEHICLE_NOT_FOUND + error },
        { status: 404 }
      );
    }

    return NextResponse.json(vehicle, { status: 200 });
  } catch (error) {
    console.error(MESSAGES.GET_VEHICLE_INFO_FAILED, error);
    return NextResponse.json(
      { error: MESSAGES.GET_VEHICLE_INFO_FAILED + error },
      { status: 500 }
    );
  }
}
