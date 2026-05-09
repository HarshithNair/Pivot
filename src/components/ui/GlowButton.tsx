"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

export default function GlowButton({
  children,
  className,
  variant = "primary",
  onClick,
}: GlowButtonProps) {
  const variants = {
    primary: "bg-pivot-blue text-white hover:shadow-[0_0_20px_rgba(0,210,255,0.5)]",
    secondary: "bg-pivot-sky text-white hover:shadow-[0_0_20px_rgba(0,136,255,0.5)]",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group whitespace-nowrap flex items-center justify-center",
        variants[variant],
        className
      )}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </motion.button>
  );
}
