"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { ContactModal } from "./contact-modal";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Technology Portfolio", href: "/technology" },
  { label: "Technology Map", href: "/map" },
  { label: "Labs & Demos", href: "/labs" },
  { label: "Platform", href: "/platform" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Developer", href: "/developer" },
  { label: "Licensing", href: "/licensing" },
  { label: "Strategic Partnerships", href: "/partnerships" },
  { label: "Invest / Acquire", href: "/invest-acquire" },
  { label: "Deal Room", href: "/sale-room" },
  { label: "Buyer Brief", href: "/buyer-brief" }
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm group-hover:border-cyan-400 transition-colors">
                O
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold tracking-wider text-slate-100 flex items-center gap-1.5">
                  OJJJA<span className="text-cyan-400">.XYZ</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  INCANTO HUB
                </span>
              </div>
            </Link>
            <span className="hidden xl:inline-block h-4 w-[1px] bg-slate-800"></span>
            <span className="hidden xl:inline-flex items-center gap-1 text-[11px] font-mono text-amber-400/90 bg-amber-950/40 border border-amber-800/50 px-2 py-0.5 rounded">
              <ShieldCheck className="w-3 h-3" /> Pre-Commercial Portfolio
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 overflow-x-auto py-1 text-xs font-medium text-slate-300">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2.5 py-1.5 rounded transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 font-semibold"
                      : "hover:text-cyan-300 hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button
              onClick={() => setModalOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs px-3.5 py-1.5 h-9 rounded transition-all shadow-sm shadow-cyan-500/20"
            >
              REQUEST BRIEF
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          <div className="flex lg:hidden items-center space-x-2">
            <Button
              onClick={() => setModalOpen(true)}
              size="sm"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-[11px] px-2.5 h-8"
            >
              BRIEF
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-md focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 text-sm">
            <div className="mb-3 px-2 py-1 text-[11px] font-mono text-amber-400 bg-amber-950/40 border border-amber-800/50 rounded inline-block">
              Status: Pre-commercial Portfolio
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded text-slate-300 hover:text-cyan-400 hover:bg-slate-900 ${
                    pathname === item.href ? "text-cyan-400 bg-slate-900 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-3">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-2.5 text-xs"
              >
                REQUEST TECHNOLOGY BRIEF
              </Button>
            </div>
          </div>
        )}
      </header>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultInterest="Technology Brief"
      />
    </>
  );
}
