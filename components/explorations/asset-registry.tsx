'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { EXPLORATIONS, ExplorationAsset } from '@/lib/data/explorations';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Search, Filter, Layers, ArrowUpRight, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export function TechnologyAssetRegistry() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedTrl, setSelectedTrl] = useState<string>('All');

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    EXPLORATIONS.forEach((exp) => set.add(exp.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Filtered Assets
  const filteredAssets = useMemo(() => {
    return EXPLORATIONS.filter((asset) => {
      const matchesSearch =
        asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asset.technologyStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        asset.assetLayer.targetIndustries.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || asset.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || asset.status === selectedStatus;
      const matchesTrl = selectedTrl === 'All' || asset.trl.toString() === selectedTrl;

      return matchesSearch && matchesCategory && matchesStatus && matchesTrl;
    });
  }, [searchQuery, selectedCategory, selectedStatus, selectedTrl]);

  return (
    <div className="space-y-8">
      {/* Registry Controls: Search and Filters */}
      <Card className="bg-slate-900/90 border-slate-800 shadow-2xl backdrop-blur">
        <CardContent className="p-6 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              type="text"
              placeholder="Search technology assets by keyword, stack, industry, or neural domain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus:border-cyan-500 h-11"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-slate-400 font-mono uppercase">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span>Filters:</span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-slate-500 text-[11px] mr-1">Domain:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Status & TRL Dropdowns */}
            <div className="flex items-center gap-3 ml-auto">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-500 text-[11px]">Status:</span>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-lg px-2.5 py-1 focus:outline-none focus:border-cyan-500"
                >
                  <option value="All">All Statuses</option>
                  <option value="Active R&D">Active R&D</option>
                  <option value="Proof of Concept">Proof of Concept</option>
                  <option value="Prototype">Prototype</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-500 text-[11px]">TRL Level:</span>
                <select
                  value={selectedTrl}
                  onChange={(e) => setSelectedTrl(e.target.value)}
                  className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-lg px-2.5 py-1 focus:outline-none focus:border-cyan-500"
                >
                  <option value="All">All TRLs</option>
                  <option value="3">TRL 3</option>
                  <option value="4">TRL 4</option>
                  <option value="5">TRL 5</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Asset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => (
          <Card
            key={asset.slug}
            className="bg-slate-900/80 border-slate-800 hover:border-cyan-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2 mb-2">
                <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-950/40 font-mono text-[11px]">
                  {asset.category}
                </Badge>
                <Badge className="bg-slate-800 text-slate-300 border-slate-700 font-mono text-[10px]">
                  TRL {asset.trl}
                </Badge>
              </div>

              <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                <span>{asset.name}</span>
                <span className="font-mono text-xs font-normal text-slate-500">#{asset.slug}</span>
              </CardTitle>

              <CardDescription className="text-slate-300 text-xs leading-relaxed line-clamp-2 pt-1">
                {asset.shortDescription}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 pt-0">
              {/* TRL Progress indicator */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>Technology Readiness</span>
                  <span className="text-cyan-400 font-bold">{asset.status}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-300"
                    style={{ width: `${(asset.trl / 9) * 100}%` }}
                  />
                </div>
              </div>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1">
                {asset.technologyStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800/80 rounded px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
                {asset.technologyStack.length > 4 && (
                  <span className="text-[10px] font-mono text-slate-500 self-center">
                    +{asset.technologyStack.length - 4}
                  </span>
                )}
              </div>

              {/* CTA Link */}
              <div className="pt-3 border-t border-slate-800/80">
                <Link href={`/explorations/${asset.slug}`} className="block">
                  <Button
                    className="w-full bg-slate-950 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 border border-slate-800 hover:border-cyan-400 transition-all text-xs font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-cyan-500/10"
                  >
                    <span>Open Exploration</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAssets.length === 0 && (
        <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800 space-y-3">
          <p className="text-slate-400 text-sm">No technology assets matched your current search filters.</p>
          <Button variant="outline" size="sm" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedStatus('All'); setSelectedTrl('All'); }}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
