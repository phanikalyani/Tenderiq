"use client";

import { useState } from "react";
import API from "@/lib/api";

export default function CreateTenderForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      await API.post("/tenders/", null, {
        params: { title, description }
      });
      alert("Tender Created");
    } catch {
      alert("Error creating tender");
    }
  };

  return (
    <div className="p-4 border rounded">
      <h2>Create Tender</h2>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 block mb-2"
      />

      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 block mb-2"
      />

      <button onClick={handleSubmit} className="bg-black text-white px-4 py-2">
        Create
      </button>
    </div>
  );
}