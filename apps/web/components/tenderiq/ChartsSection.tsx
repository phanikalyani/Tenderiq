"use client";

import Card from "@/components/ui/Card";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { value: 10 },
  { value: 20 },
  { value: 15 },
  { value: 30 },
  { value: 25 },
];

export default function ChartsSection(): JSX.Element {
  return (
    <Card>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Analytics
        </h2>
        <p className="text-sm text-gray-400">
          Performance trends
        </p>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line type="monotone" dataKey="value" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </Card>
  );
}