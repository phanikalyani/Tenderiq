import { stats } from "@/data/tenderiq-data";
import { FileCheck2, Building2, Clock3, LockKeyhole } from "lucide-react";

const icons = [FileCheck2, Building2, Clock3, LockKeyhole];

export default function StatsGrid() {
  return (
    <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = icons[index];

        return (
          <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="rounded-2xl bg-slate-100 p-3">
                <Icon size={22} />
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                {stat.trend}
              </span>
            </div>
            <p className="mt-5 text-sm text-slate-500">{stat.label}</p>
            <p className="mt-1 text-4xl font-black">{stat.value}</p>
          </div>
        );
      })}
    </section>
  );
}