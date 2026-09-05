'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EXPLORATIONS } from '@/lib/data/explorations';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Radio, Activity, Cpu, Brain, Hand, Bot, Globe, ArrowDown, ArrowUpRight, CheckCircle } from 'lucide-react';

const MAP_LAYERS = [
  {
    id: 'Signals / Sensors',
    name: '1. Signals / Sensors',
    icon: Radio,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/50',
    bgColor: 'bg-cyan-950/40',
    description: 'Raw physiological, photonic, multi-spectral, and physical environmental telemetry streams.'
  },
  {
    id: 'Signal Processing',
    name: '2. Signal Processing',
    icon: Activity,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/50',
    bgColor: 'bg-emerald-950/40',
    description: 'Noise filtering, spectral FFT extraction, spike encoding, and micro-Doppler radar decomposition.'
  },
  {
    id: 'AI / ML / Agents',
    name: '3. AI / ML / Agents',
    icon: Cpu,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/50',
    bgColor: 'bg-purple-950/40',
    description: 'Neuromorphic spike networks, quantized TinyML edge compilation, and multi-modal transformers.'
  },
  {
    id: 'Intent / Interpretation',
    name: '4. Intent / Interpretation',
    icon: Brain,
    color: 'text-pink-400',
    borderColor: 'border-pink-500/50',
    bgColor: 'bg-pink-950/40',
    description: 'Cognitive state mapping, SSVEP spatial target selection, and affective valence/arousal scoring.'
  },
  {
    id: 'Interaction',
    name: '5. Interaction',
    icon: Hand,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/50',
    bgColor: 'bg-amber-950/40',
    description: 'Parametric spatial controllers, eye-gaze predictive AAC, and neuro-adaptive UI/UX.'
  },
  {
    id: 'IoT / Robotics / XR',
    name: '6. IoT / Robotics / XR',
    icon: Bot,
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/50',
    bgColor: 'bg-indigo-950/40',
    description: 'ROS2 robotics kinematic control, Matter smart habitat protocols, and WebGPU spatial rendering.'
  },
  {
    id: 'Experience / Physical World',
    name: '7. Experience / Physical World',
    icon: Globe,
    color: 'text-teal-400',
    borderColor: 'border-teal-500/50',
    bgColor: 'bg-teal-950/40',
    description: 'Closed-loop generative bio-audio soundscapes, photonic entrainment lighting, and physical robotic actuation.'
  }
] as const;

export function TechnologyMap() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [activeAssetSlug, setActiveAssetSlug] = useState<string | null>(null);

  // Determine connected explorations for highlighted layer
  const connectedExplorations = EXPLORATIONS.filter((asset) => {
    if (activeLayer) {
      return asset.techMapLayers.includes(activeLayer as unknown as typeof asset.techMapLayers[number]);
    }
    if (activeAssetSlug) {
      return asset.slug === activeAssetSlug;
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <Card className="bg-slate-900/90 border-slate-800 shadow-xl backdrop-blur">
        <CardContent className="p-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white font-sans flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                INCANTO Multi-Layer Architecture Map
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Demonstrating that INCANTO is a cohesive ecosystem of interconnected modular assets rather than isolated projects.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={activeLayer === null && activeAssetSlug === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => { setActiveLayer(null); setActiveAssetSlug(null); }}
                className="text-xs border-slate-700"
              >
                Show All Connections
              </Button>
            </div>
          </div>

          {/* Quick Technology Pill Selector */}
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase block mb-2">Filter Connections by Asset:</span>
            <div className="flex flex-wrap gap-2">
              {EXPLORATIONS.map((asset) => (
                <button
                  key={asset.slug}
                  onClick={() => {
                    setActiveAssetSlug(activeAssetSlug === asset.slug ? null : asset.slug);
                    setActiveLayer(null);
                  }}
                  className={`text-xs px-3 py-1 rounded-full font-mono transition-all border ${
                    activeAssetSlug === asset.slug
                      ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {asset.name}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Architecture Flow Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left: 7 Architecture Layers Stack */}
        <div className="lg:col-span-7 space-y-3">
          {MAP_LAYERS.map((layer, idx) => {
            const Icon = layer.icon;
            const isHighlighted = activeLayer === layer.id || (activeAssetSlug && EXPLORATIONS.find(a => a.slug === activeAssetSlug)?.techMapLayers.includes(layer.id as unknown as typeof EXPLORATIONS[number]['techMapLayers'][number]));

            return (
              <React.Fragment key={layer.id}>
                <div
                  onClick={() => {
                    setActiveLayer(activeLayer === layer.id ? null : layer.id);
                    setActiveAssetSlug(null);
                  }}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer shadow-lg relative overflow-hidden group ${
                    isHighlighted
                      ? `${layer.bgColor} ${layer.borderColor} ring-2 ring-cyan-400/50 scale-[1.01]`
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`p-2 rounded-lg bg-slate-950 ${layer.color} border border-slate-800`}>
                        <Icon className="w-5 h-5" />
                      </span>
                      <div>
                        <h4 className={`text-base font-bold ${isHighlighted ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                          {layer.name}
                        </h4>
                        <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                          {layer.description}
                        </p>
                      </div>
                    </div>

                    <Badge variant="outline" className={`shrink-0 font-mono text-[10px] ${layer.borderColor} ${layer.color}`}>
                      LAYER {idx + 1}
                    </Badge>
                  </div>

                  {/* Connected Asset Badges */}
                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-mono text-slate-400 mr-1">Assets:</span>
                    {EXPLORATIONS.filter((exp) => exp.techMapLayers.includes(layer.id as unknown as typeof exp.techMapLayers[number])).map((exp) => (
                      <span
                        key={exp.slug}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          activeAssetSlug === exp.slug
                            ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        {exp.name}
                      </span>
                    ))}
                  </div>
                </div>

                {idx < MAP_LAYERS.length - 1 && (
                  <div className="flex justify-center my-1">
                    <ArrowDown className="w-4 h-4 text-slate-600 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right: Connected Explorations Matrix */}
        <div className="lg:col-span-5 space-y-4 sticky top-6">
          <Card className="bg-slate-900/90 border-slate-800 shadow-2xl backdrop-blur">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  Mapped Ecosystem Assets ({connectedExplorations.length})
                </CardTitle>
                {(activeLayer || activeAssetSlug) && (
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                    {activeLayer ? `Layer: ${activeLayer}` : `Asset: ${activeAssetSlug}`}
                  </span>
                )}
              </div>
              <CardDescription className="text-xs text-slate-400">
                Click any layer on the left or asset on top to inspect architectural integration vectors.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 max-h-[70vh] overflow-y-auto pr-1">
              {connectedExplorations.map((asset) => (
                <div
                  key={asset.slug}
                  className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/50 transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-200 group-hover:text-cyan-300">
                      {asset.name}
                    </span>
                    <Badge variant="outline" className="border-slate-700 text-slate-400 font-mono text-[10px]">
                      TRL {asset.trl}
                    </Badge>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2">
                    {asset.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-slate-900 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">
                      {asset.category}
                    </span>
                    <Link href={`/explorations/${asset.slug}`}>
                      <Button variant="ghost" size="sm" className="h-6 text-[11px] text-cyan-400 hover:text-cyan-300 px-2">
                        Inspect Asset <ArrowUpRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
