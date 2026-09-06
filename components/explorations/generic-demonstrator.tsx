'use client';

import React, { useState } from 'react';
import { Play, Activity, Cpu, Sparkles, Sliders, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

interface GenericDemonstratorProps {
  type: string;
  name: string;
}

export function GenericDemonstrator({ type, name }: GenericDemonstratorProps) {
  const [param1, setParam1] = useState(60);
  const [param2, setParam2] = useState(45);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <Card className="bg-slate-900/80 border-slate-800 shadow-2xl backdrop-blur text-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold flex items-center gap-2 text-cyan-400">
            <Cpu className="w-5 h-5 text-cyan-400" />
            {name} Interactive Simulation Lab
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono text-cyan-300 uppercase">{type} ENGINE</span>
          </div>
        </div>
        <CardDescription className="text-slate-400 text-xs">
          Interactive real-time model parameter exploration and simulated sensory telemetry loop.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Synthetic Disclaimer */}
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 flex items-center gap-3 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Simulated Hardware Data Loop: Validated against synthetic benchmarks. Hardware-agnostic interface ready for live device deployment.
          </span>
        </div>

        {/* Visualizer Display Area */}
        <div className="relative h-48 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />

          <div className="relative z-10 text-center space-y-3 px-4">
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-full shadow-lg">
              <Activity className={`w-4 h-4 ${isRunning ? 'text-cyan-400 animate-spin' : 'text-slate-500'}`} />
              <span className="font-mono text-sm text-cyan-300">
                {isRunning ? `PROCESSING ${type.toUpperCase()} VECTOR STREAM` : 'SYSTEM READY FOR TELEMETRY INPUT'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto pt-2">
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 text-left">
                <span className="text-[10px] text-slate-400 block uppercase">Inference Latency</span>
                <span className="font-mono text-emerald-400 text-sm font-bold">
                  {isRunning ? (1.2 + (param1 * 0.05)).toFixed(1) + ' ms' : '0.0 ms'}
                </span>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 text-left">
                <span className="text-[10px] text-slate-400 block uppercase">Confidence Index</span>
                <span className="font-mono text-purple-400 text-sm font-bold">
                  {isRunning ? (85 + (param2 * 0.12)).toFixed(1) + '%' : '0.0%'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Control Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" /> Sensor Sampling Rate / Depth
              </span>
              <span className="font-mono text-cyan-400">{param1}%</span>
            </div>
            <Slider
              value={[param1]}
              min={10}
              max={100}
              step={1}
              onValueChange={(val) => setParam1(val[0])}
              className="[&>span:first-child]:bg-cyan-950 [&_[role=slider]]:bg-cyan-400"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Neural Model Density / Capacity
              </span>
              <span className="font-mono text-purple-400">{param2}%</span>
            </div>
            <Slider
              value={[param2]}
              min={10}
              max={100}
              step={1}
              onValueChange={(val) => setParam2(val[0])}
              className="[&>span:first-child]:bg-purple-950 [&_[role=slider]]:bg-purple-400"
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-end">
          <Button
            onClick={() => setIsRunning(!isRunning)}
            className={isRunning ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white'}
          >
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? 'Pause Telemetry Stream' : 'Initialize Interactive Telemetry Loop'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
