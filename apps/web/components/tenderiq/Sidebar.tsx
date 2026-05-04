"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Bot,
  Upload,
  BarChart3,
  LifeBuoy,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Assistant", path: "/assistant", icon: Bot },
  { name: "Documents", path: "/document-checker", icon: Upload },
  { name: "Tracker", path: "/tracker", icon: BarChart3 },
  { name: "Help Center", path: "/help-center", icon: LifeBuoy },
  { name: "Admin", path: "/admin", icon: Settings },
];

export default function Sidebar(): JSX.Element {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 h-screen ${
        collapsed ? "w-20" : "w-64"
      } bg-gradient-to-b from-[#0f172a] to-[#020617] border-r border-white/10 p-4 flex flex-col justify-between transition-all duration-300`}
    >
      {/* Top */}
      <div>
        <div className="flex items-center justify-between mb-6">
          {!collapsed && (
            <h1 className="text-lg font-bold gradient-text">TenderIQ</h1>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-white"
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>

        <nav className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition ${
                  active
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm">
            U
          </div>

          {!collapsed && (
            <div>
              <p className="text-sm text-white">User</p>
              <p className="text-xs text-gray-400">Free Plan</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}