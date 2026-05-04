"use client";

import Navbar from "@/components/Navbar";

export default function AnalyticsPage() {
  const stats = [
    { label: "Total Tenders", value: "42", color: "bg-blue-600" },
    { label: "Approved", value: "18", color: "bg-green-600" },
    { label: "Rejected", value: "9", color: "bg-red-600" },
    { label: "Under Review", value: "15", color: "bg-yellow-500" },
  ];

  const recentActivity = [
    "Road Infrastructure Tender evaluated",
    "Healthcare Equipment Tender uploaded",
    "AI review completed for Smart City Project",
    "Document check finished for Transport Bid",
  ];

  const categoryBreakdown = [
    { name: "Infrastructure", value: 14 },
    { name: "Healthcare", value: 8 },
    { name: "Transport", value: 10 },
    { name: "IT Services", value: 6 },
    { name: "Education", value: 4 },
  ];

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-6xl p-6">
        <h1 className="mb-4 text-3xl font-bold">Analytics Dashboard</h1>
        <p className="mb-8 text-slate-500">
          Overview of tender activity, decision flow, and recent system events.
        </p>

        {/* Top Stat Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className={`mb-4 h-2 w-16 rounded-full ${stat.color}`} />
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <h2 className="mt-2 text-4xl font-bold text-slate-900">
                {stat.value}
              </h2>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Tender Category Breakdown */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Tender Categories</h2>
            <div className="space-y-4">
              {categoryBreakdown.map((item, index) => (
                <div key={index}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="text-slate-500">{item.value}</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-200">
                    <div
                      className="h-3 rounded-full bg-blue-600"
                      style={{ width: `${item.value * 6}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold">System Summary</h2>
          <p className="leading-7 text-slate-600">
            TenderIQ is actively monitoring and evaluating tender submissions.
            Current analytics indicate a healthy review pipeline with multiple
            approved tenders, some rejections, and a moderate review queue.
            Use this dashboard to track procurement flow, AI evaluation trends,
            and overall tender processing efficiency.
          </p>
        </div>
      </div>
    </>
  );
}