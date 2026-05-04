"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fingerprint, Languages, ShieldCheck, Sparkles } from "lucide-react";
import TenderCube from "@/components/three/TenderCube";
export default function Hero() {
return (
<section
className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white 
to-emerald-50">
<div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg
emerald-300/30 blur-3xl" />
<div className="absolute right-0 top-10 h-80 w-80 rounded-full bg
sky-300/20 blur-3xl" />
<div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 
lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y:
0 }} transition={{ duration: 0.5 }}>
<div className="flex flex-wrap gap-2">
<Pill icon={Sparkles} text="AI Tender Intelligence" />
<Pill icon={ShieldCheck} text="Audit-ready decisions" />
<Pill icon={Languages} text="English · Hindi · Kannada" />
</div>
<h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] 
tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
Tender evaluation, upgraded with explainable AI.
</h1>
<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
TenderIQ reads tender documents, extracts eligibility criteria,
analyzes bidder files, detects risk, and produces criterion-level audit reports
for procurement officers.
</p>
<div className="mt-8 flex flex-wrap gap-4">
<Link href="/signup" className="rounded-2xl bg-slate-950 px-6 py-3 
font-bold text-white shadow-xl transition hover:-translate-y-0.5">
Start Free Demo
</Link>
<Link href="/dashboard" className="rounded-2xl border border
slate-300 bg-white px-6 py-3 font-bold text-slate-800 shadow-sm transition 
hover:-translate-y-0.5">
View Dashboard
</Link>
</div>
<div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
<MiniStat value="80%" label="faster review" />
<MiniStat value="100%" label="audit trail" />
<MiniStat value="24/7" label="AI scrutiny" />
</div>
</motion.div>
<motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity:
1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
<TenderCube />
<div className="mt-4 rounded-3xl border border-slate-200 bg-white/80 
p-4 shadow-xl backdrop-blur-xl">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center 
rounded-2xl bg-emerald-100 text-emerald-700">
<Fingerprint size={20} />
</div>
<div>
<p className="font-bold">Evidence-linked verdicts</p>
<p className="text-sm text-slate-500">Every pass/fail decision
maps to document, page, and extracted value.</p>
</div>
</div>
</div>
</motion.div>
</div>
</section>
);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Pill({ icon: Icon, text }: any) {
return (
<span className="inline-flex items-center gap-2 rounded-full border border
slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm">
<Icon size={14} />
{text}
</span>
);
}
function MiniStat({ value, label }: { value: string; label: string }) {
return (
<div className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow
sm">
<p className="text-2xl font-black text-slate-950">{value}</p>
<p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
</div>
);
}