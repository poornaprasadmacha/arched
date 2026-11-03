import { NextResponse } from "next/server";
import { getRegistrations, deleteRegistration, computeStats } from "@/lib/data/registrations-store";

export async function GET() {
  try {
    const list = await getRegistrations();
    const stats = computeStats(list);

    return NextResponse.json({
      success: true,
      data: list,
      totalCount: stats.totalCount,
      ages: stats.ages,
      colleges: stats.colleges,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch registrations", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, id } = body;

    if (action === "delete" && id) {
      await deleteRegistration(id);
      const updatedList = await getRegistrations();
      const stats = computeStats(updatedList);

      return NextResponse.json({
        success: true,
        message: "Registration cancelled successfully.",
        totalCount: stats.totalCount,
      });
    }

    return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Failed to process admin action", details: error.message },
      { status: 500 }
    );
  }
}
