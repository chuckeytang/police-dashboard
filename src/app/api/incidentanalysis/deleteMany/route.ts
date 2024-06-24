import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    const deletedIncidentAnalysis = await prisma.incidentAnalysis.deleteMany({
      where: {
        id: {
          in: ids.map((id: string) => Number(id)),
        },
      },
    });
    return NextResponse.json(deletedIncidentAnalysis, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete incident analysis" },
      { status: 500 }
    );
  }
}
