"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const loginState = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(!!token || loginState === "true");
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
        pathname === href
          ? "bg-slate-900 text-white"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-slate-900">
          TenderIQ
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLink("/dashboard", "Dashboard")}
          {navLink("/tenders", "Tenders")}
          {navLink("/tracker", "Tracker")}
          {navLink("/analytics", "Analytics")}
          {navLink("/assistant", "AI Assistant")}
          {navLink("/document-checker", "Document Checker")}
          {navLink("/help-center", "Help")}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Link
                href="/new-application"
                className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700"
              >
                New Application
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 text-slate-600 font-semibold"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="bg-slate-900 text-white px-4 py-2 rounded-xl font-semibold"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navLink("/dashboard", "Dashboard")}
          {navLink("/tenders", "Tenders")}
          {navLink("/tracker", "Tracker")}
          {navLink("/analytics", "Analytics")}
          {navLink("/assistant", "AI Assistant")}
          {navLink("/document-checker", "Document Checker")}
          {navLink("/help-center", "Help")}

          {isLoggedIn ? (
            <>
              <Link
                href="/new-application"
                className="block bg-blue-600 text-white px-4 py-2 rounded-xl"
              >
                New Application
              </Link>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-xl"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="block px-4 py-2 text-slate-600"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="block bg-slate-900 text-white px-4 py-2 rounded-xl"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}