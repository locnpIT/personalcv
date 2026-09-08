import React from "react";
import { Server, Database, Zap, Shield, ArrowRight, Activity } from "lucide-react";

export const ArchitectureVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 rounded-2xl blur-xl opacity-50 animate-pulse-glow" />

      {/* Main Terminal / Architecture Box */}
      <div className="relative rounded-xl border border-zinc-800/80 bg-zinc-950/90 shadow-2xl backdrop-blur-sm overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-800/80 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
            <span className="text-zinc-400 ml-2">sys-arch // cluster-node-01</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px]">healthy (latency: ~0.8ms)</span>
          </div>
        </div>

        {/* Node Diagram Body */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Node 1: Edge & Ingress */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-cyan-950/50 border border-cyan-800/50 text-cyan-400">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-zinc-200">
                    EDGE INGRESS & GATEWAY
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                    Cloudflare
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono mt-0.5">
                  TLS termination · Rate limit inspection · Anycast routing
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">200 OK</span>
          </div>

          {/* Connection Line */}
          <div className="flex justify-center -my-2">
            <div className="flex flex-col items-center">
              <div className="w-px h-3 bg-gradient-to-b from-cyan-500/50 to-emerald-500/50" />
              <ArrowRight className="w-3 h-3 text-emerald-400 rotate-90" />
            </div>
          </div>

          {/* Node 2: Core Spring Boot Application Service */}
          <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-emerald-900/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-emerald-950/60 border border-emerald-700/50 text-emerald-400">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-emerald-300">
                      SPRING BOOT BACKEND CORE
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
                      JVM / Java 21
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-300 font-mono mt-0.5">
                    REST APIs · Concurrency Control · Business Invariants
                  </p>
                </div>
              </div>
              <span className="font-mono text-[11px] text-emerald-400/90 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                ACTIVE
              </span>
            </div>

            {/* Micro metrics inside service */}
            <div className="mt-3 pt-2.5 border-t border-zinc-800/80 grid grid-cols-3 gap-2 font-mono text-[10px]">
              <div className="bg-zinc-950/70 p-1.5 rounded border border-zinc-800/50 text-center">
                <span className="text-zinc-500 block">GC Pause</span>
                <span className="text-zinc-200 font-semibold">&lt; 1.5ms</span>
              </div>
              <div className="bg-zinc-950/70 p-1.5 rounded border border-zinc-800/50 text-center">
                <span className="text-zinc-500 block">Thread Pool</span>
                <span className="text-zinc-200 font-semibold">Non-blocking</span>
              </div>
              <div className="bg-zinc-950/70 p-1.5 rounded border border-zinc-800/50 text-center">
                <span className="text-zinc-500 block">Health</span>
                <span className="text-emerald-400 font-semibold">UP (100%)</span>
              </div>
            </div>
          </div>

          {/* Dual Connection Path (Cache vs Database) */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            {/* Branch 1: Redis Caching / Lua Layer */}
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-red-900/30 hover:border-red-800/50 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <Zap className="w-3.5 h-3.5 text-red-400" />
                <span className="font-mono text-xs font-semibold text-zinc-200">
                  REDIS MEMORY
                </span>
              </div>
              <p className="text-[10px] font-mono text-zinc-400 leading-tight">
                Lua atomic scripts · Sliding window & ZSET ranking
              </p>
              <div className="mt-2 flex items-center justify-between text-[10px] font-mono">
                <span className="text-red-400/90 font-semibold">CACHE HIT: 98.4%</span>
                <span className="text-zinc-500">~0.4ms</span>
              </div>
            </div>

            {/* Branch 2: Relational DB (MySQL / Row-Lock) */}
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-blue-900/30 hover:border-blue-800/50 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <Database className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-mono text-xs font-semibold text-zinc-200">
                  SQL STORAGE
                </span>
              </div>
              <p className="text-[10px] font-mono text-zinc-400 leading-tight">
                Row-level locks (`FOR UPDATE`) · Covering B+ Tree indexes
              </p>
              <div className="mt-2 flex items-center justify-between text-[10px] font-mono">
                <span className="text-sky-400/90 font-semibold">ACID ATOMIC</span>
                <span className="text-zinc-500">Indexed</span>
              </div>
            </div>
          </div>

          {/* Real-time system log ticker */}
          <div className="pt-2 border-t border-zinc-800/70 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-zinc-300">SYSTEM:</span>
              <span className="text-zinc-400 truncate">
                rate_limiter.lua executed [OK: 0.32ms]
              </span>
            </div>
            <span className="text-emerald-400 text-[10px] font-semibold">NOMINAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};
