"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Cpu, 
  Rocket, 
  Shield, 
  MessageSquare, 
  FileText, 
  Settings,
  LogOut
} from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "AI Diagnosis", icon: Cpu, href: "/analysis" },
  { name: "Simulations", icon: Rocket, href: "/simulations" },
  { name: "Intelligence", icon: Shield, href: "/intelligence" },
  { name: "Reports", icon: FileText, href: "/reports" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-20 bottom-0 w-64 glass border-r border-white/5 flex flex-col p-4 z-40">
      <div className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? "bg-pivot-blue/10 text-pivot-blue border border-pivot-blue/20" 
                    : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{item.name}</span>
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator" 
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-pivot-blue"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div className="pt-4 border-t border-white/5 space-y-2">
        <Link href="/settings">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all">
            <Settings className="w-5 h-5" />
            <span className="font-medium text-sm">Settings</span>
          </div>
        </Link>
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/5 transition-all cursor-pointer">
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm">Sign Out</span>
        </div>
      </div>
    </aside>
  );
}
