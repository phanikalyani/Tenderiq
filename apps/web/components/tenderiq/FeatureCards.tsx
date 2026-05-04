import { FileSearch, Globe2, IndianRupee } from "lucide-react";

const features = [
  {
    title: "Auto Clause Breakdown™",
    text: "Splits tender PDFs into financial, technical, compliance, and document checklist rules.",
    icon: FileSearch,
  },
  {
    title: "Multilingual Tender AI™",
    text: "Designed for English, Hindi, and Kannada tender text with human review safeguards.",
    icon: Globe2,
  },
  {
    title: "Financial Strength Check",
    text: "Extracts turnover, solvency, bid value, and financial proof from bidder submissions.",
    icon: IndianRupee,
  },
];

export default function FeatureCards() {
  return (
    <section className="mt-8 grid gap-6 xl:grid-cols-3">
      {features.map((item) => (
        <div key={item.title} className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
            <item.icon size={24} />
          </div>
          <h3 className="mt-5 text-lg font-black">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
        </div>
      ))}
    </section>
  );
}