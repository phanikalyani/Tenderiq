"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/lib/api";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await API.post("/auth/login", { email, password });

      // ✅ store login state
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful");
      router.push("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };
  const handleLogout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="w-96 rounded-2xl border p-6 shadow-xl">
          <h2 className="mb-4 text-xl font-bold">Login</h2>

          <input
            className="mb-3 w-full border p-2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="mb-3 w-full border p-2"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-black py-2 text-white"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}