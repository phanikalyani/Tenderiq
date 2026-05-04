"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import API from "@/lib/api";

type Tender = {
  id?: number;
  title: string;
  description: string;
};

export default function TendersPage() {
  const [tenders, setTenders] = useState<Tender[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const res = await API.get("/tenders/");
        setTenders(res.data);
      } catch (err) {
        console.log(err);
        alert("Error fetching tenders");
      } finally {
        setLoading(false);
      }
    };

    fetchTenders();
  }, []);

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-5xl p-6">
        <h1 className="mb-4 text-3xl font-bold">All Tenders</h1>
        <p className="mb-6 text-slate-500">
          View all submitted tender applications.
        </p>

        {loading ? (
          <p className="text-slate-500">Loading tenders...</p>
        ) : tenders.length === 0 ? (
          <div className="rounded-2xl border bg-white p-6 shadow">
            <p className="text-slate-500">No tenders found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {tenders.map((tender, index) => (
              <div
                key={tender.id ?? index}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <h2 className="text-xl font-semibold">{tender.title}</h2>
                <p className="mt-2 text-slate-600">{tender.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}