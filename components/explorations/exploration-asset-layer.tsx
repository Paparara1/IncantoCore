'use client';

import React from 'react';
import { ExplorationAsset } from '@/lib/data/explorations';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers, KeyRound, Lightbulb, Building2, TrendingUp, Handshake, Flag, Cpu } from 'lucide-react';

interface ExplorationAssetLayerProps {
  asset: ExplorationAsset;
}

export function ExplorationAssetLayer({ asset }: ExplorationAssetLayerProps) {
  const layer = asset.assetLayer;

  return (
    <Card className="bg-slate-900/90 border-slate-800 shadow-2xl backdrop-blur text-white overflow-hidden">
      <CardHeader className="bg-slate-950/60 border-b border-slate-800 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <CardTitle className="text-xl font-bold flex items-center gap-2 text-cyan-400">
            <Layers className="w-5 h-5 text-cyan-400" />
            INCANTO Technology Asset Layer Matrix
          </CardTitle>
          <Badge variant="outline" className="border-cyan-500/40 text-cyan-300 bg-cyan-950/60 w-fit font-mono text-xs">
            IP & Licensing Spec
          </Badge>
        </div>
        <CardDescription className="text-slate-400 text-xs">
          Structured Deep-Tech asset manifest for venture capital, strategic R&D partners, and IP licensors.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* IP & Prototype Status */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <KeyRound className="w-4 h-4 text-cyan-400" />
                IP & Proprietary Know-How
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {layer.ipKnowHow}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-emerald-400" />
                Prototype & Demonstrator Readiness
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {layer.prototypeDemo}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-purple-400" />
                Target Industries & Verticals
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {layer.targetIndustries.map((ind) => (
                  <Badge key={ind} className="bg-purple-950/80 border border-purple-800 text-purple-200 text-xs">
                    {ind}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Licensing & Commercial Potential */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-yellow-400 uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-yellow-400" />
                Commercial Potential
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {layer.commercialPotential}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                <Handshake className="w-4 h-4 text-cyan-400" />
                Licensing & Strategic Partnership Potential
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {layer.licensingPotential}
              </p>
              <p className="text-xs text-slate-400 pt-1 border-t border-slate-900">
                <span className="font-semibold text-slate-300">R&D Co-Development: </span>
                {layer.strategicPartnershipPotential}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 uppercase tracking-wider">
                <Flag className="w-4 h-4 text-cyan-300" />
                Next Engineering Milestone
              </div>
              <p className="text-xs sm:text-sm text-cyan-100 font-medium">
                {layer.nextMilestone}
              </p>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
