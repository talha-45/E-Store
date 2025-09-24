import { NextResponse } from "next/server";
import { readUsers, writeUsers } from "@/lib/fileUtils";

export async function POST(req) {
  const { name, email, password } = await req.json();
  const users = await readUsers();

  if (users.find(u => u.email === email)) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);
  await writeUsers(users);

  return NextResponse.json({ message: "Signup successful", user: newUser });
}
