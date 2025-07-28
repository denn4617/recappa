"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Bell, UserCircle } from "lucide-react";

// Same nav items as in Sidebar
const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Upload", href: "/dashboard/upload" },
  { label: "Organization", href: "/dashboard/organization" },
  { label: "Subscription", href: "/dashboard/subscription" },
  { label: "Settings", href: "/dashboard/settings" },
];

export function Topbar() {
  const pathname = usePathname();

  const currentNavItem = [...navItems]
    .sort((a, b) => b.href.length - a.href.length)
    .find((item) => pathname.startsWith(item.href));

  const pageTitle = currentNavItem?.label ?? "Recappa";

  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Left: Logo + dynamic page title */}
      <div className="flex items-center gap-3">
        <span className="text-xl font-semibold">{pageTitle}</span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button className="hover:bg-white/10 rounded-full p-2 transition">
          <Bell size={20} />
        </button>
        <button className="hover:bg-white/10 rounded-full p-2 transition">
          <UserCircle size={24} />
        </button>
      </div>
    </header>
  );
}
