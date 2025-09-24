import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readUsers } from "@/lib/fileUtils";

export async function GET() {
  const token = cookies().get("token")?.value;
  if (!token) {
    return NextResponse.json({ user: null });
  }

  const users = await readUsers();
  const user = users.find((u) => u.id.toString() === token);

  return NextResponse.json({ user: user || null });
}
