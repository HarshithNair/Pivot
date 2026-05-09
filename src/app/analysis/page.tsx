"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import { 
  Upload, 
  Cpu, 
  ShieldAlert, 
  BrainCircuit, 
  FileText, 
  CheckCircle2, 
  Loader2,
  ChevronRight,
  TrendingDown,
  Users,
  DollarSign
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnalysisPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl font-bold mb-2">AI Strategic Diagnosis</h1>
            <p className="text-white/40">Upload your startup metrics to identify growth bottlenecks and strategic risks.</p>
          </header>

          <AnimatePresence mode="wait">
            {!showResults && !isAnalyzing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key="upload-section"
              >
                <GlassCard className="py-16 px-8 text-center border-dashed border-2 border-white/10 bg-white/[0.02]">
                  <div className="w-20 h-20 bg-pivot-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Upload className="text-pivot-blue w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Upload Startup Data</h2>
                  <p className="text-white/40 mb-8 max-w-md mx-auto">
                    Drag and drop your Stripe export, customer reviews (CSV), or manual metrics to begin the neural analysis.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {["Financials", "Churn Data", "Pricing", "Feedback"].map((item) => (
                      <div key={item} className="p-6 glass-lighter rounded-xl border-white/5 flex flex-col items-center justify-center gap-3 transition-colors hover:bg-white/10">
                        <FileText className="w-6 h-6 text-pivot-blue" />
                        <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">{item}</span>
                      </div>
                    ))}
                  </div>

                  <GlowButton onClick={handleStartAnalysis} className="h-14 px-12 text-lg">
                    Initialize Analysis Engine
                  </GlowButton>
                </GlassCard>
              </motion.div>
            )}

            {isAnalyzing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="loading-section"
                className="py-20 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="absolute inset-0 border-4 border-pivot-blue/20 rounded-full" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-t-pivot-blue rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="text-pivot-blue w-10 h-10 animate-pulse" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Neural Engine Processing...</h2>
                <div className="max-w-sm mx-auto space-y-3">
                  {[
                    "Analyzing customer psychology...",
                    "Scanning competitive landscape...",
                    "Detecting churn patterns...",
                    "Synthesizing strategic recommendations..."
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.5 }}
                      className="text-white/40 text-sm flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-3 h-3 text-pivot-blue" /> {text}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key="results-section"
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <BrainCircuit className="text-green-500 w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">Analysis Complete</h2>
                      <p className="text-white/40 text-sm">Confidence Score: 94.2%</p>
                    </div>
                  </div>
                  <GlowButton variant="outline" onClick={() => setShowResults(false)}>
                    New Analysis
                  </GlowButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Cognitive Overload on Onboarding",
                      severity: "High",
                      color: "text-red-400",
                      bg: "bg-red-400/5",
                      icon: Users,
                      insight: "Your multi-step onboarding creates significant friction. 42% of users drop off at Step 3 (API Setup).",
                      recommendation: "Implement 'Quickstart' templates and postpone API setup until after first value is delivered."
                    },
                    {
                      title: "Pricing Trust Gap",
                      severity: "Medium",
                      color: "text-orange-400",
                      bg: "bg-orange-400/5",
                      icon: DollarSign,
                      insight: "User sentiment analysis indicates that the 'Enterprise' tag without pricing transparency reduces trust.",
                      recommendation: "Add a 'Starting from $XXX' label or a detailed feature comparison table for the Enterprise tier."
                    },
                    {
                      title: "Emotional Brand Deficit",
                      severity: "Medium",
                      color: "text-orange-400",
                      bg: "bg-orange-400/5",
                      icon: ShieldAlert,
                      insight: "Marketing copy focuses 90% on features and only 10% on outcomes. No emotional connection detected.",
                      recommendation: "Refactor landing page copy to focus on the 'Anxiety-Free Compliance' outcome rather than just 'Auto-Auditing'."
                    },
                    {
                      title: "Competitor Proof Domination",
                      severity: "Low",
                      color: "text-pivot-blue",
                      bg: "bg-pivot-blue/5",
                      icon: TrendingDown,
                      insight: "Top 3 competitors have 4x more social proof elements on their primary conversion pages.",
                      recommendation: "Incorporate 'Verified by Pivot' badges and customer testimonial video snippets in the hero section."
                    }
                  ].map((card, i) => (
                    <GlassCard key={i} className={`p-6 border-l-4 ${card.color.replace('text', 'border')} ${card.bg}`} delay={i * 0.1}>
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-2 rounded-lg ${card.bg} ${card.color}`}>
                          <card.icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${card.bg} ${card.color}`}>
                          {card.severity} Severity
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                      <p className="text-sm text-white/60 mb-4 italic leading-relaxed">
                        "{card.insight}"
                      </p>
                      <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="text-[10px] uppercase font-bold text-white/30 mb-1">Strategic Recommendation</div>
                        <p className="text-xs font-medium text-white/80 leading-relaxed">
                          {card.recommendation}
                        </p>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                <GlassCard className="bg-pivot-blue/5 border-pivot-blue/20">
                  <div className="flex items-center gap-6 p-4">
                    <div className="w-16 h-16 rounded-2xl bg-pivot-blue flex items-center justify-center shrink-0">
                      <Rocket className="text-white w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">Pivot Recommendation: Strategic Shift</h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Based on current market signals, a shift towards "Developer-First Automation" instead of "Manager-Focused Reports" will likely increase retention by 35%.
                      </p>
                    </div>
                    <GlowButton className="shrink-0">
                      View Simulation <ChevronRight className="w-4 h-4" />
                    </GlowButton>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function Rocket(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
      <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
    </svg>
  );
}
