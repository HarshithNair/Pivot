"use client";

import Sidebar from "@/components/Sidebar";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";
import { 
  User, 
  Shield, 
  Cpu, 
  Bell, 
  Database, 
  Lock,
  Globe,
  CreditCard
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl font-bold mb-2">System Settings</h1>
            <p className="text-white/40">Configure your strategic intelligence parameters and neural preferences.</p>
          </header>

          <div className="space-y-6">
            <GlassCard className="p-0 overflow-hidden">
              <div className="p-6 border-b border-white/5">
                <h3 className="font-bold flex items-center gap-2">
                  <User className="text-pivot-blue w-5 h-5" /> Profile Intelligence
                </h3>
              </div>
              <div className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-white/40">Startup Name</label>
                    <input type="text" defaultValue="AlphaVenture Inc." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-pivot-blue/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-white/40">Industry Sector</label>
                    <input type="text" defaultValue="Generative AI & Automation" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-pivot-blue/50 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-white/40">Strategic Vision</label>
                  <textarea rows={3} defaultValue="Building the operating system for startup survival through neural intelligence and market-fit simulation." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-pivot-blue/50 transition-all resize-none" />
                </div>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="p-6">
                <h3 className="font-bold mb-6 flex items-center gap-2">
                  <Cpu className="text-pivot-sky w-5 h-5" /> Neural Engine
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-bold">Deep Scan Frequency</p>
                      <p className="text-[10px] text-white/40">Automated daily market audits</p>
                    </div>
                    <div className="w-10 h-5 bg-pivot-blue/20 rounded-full relative">
                      <div className="absolute right-1 top-1 w-3 h-3 bg-pivot-blue rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-bold">Predictive Confidence</p>
                      <p className="text-[10px] text-white/40">Only show {" > "}90% probability</p>
                    </div>
                    <div className="w-10 h-5 bg-white/10 rounded-full relative">
                      <div className="absolute left-1 top-1 w-3 h-3 bg-white/40 rounded-full" />
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="font-bold mb-6 flex items-center gap-2">
                  <Shield className="text-green-400 w-5 h-5" /> Security & Privacy
                </h3>
                <div className="space-y-4">
                  <GlowButton variant="outline" className="w-full text-xs py-2 justify-start">
                    <Lock className="w-3 h-3 mr-2" /> Reset Security Keys
                  </GlowButton>
                  <GlowButton variant="outline" className="w-full text-xs py-2 justify-start">
                    <Database className="w-3 h-3 mr-2" /> Export Neural Data
                  </GlowButton>
                </div>
              </GlassCard>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button className="text-sm font-medium text-white/40 hover:text-white transition-colors">Discard Changes</button>
              <GlowButton className="px-10">Save Configuration</GlowButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
