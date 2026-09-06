'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, Layers, Network, Menu, X, Cpu, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Inkanto Core AI', icon: Sparkles },
    { href: '/explorations', label: 'Exploration Lab & Registry', icon: Layers },
    { href: '/explorations/neuromusic', label: 'NeuroMusic Demo', icon: Cpu },
    { href: '/technology-map', label: 'Technology Map', icon: Network },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-slate-950 fill-cyan-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white font-sans bg-gradient-to-r from-cyan-400 via-emerald-300 to-purple-400 bg-clip-text text-transparent">
              INCANTO
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase -mt-1">
              Deep-Tech Lab
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-xs font-medium gap-2 px-3 py-1.5 transition-all ${
                    isActive
                      ? 'bg-slate-900 text-cyan-400 border border-slate-800'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span>{link.label}</span>
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/explorations">
            <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20">
              <Compass className="w-3.5 h-3.5 mr-1.5" />
              Explore Assets
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-slate-900 text-cyan-400 border border-slate-800'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <Link href="/explorations" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs">
                Explore Technology Assets
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
