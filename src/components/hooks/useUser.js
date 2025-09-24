"use client";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      setUser(data.user);
    };
    fetchUser();
  }, []);

  return user;
}
