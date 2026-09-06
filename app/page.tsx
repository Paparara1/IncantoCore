import React from 'react';
import Link from 'next/link';
import { Sparkles, MessageSquare, Layers, Network, ArrowUpRight, Cpu, Activity, Radio, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { EXPLORATIONS } from '@/lib/data/explorations';

export default function Home() {
  const featuredExplorations = EXPLORATIONS.slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">

        {/* Hero Section: Preserving original Inkanto Personal AI CTA alongside Platform overview */}
        <div className="text-center space-y-6 pt-6 max-w-4xl mx-auto">
          {/* Logo Circle with Sparkles */}
          <div className="relative inline-block mb-2">
            <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-2xl scale-125" />
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500 via-purple-600 to-emerald-500 p-1 shadow-2xl shadow-cyan-500/20">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Badge variant="outline" className="border-cyan-500/40 text-cyan-300 bg-cyan-950/60 font-mono text-xs uppercase tracking-wider">
              Deep-Tech Technology Exploration Platform
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
              INCANTO Ecosystem
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 italic font-serif">
              Twój osobisty AI & Deep-Tech Asset Platform
            </p>
          </div>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {"Hej Paula 👋 Witaj w ekosystemie INCANTO. Znajdziesz tu zarówno swojego osobistego asystenta AI, jak i laboratorium 10 modułowych technologii Deep-Tech."}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Base44 Superagent Link (Preserved original functionality) */}
            <a
              href="https://app.base44.com/superagent/69b21b362d0b95bf51062737"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold text-base shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5 text-purple-200" />
              <span>Porozmawiaj z Inkanto</span>
              <ArrowUpRight className="w-4 h-4 text-purple-200" />
            </a>

            {/* Platform Explorations Link */}
            <Link href="/explorations" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 hover:border-cyan-500/50 font-semibold text-base rounded-2xl px-7 py-3.5 shadow-lg"
              >
                <Layers className="w-5 h-5 mr-2 text-cyan-400" />
                Otwórz Lab 10 Technologii
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured Technology Asset Grid */}
        <div className="space-y-6 pt-6 border-t border-slate-900">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1">
                <Radio className="w-4 h-4" />
                <span>Deep-Tech Explorations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                Technology Exploration Assets
              </h2>
            </div>
            <Link href="/explorations">
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-slate-900 text-xs font-mono">
                View All 10 Assets <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredExplorations.map((asset) => (
              <Card
                key={asset.slug}
                className="bg-slate-900/80 border-slate-800 hover:border-cyan-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-950/40 font-mono text-[11px]">
                      {asset.category}
                    </Badge>
                    <Badge className="bg-slate-800 text-slate-300 border-slate-700 font-mono text-[10px]">
                      TRL {asset.trl}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {asset.name}
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                    {asset.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">{asset.status}</span>
                    <Link href={`/explorations/${asset.slug}`}>
                      <Button size="sm" variant="ghost" className="h-7 text-xs text-cyan-400 hover:text-cyan-300 p-0 font-semibold">
                        Inspect Asset →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Architecture Map Section */}
        <Card className="bg-slate-900/90 border-slate-800 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-xl">
              <Badge variant="outline" className="border-purple-500/40 text-purple-300 bg-purple-950/60 font-mono text-xs">
                7-Layer Architecture
              </Badge>
              <h3 className="text-2xl font-bold text-white font-sans">
                Unified Ecosystem Technology Map
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Understand how INCANTO flows seamlessly from raw sensor signals to AI agent interpretation, spatial interaction, and physical world actuation.
              </p>
            </div>
            <Link href="/technology-map">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 shrink-0">
                <Network className="w-4 h-4 mr-2" />
                Explore Technology Map
              </Button>
            </Link>
          </div>
        </Card>

      </div>
    </main>
  );
}
