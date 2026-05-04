import { Sparkles, Languages, Fingerprint } from "lucide-react";

export default function Hero() {
  return (
    <section className="mt-8 rounded-[32px] bg-white p-8 shadow-xl">
      <div className="flex flex-wrap gap-2">
        <Pill icon={Sparkles} text="AI Tender Intelligence" />
        <Pill icon={Languages} text="English · Hindi · Kannada" />
        <Pill icon={Fingerprint} text="Audit Ready" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            TenderIQ evaluates bids with explainable AI.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Upload tender documents, parse bidder submissions, detect risk,
            rank vendors, and export audit-ready procurement reports.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button className="rounded-2xl bg-slate-950 px-6 py-3 font-semibold text-white">
              Start Evaluation
            </button>
            <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold">
              Upload Tender PDF
            </button>
          </div>
        </div>

        <div className="rounded-[28px] bg-slate-950 p-6 text-white">
          <p className="text-sm text-emerald-300">Live AI Scan</p>
          <h3 className="mt-4 text-xl font-bold">Tender Health Score</h3>
          <p className="mt-4 text-6xl font-black">91</p>
          <p className="text-slate-300">/100 compliance clarity</p>

          {["Criteria extraction", "Evidence confidence", "Fraud risk control"].map(
            (x, i) => (
              <div key={x} className="mt-5">
                <div className="mb-1 flex justify-between text-sm">
                  <span>{x}</span>
                  <span>{[96, 89, 84][i]}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-white"
                    style={{ width: `${[96, 89, 84][i]}%` }}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function Pill({ icon: Icon, text }: any) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700">
      <Icon size={14} />
      {text}
    </span>
  );
}