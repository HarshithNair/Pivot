"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, BarChart3, Rocket, Cpu, Users } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "AI Analysis", href: "/analysis", icon: Cpu },
  { name: "Simulations", href: "/simulations", icon: Rocket },
  { name: "Intelligence", href: "/intelligence", icon: Shield },
];

export default function Navigation() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all ${isLandingPage ? "bg-transparent" : "bg-black/50 backdrop-blur-md border-b border-white/5"}`}>
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-pivot-blue to-pivot-sky rounded-lg flex items-center justify-center">
          <Rocket className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tighter text-white">PIVOT</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-pivot-blue ${
              pathname === item.href ? "text-pivot-blue" : "text-white/60"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
          Log in
        </Link>
        <Link href="/analysis" className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-white/90 transition-colors">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
