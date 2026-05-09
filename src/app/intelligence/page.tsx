"use client";

import Sidebar from "@/components/Sidebar";
import GlassCard from "@/components/ui/GlassCard";
import { 
  Shield, 
  Target, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  BarChart3,
  AlertCircle,
  Search,
  ArrowUpRight,
  Zap
} from "lucide-react";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Cell,
  Tooltip,
  CartesianGrid
} from "recharts";

const radarData = [
  { subject: 'Trust', A: 120, B: 110, fullMark: 150 },
  { subject: 'Pricing', A: 98, B: 130, fullMark: 150 },
  { subject: 'Speed', A: 86, B: 130, fullMark: 150 },
  { subject: 'Features', A: 99, B: 100, fullMark: 150 },
  { subject: 'UI/UX', A: 85, B: 90, fullMark: 150 },
  { subject: 'Support', A: 65, B: 85, fullMark: 150 },
];

const positioningData = [
  { name: 'AlphaVenture (You)', x: 80, y: 70, z: 200, color: '#00d2ff' },
  { name: 'ScaleLogic', x: 30, y: 20, z: 150, color: '#ff4b4b' },
  { name: 'IterateAI', x: 60, y: 40, z: 180, color: '#ffbd2d' },
  { name: 'PivotPoint', x: 20, y: 80, z: 120, color: '#0088ff' },
  { name: 'VelocityStream', x: 90, y: 30, z: 250, color: '#00e676' },
];

export default function CompetitorsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Competitor Intelligence</h1>
              <p className="text-white/40">Cyberpunk-grade market positioning and emotional narrative analysis.</p>
            </div>
            <div className="glass px-4 py-2 rounded-xl flex items-center gap-3 border-white/5">
              <Search className="w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Search competitor..." 
                className="bg-transparent border-none outline-none text-sm text-white placeholder:text-white/20 w-48"
              />
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Comparative Trust Radar */}
            <GlassCard className="min-h-[450px]">
              <div className="flex justify-between items-center mb-10">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Shield className="text-pivot-blue w-5 h-5" /> Brand Trust Radar
                </h3>
                <div className="flex gap-4 text-[10px] font-bold uppercase">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-pivot-blue" /> You</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-white/20" /> Market Avg</span>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#ffffff10" />
                    <PolarAngleAxis dataKey="subject" stroke="#ffffff40" fontSize={12} />
                    <Radar
                      name="You"
                      dataKey="A"
                      stroke="#00d2ff"
                      fill="#00d2ff"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="Market"
                      dataKey="B"
                      stroke="#ffffff40"
                      fill="#ffffff10"
                      fillOpacity={0.1}
                    />
                    <Tooltip 
                      contentStyle={{ background: "#0f0f12", border: "1px solid #ffffff10", borderRadius: "12px" }}
                      itemStyle={{ color: "#fff" }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>

            {/* Emotional Positioning Map */}
            <GlassCard className="min-h-[450px]">
              <div className="flex justify-between items-center mb-10">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Target className="text-pivot-sky w-5 h-5" /> Market Positioning Map
                </h3>
                <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Innovation vs. Reliability</span>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" />
                    <XAxis type="number" dataKey="x" name="Innovation" unit="%" stroke="#ffffff20" fontSize={10} />
                    <YAxis type="number" dataKey="y" name="Reliability" unit="%" stroke="#ffffff20" fontSize={10} />
                    <ZAxis type="number" dataKey="z" range={[50, 400]} name="Market Cap" />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }} 
                      contentStyle={{ background: "#0f0f12", border: "1px solid #ffffff10", borderRadius: "12px" }}
                    />
                    <Scatter name="Startups" data={positioningData}>
                      {positioningData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-center gap-6">
                {positioningData.map((p, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[10px] text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }} />
                    {p.name}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Competitor Analysis Feed */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-bold text-lg px-2 mb-4">Intelligence Feed</h3>
              {[
                { 
                  name: "ScaleLogic", 
                  action: "Price Hike Detected", 
                  impact: "Medium", 
                  time: "2h ago",
                  desc: "ScaleLogic increased their 'Pro' tier by 15%. This creates a 12% price-gap opportunity for our mid-market segment."
                },
                { 
                  name: "IterateAI", 
                  action: "New Feature: Auto-Pilot", 
                  impact: "High", 
                  time: "6h ago",
                  desc: "Direct feature overlap detected with our upcoming 'Workflow Engine'. Recommend prioritizing the 'Emotional AI' differentiator."
                },
                { 
                  name: "PivotPoint", 
                  action: "Funding: $12M Series A", 
                  impact: "Critical", 
                  time: "1d ago",
                  desc: "Competitor now has capital for aggressive talent poaching. Strengthen employee retention incentives immediately."
                }
              ].map((item, i) => (
                <GlassCard key={i} className="p-5 flex gap-5 items-start" delay={i * 0.1}>
                  <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${
                    item.impact === 'High' || item.impact === 'Critical' ? 'bg-red-400/10 text-red-400' : 'bg-pivot-blue/10 text-pivot-blue'
                  }`}>
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-white">{item.name}: <span className="font-medium text-white/80">{item.action}</span></h4>
                      <span className="text-[10px] text-white/30">{item.time}</span>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full ${
                        item.impact === 'High' || item.impact === 'Critical' ? 'bg-red-400/20 text-red-400' : 'bg-pivot-blue/20 text-pivot-blue'
                      }`}>
                        {item.impact} Impact
                      </span>
                      <button className="text-[9px] font-bold text-white/40 hover:text-white uppercase flex items-center gap-1 transition-colors">
                        Analyze Deeply <ArrowUpRight className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Strategic Recommendations */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg px-2 mb-4">Market Gaps</h3>
              <GlassCard className="bg-pivot-sky/5 border-pivot-sky/20" delay={0.4}>
                <Zap className="text-pivot-sky w-6 h-6 mb-4" />
                <h4 className="font-bold mb-2">Unoccupied High-Trust Territory</h4>
                <p className="text-xs text-white/60 leading-relaxed mb-4">
                  Current data shows no major competitor is successfully communicating "Privacy-First Strategic Intelligence".
                </p>
                <div className="p-3 rounded-lg bg-pivot-sky/10 border border-pivot-sky/20 text-[11px] font-medium text-white/90">
                  Opportunity: Pivot towards a "Local-First AI" narrative.
                </div>
              </GlassCard>

              <GlassCard className="bg-pivot-blue/5 border-pivot-blue/20" delay={0.5}>
                <TrendingUp className="text-pivot-blue w-6 h-6 mb-4" />
                <h4 className="font-bold mb-2">Virality Prediction</h4>
                <p className="text-xs text-white/60 leading-relaxed mb-4">
                  Interactive dashboards like "Future Simulation" have a 4.2x higher shareability score than static PDF reports.
                </p>
                <div className="p-3 rounded-lg bg-pivot-blue/10 border border-pivot-blue/20 text-[11px] font-medium text-white/90">
                  Opportunity: Launch a public-facing "Survival Calculator".
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
