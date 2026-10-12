import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FILE = path.join(process.cwd(), "data", "contact-messages.json");

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const row = {
    ...body,
    at: new Date().toISOString(),
  };
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  const prev = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, "utf8")) : [];
  prev.push(row);
  fs.writeFileSync(FILE, JSON.stringify(prev, null, 2));
  return NextResponse.json({ ok: true });
}
