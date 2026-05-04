"use client";

import Navbar from "@/components/Navbar";

export default function AdminPage() {
  return (
    <>
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border rounded">Users</div>
          <div className="p-4 border rounded">Tenders</div>
          <div className="p-4 border rounded">Analytics</div>
        </div>
      </div>
    </>
  );
}