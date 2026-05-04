import { bidders } from "@/data/tenderiq-data";

export default function BidderRanking({ selectedBidder, setSelectedBidder }: any) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-xl">
      <h2 className="text-xl font-black">Smart Bidder Ranking™</h2>
      <p className="text-sm text-slate-500">
        Ranked by compliance, risk, and evidence confidence.
      </p>

      <div className="mt-6 space-y-4">
        {bidders.map((bidder) => (
          <button
            key={bidder.name}
            onClick={() => setSelectedBidder(bidder)}
            className={`w-full rounded-3xl border p-5 text-left transition hover:shadow-lg ${
              selectedBidder.name === bidder.name
                ? "border-slate-950 bg-slate-50"
                : "border-slate-200"
            }`}
          >
            <div className="flex justify-between gap-4">
              <div>
                <h3 className="font-bold">{bidder.name}</h3>
                <p className="text-sm text-slate-500">{bidder.verdict}</p>
              </div>
              <Status status={bidder.status} />
            </div>

            <div className="mt-4">
              <div className="mb-1 flex justify-between text-sm">
                <span>Score</span>
                <span>{bidder.score}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-slate-950"
                  style={{ width: `${bidder.score}%` }}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function Status({ status }: { status: string }) {
  const cls =
    status === "Eligible"
      ? "bg-emerald-100 text-emerald-700"
      : status === "Not Eligible"
      ? "bg-rose-100 text-rose-700"
      : "bg-amber-100 text-amber-700";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${cls}`}>
      {status}
    </span>
  );
}