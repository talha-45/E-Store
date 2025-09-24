import { NextResponse } from "next/server";
import { readUsers } from "@/lib/fileUtils";

export async function POST(req) {
  const { email, password } = await req.json();
  const users = await readUsers();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const response = NextResponse.json({ message: "Login successful", user });
  response.cookies.set("token", user.id.toString(), { httpOnly: true });
  return response;
}
