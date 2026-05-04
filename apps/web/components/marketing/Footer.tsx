import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">

        {/* Left */}
        <div>
          <p className="font-black text-lg">TenderIQ</p>
          <p className="text-sm text-slate-500">
            Explainable AI for procurement
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-slate-500">
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
          <Link href="/dashboard">Dashboard</Link>
          <a href="#features">Features</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-400">
          © 2026 TenderIQ. Hackathon MVP.
        </p>

      </div>
    </footer>
  );
}