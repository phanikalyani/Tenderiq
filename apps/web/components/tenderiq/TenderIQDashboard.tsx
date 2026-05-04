"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import API from "@/lib/api";

export default function TenderIQDashboard() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const res = await API.get("/tenders/");
        setTenders(res.data);
      } catch {
        console.log("Error fetching tenders");
      }
    };

    fetchTenders();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">TenderIQ Dashboard</h1>
        <p className="text-slate-500">AI-powered procurement insights</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl">
          <h3 className="mb-2 text-xl font-bold">Start New Application</h3>
          <p className="mb-4 text-sm text-slate-300">
            Begin a new tender application workflow with AI assistance.
          </p>

          <Link href="/new-application">
            <button className="rounded-xl bg-blue-600 px-4 py-2 font-semibold transition hover:bg-blue-700">
              Apply Now
            </button>
          </Link>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-xl">
          <h3 className="mb-2 text-xl font-bold">Document Checker</h3>
          <p className="mb-4 text-sm text-slate-500">
            Upload and analyze tender PDFs with AI.
          </p>

          <Link href="/document-checker">
            <button className="rounded-xl bg-black px-4 py-2 text-white">
              Open
            </button>
          </Link>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-xl">
          <h3 className="mb-2 text-xl font-bold">AI Assistant</h3>
          <p className="mb-4 text-sm text-slate-500">
            Ask AI about tenders and procurement decisions.
          </p>

          <Link href="/assistant">
            <button className="rounded-xl bg-purple-600 px-4 py-2 text-white">
              Open
            </button>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-bold">Recent Tenders</h2>

        {tenders.length === 0 ? (
          <p className="text-slate-500">No tenders found</p>
        ) : (
          tenders.map((t: any, i) => (
            <div key={i} className="mb-3 rounded-xl border p-4">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-sm text-slate-500">{t.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}