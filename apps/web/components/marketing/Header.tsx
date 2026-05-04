"use client";

import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold gradient-text">
          TenderIQ
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/tenders">Tenders</Link>
          <Link href="/analytics">Analytics</Link>
          
          
        </div>

      </div>
    </header>
  );
}