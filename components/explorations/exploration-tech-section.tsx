'use client';

import React from 'react';
import { ExplorationAsset } from '@/lib/data/explorations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Cpu, Network, Layers, Code2 } from 'lucide-react';

interface ExplorationTechSectionProps {
  asset: ExplorationAsset;
}

export function ExplorationTechSection({ asset }: ExplorationTechSectionProps) {
  return (
    <div className="space-y-6">
      {/* Problem vs Core Tech Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Problem Statement */}
        <Card className="bg-slate-900/80 border-slate-800 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold text-rose-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              Target Problem & Bottleneck
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300 leading-relaxed">
            {asset.problem}
          </CardContent>
        </Card>

        {/* Core Technology */}
        <Card className="bg-slate-900/80 border-slate-800 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold text-cyan-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Core Innovation Vector
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300 leading-relaxed">
            {asset.coreTechnology}
          </CardContent>
        </Card>

      </div>

      {/* Technical Architecture Breakdown */}
      <Card className="bg-slate-900/80 border-slate-800 shadow-xl">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Network className="w-5 h-5 text-cyan-400" />
            System & Technical Architecture
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {asset.technicalArchitecture.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/50 flex items-center justify-center font-mono text-xs shrink-0 font-bold">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-400 uppercase">
              <Code2 className="w-4 h-4 text-purple-400" />
              <span>Technology Stack & Tooling</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {asset.technologyStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs py-1 px-2.5 font-mono"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
