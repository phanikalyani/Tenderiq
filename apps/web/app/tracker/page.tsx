"use client";

import Navbar from "@/components/Navbar";

const applications = [
  {
    id: "TDR-001",
    title: "Road Infrastructure Project",
    status: "Approved",
    updated: "2 hours ago",
    progress: 100,
  },
  {
    id: "TDR-002",
    title: "Healthcare Equipment Supply",
    status: "Under Review",
    updated: "Today",
    progress: 70,
  },
  {
    id: "TDR-003",
    title: "Smart City Surveillance System",
    status: "Rejected",
    updated: "Yesterday",
    progress: 100,
  },
  {
    id: "TDR-004",
    title: "Water Management Modernization",
    status: "Submitted",
    updated: "Just now",
    progress: 35,
  },
];

function getStatusClasses(status: string) {
  switch (status) {
    case "Approved":
      return "bg-green-100 text-green-700";
    case "Rejected":
      return "bg-red-100 text-red-700";
    case "Under Review":
      return "bg-yellow-100 text-yellow-700";
    case "Submitted":
      return "bg-blue-100 text-blue-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function TrackerPage() {
  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-6xl p-6">
        <h1 className="mb-4 text-3xl font-bold">Tender Tracker</h1>
        <p className="mb-8 text-slate-500">
          Track submitted applications, their current status, and progress.
        </p>

        <div className="space-y-5">
          {applications.map((app) => (
            <div
              key={app.id}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-400">
                    {app.id}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-900">
                    {app.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Last updated: {app.updated}
                  </p>
                </div>

                <div>
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${getStatusClasses(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-600">Progress</span>
                  <span className="text-slate-500">{app.progress}%</span>
                </div>

                <div className="h-3 w-full rounded-full bg-slate-200">
                  <div
                    className="h-3 rounded-full bg-blue-600"
                    style={{ width: `${app.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border bg-slate-50 p-6">
          <h2 className="mb-2 text-xl font-semibold">Tracker Summary</h2>
          <p className="leading-7 text-slate-600">
            This page provides a quick view of all active tender applications.
            Use it to track approval stages, review progress, and the latest
            updates on each submission.
          </p>
        </div>
      </div>
    </>
  );
}