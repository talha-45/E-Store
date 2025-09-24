"use client";

import { useEffect, useState } from "react";
import LogoutButton from "@/components/LogoutButton";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      setUser(data.user);
    };
    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="p-6">
        <h1 className="text-xl">You are not logged in ❌</h1>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="w-full border p-2 ">
        <strong>Name:</strong> {user.name}
      </p>
      <p  className="w-full border p-2 ">
        <strong>Email:</strong> {user.email}
      </p>
      <LogoutButton />
    </div>
  );
}
