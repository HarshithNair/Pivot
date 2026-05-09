"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animate?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  animate = true,
  delay = 0,
}: GlassCardProps) {
  const Component = animate ? motion.div : "div";
  
  return (
    <Component
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover && animate ? { y: -5, borderColor: "rgba(255, 255, 255, 0.2)" } : undefined}
      className={cn(
        "glass p-6 rounded-2xl transition-all duration-300",
        className
      )}
    >
      {children}
    </Component>
  );
}
