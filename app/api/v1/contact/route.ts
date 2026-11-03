import { NextResponse } from "next/server";
import { z } from "zod";
import { db, schema } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    if (db) {
      await db.insert(schema.contactMessages).values({
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        status: "received",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Your message was sent successfully. Our architectural academic team will review your inquiry shortly.",
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while transmitting your inquiry." },
      { status: 500 }
    );
  }
}
