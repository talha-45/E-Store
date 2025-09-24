import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function readUsers() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

export async function writeUsers(users) {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
}
