import React from 'react';
import { Metadata } from 'next';
import { TechnologyAssetRegistry } from '@/components/explorations/asset-registry';
import { Badge } from '@/components/ui/badge';
import { Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology Asset Registry | INCANTO Deep-Tech Platform',
  description: 'Explore the 10 core modular technology assets, TRL metrics, IP specs, and interactive R&D demonstrators of the INCANTO ecosystem.',
};

export default function AssetRegistryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-slate-950 py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Header Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-cyan-500/40 text-cyan-300 bg-cyan-950/60 font-mono text-xs">
              Deep-Tech Asset Catalog
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-sans flex items-center gap-3">
            <Layers className="w-10 h-10 text-cyan-400" />
            Technology Asset Registry
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Searchable, modular registry of INCANTO technology assets spanning neural systems, biomimetic compute, multi-spectral vision, and embodied robotics. Filter by domain, TRL level, or release status.
          </p>
        </div>

        {/* Registry Component */}
        <TechnologyAssetRegistry />

      </div>
    </div>
  );
}
