"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/lib/api";
import Navbar from "@/components/Navbar";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await API.post("/auth/signup", { email, password });

      alert("Signup successful");
      router.push("/login");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="w-96 rounded-2xl border p-6 shadow-xl">
          <h2 className="mb-4 text-xl font-bold">Signup</h2>

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
            onClick={handleSignup}
            className="w-full bg-black py-2 text-white"
          >
            Signup
          </button>
        </div>
      </div>
    </>
  );
}