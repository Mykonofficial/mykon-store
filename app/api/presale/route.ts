import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase credentials");
  }

  return createClient(supabaseUrl, supabaseKey);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body as { email?: string };

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const supabase = getSupabase();

    // Insert into Supabase
    const { data, error } = await supabase
      .from("presale_signups")
      .insert([{ email }]);

    if (error) {
      if (error.code === "23505") {
        // Unique constraint violation
        return NextResponse.json(
          { error: "Email already registered" },
          { status: 400 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      {
        message: "Successfully joined presale list!",
        email
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Presale signup error:", err);
    return NextResponse.json(
      { error: err?.message || "Failed to signup" },
      { status: 400 }
    );
  }
}

