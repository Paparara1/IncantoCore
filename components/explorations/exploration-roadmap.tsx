'use client';

import React from 'react';
import { ExplorationAsset } from '@/lib/data/explorations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Compass, Hammer, Cpu, ArrowRight } from 'lucide-react';

interface ExplorationRoadmapProps {
  roadmap: ExplorationAsset['roadmap'];
}

export function ExplorationRoadmap({ roadmap }: ExplorationRoadmapProps) {
  const phases = [
    {
      stage: 'Explore',
      title: 'Phase 1: Explore',
      description: roadmap.explore,
      Icon: Compass,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-950/50 border-cyan-800/60',
      stepNum: '01'
    },
    {
      stage: 'Prototype',
      title: 'Phase 2: Prototype',
      description: roadmap.prototype,
      Icon: Hammer,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-950/50 border-emerald-800/60',
      stepNum: '02'
    },
    {
      stage: 'Integrate',
      title: 'Phase 3: Integrate',
      description: roadmap.integrate,
      Icon: Cpu,
      color: 'text-purple-400',
      bgColor: 'bg-purple-950/50 border-purple-800/60',
      stepNum: '03'
    },
    {
      stage: 'Productize',
      title: 'Phase 4: Productize',
      description: roadmap.productize,
      Icon: Rocket,
      color: 'text-amber-400',
      bgColor: 'bg-amber-950/50 border-amber-800/60',
      stepNum: '04'
    }
  ];

  return (
    <Card className="bg-slate-900/80 border-slate-800 shadow-xl backdrop-blur text-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold flex items-center gap-2 text-slate-100">
          <Rocket className="w-5 h-5 text-cyan-400" />
          R&D Asset Pipeline: Explore → Prototype → Integrate → Productize
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {phases.map((phase, idx) => {
            const Icon = phase.Icon;
            return (
              <div
                key={phase.stage}
                className={`p-4 rounded-xl border ${phase.bgColor} flex flex-col justify-between space-y-3 relative group transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-center justify-between">
                  <span className={`p-2 rounded-lg bg-slate-950/80 ${phase.color} border border-slate-800`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-500">
                    PHASE {phase.stepNum}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className={`text-sm font-bold ${phase.color}`}>
                    {phase.stage}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {idx < phases.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
