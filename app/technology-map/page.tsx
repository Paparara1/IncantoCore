import React from 'react';
import { Metadata } from 'next';
import { TechnologyMap } from '@/components/technology-map/technology-map';
import { Badge } from '@/components/ui/badge';
import { Network } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology Map | INCANTO Deep-Tech Ecosystem',
  description: 'Visual 7-layer architecture map demonstrating how INCANTO technology assets integrate across signals, AI models, spatial intent, and physical world actuation.',
};

export default function TechnologyMapPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-slate-950 py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-cyan-500/40 text-cyan-300 bg-cyan-950/60 font-mono text-xs">
              System Architecture & Flow
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans flex items-center gap-3">
            <Network className="w-10 h-10 text-cyan-400" />
            INCANTO Technology Map
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The 7-layer technology matrix connecting raw sensory signals, signal processing, AI agents, spatial intent interpretation, and physical world actuation across all 10 modular INCANTO assets.
          </p>
        </div>

        {/* Technology Map Visual Component */}
        <TechnologyMap />

      </div>
    </div>
  );
}
