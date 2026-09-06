import React from 'react';
import { notFound } from 'next/navigation';
import { EXPLORATIONS, getExplorationBySlug } from '@/lib/data/explorations';
import { ExplorationHero } from '@/components/explorations/exploration-hero';
import { ExplorationTechSection } from '@/components/explorations/exploration-tech-section';
import { ExplorationAssetLayer } from '@/components/explorations/exploration-asset-layer';
import { ExplorationRoadmap } from '@/components/explorations/exploration-roadmap';
import { NeuroMusicDemonstrator } from '@/components/explorations/neuromusic-demonstrator';
import { GenericDemonstrator } from '@/components/explorations/generic-demonstrator';

// Pre-generate static params for all 10 technology explorations
export function generateStaticParams() {
  return EXPLORATIONS.map((asset) => ({
    slug: asset.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ExplorationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const asset = getExplorationBySlug(slug);

  if (!asset) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500 selection:text-slate-950">
      {/* Exploration Hero Header */}
      <ExplorationHero asset={asset} />

      <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Interactive Demonstrator Section */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-2">
              <span className="w-2 h-6 rounded-full bg-cyan-400 inline-block" />
              Technology Demonstrator & Interactive Lab
            </h2>
            <span className="text-xs font-mono text-slate-400">
              SLUG: {asset.slug}
            </span>
          </div>

          {asset.slug === 'neuromusic' ? (
            <NeuroMusicDemonstrator />
          ) : (
            <GenericDemonstrator type={asset.demonstratorType} name={asset.name} />
          )}
        </section>

        {/* Technology Section: Problem, Core Tech, Architecture, Stack */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-2">
            <span className="w-2 h-6 rounded-full bg-emerald-400 inline-block" />
            Technical Architecture & Stack
          </h2>
          <ExplorationTechSection asset={asset} />
        </section>

        {/* Technology Asset Layer: IP, Commercial, Licensing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-2">
            <span className="w-2 h-6 rounded-full bg-purple-400 inline-block" />
            Deep-Tech Asset Matrix
          </h2>
          <ExplorationAssetLayer asset={asset} />
        </section>

        {/* Roadmap Pipeline */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-2">
            <span className="w-2 h-6 rounded-full bg-amber-400 inline-block" />
            R&D Milestones & Roadmap
          </h2>
          <ExplorationRoadmap roadmap={asset.roadmap} />
        </section>

      </main>
    </div>
  );
}
