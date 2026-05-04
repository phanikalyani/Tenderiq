import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function CTA() {
return (
<section className="bg-slate-950 py-20 text-white">
<div className="mx-auto max-w-5xl px-6 text-center">
<h2 className="text-3xl font-black tracking-tight sm:text-5xl">
Make procurement faster, fairer, and auditable.
</h2>
<p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
TenderIQ helps officers evaluate tenders with explainable AI while
keeping final decisions human-controlled.
</p>
<div className="mt-8 flex justify-center gap-4">
<Link href="/signup" className="inline-flex items-center gap-2 
rounded-2xl bg-white px-6 py-3 font-bold text-slate-950">
Create account <ArrowRight size={18} />
</Link>
<Link href="/dashboard" className="rounded-2xl border border-white/20 
px-6 py-3 font-bold text-white">
Open dashboard
</Link>
</div>
</div>
</section>
);
}