import { riskFlags } from "@/data/tenderiq-data";
import { AlertTriangle, ShieldAlert } from "lucide-react";

export default function RiskPanel({ selectedBidder }: any) {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
        <ShieldAlert size={32} />
        <h2 className="mt-4 text-xl font-black">AI Risk Radar™</h2>
        <p className="mt-2 text-sm text-slate-300">
          Fraud, compliance, and confidence signals.
        </p>

        <div className="mt-6 text-center">
          <p className="text-7xl font-black">82</p>
          <p className="text-slate-300">Risk control score</p>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-black">Selected Bidder</h2>
        <p className="mt-2 text-2xl font-black">{selectedBidder.name}</p>
        <p className="mt-1 text-slate-500">{selectedBidder.verdict}</p>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-black">Risk Alerts</h2>

        <div className="mt-4 space-y-3">
          {riskFlags.map((flag) => (
            <div key={flag} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
              <AlertTriangle size={18} className="text-amber-600" />
              <p className="text-sm text-slate-700">{flag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}