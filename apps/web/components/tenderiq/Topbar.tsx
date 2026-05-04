"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

export default function Topbar(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-16 flex items-center justify-between px-6 bg-white/5 border-b border-white/10 backdrop-blur-xl">

      <h2 className="text-lg font-semibold text-white">
        Dashboard
      </h2>

      <div className="relative">
        <div className="flex items-center gap-4">
          <Bell className="text-gray-400 cursor-pointer" />

          <div
            onClick={() => setOpen(!open)}
            className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white cursor-pointer"
          >
            U
          </div>
        </div>

        {open && (
          <div className="absolute right-0 mt-3 w-40 bg-[#0f172a] border border-white/10 rounded-xl p-3 space-y-2 shadow-lg">
            <p className="text-sm text-white cursor-pointer">Profile</p>
            <p className="text-sm text-white cursor-pointer">Settings</p>
            <p className="text-sm text-red-400 cursor-pointer">Logout</p>
          </div>
        )}
      </div>
    </div>
  );
}