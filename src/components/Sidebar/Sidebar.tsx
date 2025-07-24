"use client";

import {
  LayoutDashboard,
  Upload,
  Settings,
  LogOut,
  Building,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Notch from "./Notch";

export function Sidebar() {
  const pathname = usePathname();
  const [notchY, setNotchY] = useState(0);

  const ITEM_HEIGHT = 32; // h-8 = 32px
  const GAP = 16; // gap-4 = 16px

  const navItems = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      href: "/dashboard",
    },
    {
      label: "Upload",
      icon: <Upload size={20} />,
      href: "/dashboard/upload",
    },
    {
      label: "Organization",
      icon: <Building size={20} />,
      href: "/dashboard/organization",
    },
    {
      label: "Subscription",
      icon: <CreditCard size={20} />,
      href: "/dashboard/subscription",
    },
    {
      label: "Settings",
      icon: <Settings size={20} />,
      href: "/dashboard/settings",
    },
  ];

  useEffect(() => {
    const index = navItems.findIndex((item) => item.href === pathname);
    setNotchY(index * (ITEM_HEIGHT + GAP));
  }, [pathname]);

  return (
    <aside className="bg-[var(--color-primary)] text-white rounded-3xl m-2 p-4 w-20 flex flex-col items-center justify-between py-6">
      {/* Logo */}
      <div className="mb-4">
        <Image
          src="/logo.svg"
          alt="Recappa logo"
          width={32}
          height={32}
          className="transition-all"
        />
      </div>

      {/* Nav */}
      <nav className="relative flex flex-col items-center gap-4 flex-1">
        {/* Background blob (behind icon) */}
        <motion.div
          className="absolute z-0 left-0 w-12 h-8 rounded-l-2xl bg-[var(--background)]"
          animate={{ y: notchY }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {/* Animated Notch */}
        <motion.div
          className="absolute z-0 -right-4 -top-12"
          animate={{ y: notchY }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Notch className="w-4 h-32 text-[var(--background)]" />
        </motion.div>

        {/* Nav Items */}
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative z-10 flex items-center justify-center w-12 h-8 transition-all
                ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "hover:bg-white/10 hover:rounded-2xl text-white"
                }`}
            >
              {item.icon}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Icon */}
      <button className="w-12 h-12 flex items-center justify-center hover:bg-white/10 hover:text-red-600 rounded-xl transition-colors">
        <LogOut size={20} />
      </button>
    </aside>
  );
}
