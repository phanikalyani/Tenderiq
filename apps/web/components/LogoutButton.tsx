"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // ✅ clear auth
    localStorage.removeItem("isLoggedIn");

    alert("Logged out");

    // ✅ redirect
    router.push("/login");
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2">
      Logout
    </button>
  );
}