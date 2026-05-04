"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import API from "@/lib/api";

export default function NewApplicationPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post("/tenders/", null, {
        params: { title, description },
      });

      alert("Application submitted successfully");
      setTitle("");
      setDescription("");
    } catch {
      alert("Error submitting application");
    }
  };

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-2xl p-6">
        <h1 className="mb-4 text-2xl font-bold">Start New Application</h1>

        <div className="rounded-2xl border bg-white p-6 shadow">
          <label className="mb-2 block text-sm font-semibold">
            Application Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="mb-4 w-full rounded-lg border p-3"
          />

          <label className="mb-2 block text-sm font-semibold">
            Application Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="mb-4 w-full rounded-lg border p-3"
            rows={6}
          />

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Submit Application
          </button>
        </div>
      </div>
    </>
  );
}