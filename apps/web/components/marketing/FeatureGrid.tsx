import { AlertTriangle, FileSearch, Globe2, ScanSearch, ShieldCheck, Users }
from "lucide-react";
const features = [
{
icon: FileSearch,
title: "Auto Clause Breakdown™",
text: "Extracts technical, financial, compliance, and document checklist criteria from tender files.",
},
{
icon: ScanSearch,
title: "OCR + Document Intelligence",
text: "Handles PDFs, scanned files, images, certificates, financial statements, and project letters.",
},
{
icon: AlertTriangle,
title: "AI Risk Radar™",
text: "Flags expired certificates, turnover mismatches, duplicate claims, and weak evidence.",
},
{
icon: Users,
title: "Smart Bidder Ranking™",
text: "Ranks bidders by compliance, evidence confidence, risk level, and completeness.",
},
{
icon: ShieldCheck,
title: "Human Review Guardrails",
text: "Ambiguous cases are routed to officers instead of silently rejecting bidders.",
},
{
icon: Globe2,
title: "Multilingual Ready",
text: "Designed for English, Hindi, and Kannada procurement workflows.",
},
];
export default function FeatureGrid() {
return (
<section id="features" className="bg-white py-20">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl">
<p className="font-bold text-emerald-600">Platform Features</p>
<h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 
sm:text-5xl">
Built for real procurement teams.
</h2>
<p className="mt-4 text-lg leading-8 text-slate-600">
TenderIQ combines AI extraction, rule-based evaluation, human
review, and auditable reporting.
</p>
</div>
<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
{features.map((feature) => (
<div key={feature.title} className="rounded-[28px] border border
slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 
hover:shadow-xl">
<div className="flex h-12 w-12 items-center justify-center 
rounded-2xl bg-slate-950 text-white">
<feature.icon size={24} />
</div>
<h3 className="mt-5 text-xl font-black text
slate-950">{feature.title}</h3>
<p className="mt-3 text-sm leading-7 text
slate-600">{feature.text}</p>
</div>
))}
</div>
</div>
</section>
);
}