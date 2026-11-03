import { NextResponse } from "next/server";
import { addRegistration } from "@/lib/data/registrations-store";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if it's the simplified registration payload
    const fullName = body.fullName || body.leaderName || "Architecture Candidate";
    const dob = body.dob || "2003-01-01";
    const college = body.college || body.institution || "School of Architecture";
    const address = body.address || "Architecture Department Studio";
    const country = body.country || "India";
    const lat = body.lat ? parseFloat(body.lat) : 20.5937;
    const lng = body.lng ? parseFloat(body.lng) : 78.9629;
    const phone = body.phone || "+91 99999 99999";
    const email = body.email || "student@arched.in";
    const competitionId = body.competitionId || "comp-1";

    const newEntry = await addRegistration({
      fullName,
      dob,
      college,
      address,
      country,
      lat,
      lng,
      phone,
      email,
      competitionId,
    });

    const anonymousJuryCode = `JURY-BLIND-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      registrationCode: newEntry.registrationCode,
      anonymousJuryCode,
      candidateName: newEntry.fullName,
      message: "Registration completed successfully. Your details are recorded.",
      details: {
        fullName: newEntry.fullName,
        college: newEntry.college,
        registrationCode: newEntry.registrationCode,
        timestamp: newEntry.createdAt,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: "Registration processing failed. Please verify inputs.", details: error.message },
      { status: 500 }
    );
  }
}
