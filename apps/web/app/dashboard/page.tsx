"use client";

import Card from "@/components/ui/Card";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";
import {
  FileText,
  Clock,
  CheckCircle,
  Upload,
  PlayCircle,
  BarChart3,
} from "lucide-react";
import PdfEvaluation from "@/components/PdfEvaluation";
import { JSX } from "react";

<PdfEvaluation />

export default function DashboardPage(): JSX.Element {
    const data = [
  { name: "Mon", value: 10 },
  { name: "Tue", value: 25 },
  { name: "Wed", value: 15 },
  { name: "Thu", value: 30 },
  { name: "Fri", value: 22 },
  { name: "Sat", value: 40 },
];
  return (
    <main className="pt-24 px-6 space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-extrabold gradient-text">
          Dashboard
        </h1>
        <p className="text-gray-400 mt-1">
          Overview of your applications
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid md:grid-cols-3 gap-6">

        <Card>
          <div className="flex justify-between items-center">
            <h4 className="text-xs text-gray-400 uppercase tracking-wider">
              Applications
            </h4>
            <FileText className="text-blue-400" size={18} />
          </div>
          <p className="text-4xl font-extrabold mt-2 text-white">12</p>
        </Card>

        <Card>
          <div className="flex justify-between items-center">
            <h4 className="text-xs text-gray-400 uppercase tracking-wider">
              Pending
            </h4>
            <Clock className="text-yellow-400" size={18} />
          </div>
          <p className="text-4xl font-extrabold mt-2 text-white">3</p>
        </Card>

        <Card>
          <div className="flex justify-between items-center">
            <h4 className="text-xs text-gray-400 uppercase tracking-wider">
              Completed
            </h4>
            <CheckCircle className="text-green-400" size={18} />
          </div>
          <p className="text-4xl font-extrabold mt-2 text-white">9</p>
        </Card>

      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div>
        <h2 className="text-xl font-semibold text-white">
          Quick Actions
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Perform key tasks quickly
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <Card>
            <PlayCircle className="text-blue-400 mb-3" />
            <h3 className="font-semibold">Start New Application</h3>
            <button className="mt-4 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:scale-105 transition">
              Apply Now
            </button>
          </Card>

          <Card>
            <Upload className="text-cyan-400 mb-3" />
            <h3 className="font-semibold">Upload Documents</h3>
            <button className="mt-4 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:scale-105 transition">
              Upload
            </button>
          </Card>

          <Card>
            <BarChart3 className="text-purple-400 mb-3" />
            <h3 className="font-semibold">Track Status</h3>
            <button className="mt-4 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:scale-105 transition">
              View Tracker
            </button>
          </Card>

        </div>
      </div>

      {/* ================= ACTIVITY + AI ================= */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Activity */}
        <Card>
          <h2 className="text-lg font-semibold text-white mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>✔ Passport applied</li>
            <li>✔ Aadhaar updated</li>
            <li>⏳ Income certificate pending</li>
          </ul>
        </Card>
     {/* ================= ANALYTICS ================= */}
        <div>
         <h2 className="text-xl font-semibold text-white">
          Analytics
         </h2>
            <p className="text-sm text-gray-400 mb-4">
              Application trends this week
         </p>

       <Card>
         {/* 🔥 IMPORTANT FIX */}
        
        <div className="w-full h-[320px] min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#22d3ee" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={3}
          />
          </LineChart>
             </ResponsiveContainer>

             </div>
                  </Card>
                          </div>

        {/* AI Insights */}
        <Card>
          <h2 className="text-lg font-semibold gradient-text mb-2">
            AI Insights
          </h2>

          <p className="text-gray-400 text-sm">
            Your profile is <span className="text-white font-semibold">92% complete</span>. 
            Upload address proof to avoid delays.
          </p>

          <button className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm hover:scale-105 transition">
            Fix Now
          </button>
        </Card>

      </div>

    </main>
  );
}