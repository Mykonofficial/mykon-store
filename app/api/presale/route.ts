import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Store emails in a simple JSON file (you can upgrade to a database later)
const DATA_FILE = path.join(process.cwd(), "presale-emails.json");

interface PresaleSignup {
  email: string;
  signup_date: string;
}

function readEmails(): PresaleSignup[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Error reading emails file:", e);
  }
  return [];
}

function saveEmail(email: string): void {
  const emails = readEmails();
  
  // Check if email already exists
  if (emails.some(e => e.email === email)) {
    throw new Error("Email already registered");
  }

  emails.push({
    email,
    signup_date: new Date().toISOString()
  });

  fs.writeFileSync(DATA_FILE, JSON.stringify(emails, null, 2));
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

    saveEmail(email);
    
    return NextResponse.json({ 
      message: "Successfully joined presale list!",
      email 
    }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to signup" }, 
      { status: 400 }
    );
  }
}
