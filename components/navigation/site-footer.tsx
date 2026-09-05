'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 py-12 text-xs">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-900 pb-8">

          {/* Left Brand Column */}
          <div className="space-y-2 max-w-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="font-extrabold text-base text-white tracking-wider">INCANTO Ecosystem</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Modular Deep-Tech R&D Platform exploring neural computing, biomimetic AI, spatial intent, and physical world embodiment.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 text-xs">
            <Link href="/explorations" className="hover:text-cyan-400 transition-colors">
              Asset Registry
            </Link>
            <Link href="/explorations/neuromusic" className="hover:text-cyan-400 transition-colors">
              NeuroMusic Reference Demo
            </Link>
            <Link href="/technology-map" className="hover:text-cyan-400 transition-colors">
              7-Layer Technology Map
            </Link>
            <a
              href="https://app.base44.com/superagent/69b21b362d0b95bf51062737"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Inkanto Agent</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} INCANTO Deep-Tech Technology Asset Platform. All rights reserved.</p>
          <p>ojjja.site · Vercel Deployable · Modular R&D Architecture</p>
        </div>
      </div>
    </footer>
  );
}
