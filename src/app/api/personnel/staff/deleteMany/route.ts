import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MESSAGES } from "@/app/api/errorMessages";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const { ids } = await req.json();

  try {
    const deletedStaff = await prisma.staff.deleteMany({
      where: {
        id: {
          in: ids.map((id: string) => Number(id)),
        },
      },
    });
    return NextResponse.json(deletedStaff, { status: 201 });
  } catch (error: any) {
    console.error("Error deleting teams:", error);
    let errorMessage = MESSAGES.DELETE_POLICEMAN_FAILED;
    let statusCode = 500;

    if (error.code === "P2003") {
      errorMessage = MESSAGES.DELETE_POLICEMAN_FAILED_IN_USE;
      statusCode = 404;
    }

    return NextResponse.json(
      { error: errorMessage + "\n错误详情：" + error },
      { status: statusCode }
    );
  }
}
