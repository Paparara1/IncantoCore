'use client';

import React from 'react';
import Link from 'next/link';
import { ExplorationAsset } from '@/lib/data/explorations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Cpu, ShieldAlert, Sparkles, Activity } from 'lucide-react';

interface ExplorationHeroProps {
  asset: ExplorationAsset;
}

export function ExplorationHero({ asset }: ExplorationHeroProps) {
  return (
    <div className="relative border-b border-slate-800 bg-slate-950/80 pt-8 pb-12 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/explorations">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-cyan-400 hover:bg-slate-900 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Technology Asset Registry
            </Button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            {/* Category & Status badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="outline" className="border-cyan-500/40 text-cyan-300 bg-cyan-950/60 font-mono text-xs">
                {asset.category}
              </Badge>
              <Badge className="bg-cyan-500/20 text-cyan-200 border border-cyan-500/30">
                {asset.status}
              </Badge>
              <Badge variant="outline" className="border-purple-500/40 text-purple-300 bg-purple-950/60 font-mono text-xs">
                TRL {asset.trl} / 9
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
              {asset.name}
            </h1>

            {/* One-line hypothesis */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 shadow-inner space-y-1">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">Hypothesis</span>
              <p className="text-sm sm:text-base italic font-serif leading-relaxed">
                &ldquo;{asset.hypothesis}&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Technology TRL Card */}
          <div className="lg:w-80 bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur shrink-0 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-slate-400 uppercase">Technology Readiness</span>
              <span className="text-xs font-bold font-mono text-cyan-400">TRL LEVEL {asset.trl}</span>
            </div>

            {/* TRL Progress Bar */}
            <div className="space-y-1.5">
              <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${(asset.trl / 9) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>TRL 1 (Basic)</span>
                <span>TRL 9 (Proven)</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="text-slate-200 font-medium">{asset.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Slug ID:</span>
                <span className="font-mono text-cyan-300">{asset.slug}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
