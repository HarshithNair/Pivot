"use client";

import { useState, useMemo } from "react";
import Sidebar from "@/components/Sidebar";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Zap, 
  Info,
  ShieldCheck,
  RefreshCcw,
  Target
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { motion } from "framer-motion";

export default function SimulationPage() {
  const [pricing, setPricing] = useState(49);
  const [adSpend, setAdSpend] = useState(5000);
  const [retention, setRetention] = useState(85);
  const [cac, setCac] = useState(120);

  const simulationData = useMemo(() => {
    const data = [];
    let baseRevenue = 50000;
    const growthFactor = (pricing / 50) * (adSpend / 5000) * (retention / 100) * (150 / cac);
    
    for (let i = 0; i < 12; i++) {
      const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i];
      baseRevenue = baseRevenue * (1 + 0.1 * growthFactor);
      data.push({
        name: month,
        revenue: Math.round(baseRevenue),
        profit: Math.round(baseRevenue * 0.4),
      });
    }
    return data;
  }, [pricing, adSpend, retention, cac]);

  const survivalProbability = useMemo(() => {
    const score = (retention * 0.4) + (pricing * 0.2) + (500000 / adSpend * 0.1) + (200 / cac * 0.3);
    return Math.min(Math.round(score), 99);
  }, [pricing, adSpend, retention, cac]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Future Simulation Engine</h1>
              <p className="text-white/40 italic">"The best way to predict the future is to simulate it."</p>
            </div>
            <GlowButton variant="outline" className="flex items-center gap-2">
              <RefreshCcw className="w-4 h-4" /> Reset Model
            </GlowButton>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Control Panel */}
            <div className="space-y-6">
              <GlassCard className="p-6">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Target className="text-pivot-blue w-5 h-5" /> Variable Inputs
                </h3>
                
                <div className="space-y-8">
                  <SliderControl 
                    label="Monthly Pricing" 
                    value={pricing} 
                    min={10} 
                    max={500} 
                    unit="$" 
                    onChange={setPricing} 
                    icon={DollarSign}
                  />
                  <SliderControl 
                    label="Monthly Ad Spend" 
                    value={adSpend} 
                    min={0} 
                    max={50000} 
                    unit="$" 
                    step={500}
                    onChange={setAdSpend} 
                    icon={Zap}
                  />
                  <SliderControl 
                    label="Retention Rate" 
                    value={retention} 
                    min={50} 
                    max={100} 
                    unit="%" 
                    onChange={setRetention} 
                    icon={Users}
                  />
                  <SliderControl 
                    label="Customer Acquisition Cost (CAC)" 
                    value={cac} 
                    min={10} 
                    max={1000} 
                    unit="$" 
                    onChange={setCac} 
                    icon={TrendingUp}
                  />
                </div>
              </GlassCard>

              <GlassCard className="bg-gradient-to-br from-pivot-blue/10 to-transparent border-pivot-blue/20">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-pivot-blue">Survival Probability</h4>
                  <ShieldCheck className="text-pivot-blue w-5 h-5" />
                </div>
                <div className="text-5xl font-bold mb-2">{survivalProbability}%</div>
                <p className="text-xs text-white/40 leading-relaxed">
                  Based on current variables and market volatility index. 
                  <span className="text-pivot-blue font-bold ml-1">High confidence.</span>
                </p>
              </GlassCard>
            </div>

            {/* Projection Chart */}
            <div className="lg:col-span-2 space-y-6">
              <GlassCard className="min-h-[500px]">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h3 className="font-bold text-xl mb-1">12-Month Revenue Projection</h3>
                    <p className="text-sm text-white/40 text-glow-blue">AI-Generated Predictive Model v4.1</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">${simulationData[11].revenue.toLocaleString()}</div>
                    <div className="text-[10px] text-green-400 font-bold uppercase">Estimated ARR</div>
                  </div>
                </div>

                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={simulationData}>
                      <defs>
                        <linearGradient id="simColor" x1="0" y1="0" x2="0" y2="1">
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
                        formatter={(value: any) => [`$${Number(value).toLocaleString()}`, "Revenue"]}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#00d2ff" 
                        strokeWidth={4} 
                        fillOpacity={1} 
                        fill="url(#simColor)" 
                        animationDuration={1000}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-white/40 uppercase font-bold mb-1">Market Position</div>
                    <div className="font-bold text-white">Aggressive</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-white/40 uppercase font-bold mb-1">Risk Profile</div>
                    <div className="font-bold text-orange-400">Moderate</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[10px] text-white/40 uppercase font-bold mb-1">Efficiency Ratio</div>
                    <div className="font-bold text-green-400">1.8x LTV/CAC</div>
                  </div>
                </div>
              </GlassCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassCard className="border-l-4 border-l-pivot-sky">
                  <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                    <Info className="text-pivot-sky w-4 h-4" /> AI Observation
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Increasing pricing beyond $150 with current retention rates triggers a "Churn Spiral" risk. Pivot recommends focusing on retention before further pricing hikes.
                  </p>
                </GlassCard>
                <GlassCard className="border-l-4 border-l-green-400">
                  <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
                    <Rocket className="text-green-400 w-4 h-4" /> Optimization Path
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    At $10,000 monthly ad spend, you hit the "Saturation Point". Consider diversifying channels into Organic/SEO to maintain CAC below $100.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SliderControl({ label, value, min, max, unit, step = 1, onChange, icon: Icon }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-xs font-bold uppercase tracking-widest text-white/60 flex items-center gap-2">
          <Icon className="w-3 h-3" /> {label}
        </label>
        <span className="text-sm font-bold text-white">
          {unit === "$" ? `$${value.toLocaleString()}` : `${value}${unit}`}
        </span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step}
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-pivot-blue"
      />
    </div>
  );
}
