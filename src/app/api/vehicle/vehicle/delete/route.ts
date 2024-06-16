import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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
    return NextResponse.json(deletedVehicles, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete vehicles" },
      { status: 500 }
    );
  }
}
