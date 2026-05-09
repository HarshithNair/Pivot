"use client";

import Sidebar from "@/components/Sidebar";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  AlertCircle, 
  Activity, 
  Users, 
  Zap, 
  ArrowUpRight,
  BrainCircuit,
  Target
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

const performanceData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 1100 },
];

const retentionData = [
  { name: "Week 1", value: 100 },
  { name: "Week 2", value: 85 },
  { name: "Week 3", value: 70 },
  { name: "Week 4", value: 65 },
  { name: "Week 5", value: 62 },
  { name: "Week 6", value: 60 },
];

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold mb-2">Startup Command Center</h1>
              <p className="text-white/40">Real-time strategic intelligence for <span className="text-white font-medium underline decoration-pivot-blue">AlphaVenture Inc.</span></p>
            </div>
            <div className="flex gap-4">
              <div className="glass px-4 py-2 rounded-xl border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-white/80">AI Engine: Online</span>
              </div>
            </div>
          </header>

          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
            {[
              { label: "Survival Probability", value: "84%", color: "text-pivot-blue", icon: ShieldCheckIcon },
              { label: "PMF Score", value: "7.2", color: "text-pivot-sky", icon: Target },
              { label: "Trust Index", value: "92", color: "text-green-400", icon: BrainCircuit },
              { label: "Burn Risk", value: "Low", color: "text-green-400", icon: AlertCircle },
              { label: "Viral Potential", value: "High", color: "text-orange-400", icon: Zap },
              { label: "Founder Stress", value: "Elevated", color: "text-red-400", icon: Activity },
            ].map((metric, i) => (
              <GlassCard key={i} className="p-4" delay={i * 0.05}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">{metric.label}</span>
                  <metric.icon className={`w-4 h-4 ${metric.color}`} />
                </div>
                <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
              </GlassCard>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Growth Chart */}
            <GlassCard className="lg:col-span-2 min-h-[400px]" delay={0.4}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <TrendingUp className="text-pivot-blue w-5 h-5" /> Growth Velocity
                </h3>
                <div className="text-xs text-white/40 flex gap-4">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-pivot-blue" /> Actual</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-pivot-sky" /> Projected</span>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00d2ff" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#00d2ff" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis dataKey="name" stroke="#ffffff20" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#ffffff20" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ background: "#0f0f12", border: "1px solid #ffffff10", borderRadius: "12px" }}
                      itemStyle={{ color: "#fff" }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#00d2ff" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>

            {/* AI Insights Card */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg px-2">Critical AI Insights</h3>
              <GlassCard className="border-l-4 border-l-pivot-sky" delay={0.5}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-pivot-sky/20 flex items-center justify-center shrink-0">
                    <BrainCircuit className="text-pivot-sky w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Pricing Resistance Detected</h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      Users in the Enterprise segment are showing a 22% drop-off at the payment gateway. Strategic recommendation: Introduce a "Pro" tier at $49/mo.
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="border-l-4 border-l-pivot-blue" delay={0.6}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-pivot-blue/20 flex items-center justify-center shrink-0">
                    <Zap className="text-pivot-blue w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Viral Loop Opportunity</h4>
                    <p className="text-xs text-white/60 leading-relaxed">
                      "Project Share" feature usage has spiked. Users who share are 3x more likely to convert. Prioritize sharing incentives.
                    </p>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="bg-gradient-to-br from-pivot-blue/5 to-pivot-sky/5 border-white/5" delay={0.7}>
                <div className="text-center py-2">
                  <p className="text-[10px] text-white/40 uppercase font-bold mb-2">Next Milestone</p>
                  <p className="font-bold text-white mb-3">Series A Readiness: 78%</p>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "78%" }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-gradient-to-r from-pivot-blue to-pivot-sky"
                    />
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Retention Curve */}
            <GlassCard delay={0.8}>
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Users className="text-green-400 w-5 h-5" /> Retention Curve
              </h3>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={retentionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis dataKey="name" stroke="#ffffff20" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#ffffff20" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ background: "#0f0f12", border: "1px solid #ffffff10", borderRadius: "12px" }}
                      itemStyle={{ color: "#fff" }}
                    />
                    <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]}>
                      {retentionData.map((entry, index) => (
                        <rect key={`cell-${index}`} fill={index === 0 ? "#00d2ff" : "#00d2ff40"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>

            {/* Strategic Diagnosis */}
            <GlassCard delay={0.9} className="flex flex-col">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Target className="text-pivot-sky w-5 h-5" /> Strategic Diagnosis
              </h3>
              <div className="space-y-4 flex-1">
                {[
                  { label: "Product-Market Fit", score: 72, status: "Good" },
                  { label: "Operational Efficiency", score: 45, status: "Critical" },
                  { label: "Market Sentiment", score: 88, status: "Excellent" },
                  { label: "Technical Debt", score: 30, status: "Warning" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">{item.label}</span>
                      <span className={`font-bold ${item.score < 40 ? "text-red-400" : item.score < 70 ? "text-orange-400" : "text-green-400"}`}>
                        {item.score}% - {item.status}
                      </span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full">
                      <div 
                        className={`h-full rounded-full ${item.score < 40 ? "bg-red-400" : item.score < 70 ? "bg-orange-400" : "bg-green-400"}`} 
                        style={{ width: `${item.score}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
              <GlowButton variant="outline" className="mt-6 w-full text-xs py-2">
                View Full Diagnostic Report
              </GlowButton>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
}

function ShieldCheckIcon(props: any) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
