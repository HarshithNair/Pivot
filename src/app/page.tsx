"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Zap, TrendingUp, Cpu, Globe } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid z-0" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pivot-blue/20 blur-[120px] rounded-full animate-pulse-slow z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pivot-sky/20 blur-[120px] rounded-full animate-pulse-slow delay-1000 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-pivot-blue mb-6">
              v2.0 Strategic Intelligence Platform
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Startups don’t fail because <br />
              <span className="text-white/40">they lack ambition.</span> <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pivot-blue to-pivot-sky">
                They fail in the darkness.
              </span>
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Pivot is the AI strategic intelligence system that helps startups survive, adapt, and grow by illuminating the data that matters.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/analysis">
                <GlowButton className="w-full sm:w-auto h-14 px-10 text-lg">
                  Analyze My Startup <ArrowRight className="w-5 h-5" />
                </GlowButton>
              </Link>
              <GlowButton variant="outline" className="w-full sm:w-auto h-14 px-10 text-lg">
                <Play className="w-5 h-5" /> Watch Demo
              </GlowButton>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements Mockup */}
        <div className="relative mt-20 w-full max-w-6xl mx-auto z-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="md:col-span-2 h-64 overflow-hidden relative group" animate delay={0.2}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold">Survival Probability</h3>
                  <p className="text-sm text-white/40">Real-time market fit analysis</p>
                </div>
                <TrendingUp className="text-pivot-blue" />
              </div>
              <div className="h-32 flex items-end gap-2 px-2">
                {[40, 60, 45, 80, 55, 90, 75, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                    className="flex-1 bg-gradient-to-t from-pivot-blue/40 to-pivot-blue rounded-t-sm"
                  />
                ))}
              </div>
            </GlassCard>
            <GlassCard className="h-64 flex flex-col justify-between" animate delay={0.4}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pivot-sky/20 flex items-center justify-center">
                  <Zap className="text-pivot-sky w-5 h-5" />
                </div>
                <span className="font-medium text-white/80">AI Insight</span>
              </div>
              <p className="text-white/60 italic leading-relaxed">
                "Your onboarding creates cognitive overload. Reduce steps to increase conversion by 14%."
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-pivot-sky uppercase tracking-wider">
                <CheckCircle2 className="w-3 h-3" /> Priority: High
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 border-y border-white/5 bg-pivot-charcoal/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">12,000+</div>
              <div className="text-white/40 uppercase tracking-widest text-xs font-bold">Startups Analyzed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-pivot-blue mb-2">83%</div>
              <div className="text-white/40 uppercase tracking-widest text-xs font-bold">Survival Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-pivot-sky mb-2">4.7x</div>
              <div className="text-white/40 uppercase tracking-widest text-xs font-bold">Faster Decision Making</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Strategic Intelligence Core</h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              Our neural network processes millions of data points to deliver actionable strategic intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Health Diagnosis", icon: Zap, desc: "Instant detection of growth bottlenecks and structural risks." },
              { title: "Future Simulation", icon: Globe, desc: "Run what-if scenarios to predict market shifts before they happen." },
              { title: "Trust Analysis", icon: ShieldCheck, desc: "Quantify customer trust and brand sentiment across all channels." },
              { title: "Market Narratives", icon: Cpu, desc: "Uncover competitor strategies and identify untapped market gaps." },
            ].map((f, i) => (
              <GlassCard key={i} className="hover:bg-white/5 transition-colors" delay={i * 0.1}>
                <f.icon className="w-8 h-8 text-pivot-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 text-center relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-pivot-blue/10 to-transparent z-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8">Build the future with clarity.</h2>
          <Link href="/analysis">
            <GlowButton className="h-16 px-12 text-xl">
              Launch Analysis Engine
            </GlowButton>
          </Link>
          <p className="mt-8 text-white/40">Join 500+ venture-backed teams using Pivot.</p>
        </div>
      </section>
    </div>
  );
}
