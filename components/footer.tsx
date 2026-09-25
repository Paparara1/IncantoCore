"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ContactModal } from "./contact-modal";
import { ShieldAlert, Mail, Layers, Award } from "lucide-react";

export function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-slate-950 border-t border-slate-900 text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                O
              </div>
              <span className="text-sm font-bold tracking-wider text-slate-100">
                OJJJA<span className="text-cyan-400">.XYZ</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-mono">
              INCANTO — DEEP-TECH TECHNOLOGY SALE, LICENSING & ACQUISITION HUB
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded inline-block">
                PERCEPTIO UT FONS INTERACTION
              </span>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              "Perception is the beginning. Intelligence interprets it. Intent gives it meaning. Interaction connects it to the world."
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> Technology Hub
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/technology" className="hover:text-cyan-400 transition-colors">
                  Technology Portfolio Registry (10 Assets)
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-cyan-400 transition-colors">
                  Interactive Technology Map (6 Layers)
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-cyan-400 transition-colors">
                  INCANTO Core Architecture
                </Link>
              </li>
              <li>
                <Link href="/labs" className="hover:text-cyan-400 transition-colors">
                  Labs & Demonstrators (NeuroMusic EEG)
                </Link>
              </li>
              <li>
                <Link href="/developer" className="hover:text-cyan-400 transition-colors">
                  Developer Ecosystem (TinyML / WebGPU)
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-cyan-400" /> Commercial Pathways
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/licensing" className="hover:text-cyan-400 transition-colors">
                  6 Commercial Pathways
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="hover:text-cyan-400 transition-colors">
                  Enterprise Solutions & Private AI
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-cyan-400 transition-colors">
                  Strategic & OEM Partnerships
                </Link>
              </li>
              <li>
                <Link href="/invest-acquire" className="hover:text-cyan-400 transition-colors">
                  Invest, Partner & Acquire Options
                </Link>
              </li>
              <li>
                <Link href="/sale-room" className="hover:text-cyan-400 transition-colors text-cyan-400/90 font-medium">
                  INCANTO Executive Buyer Deal Room
                </Link>
              </li>
              <li>
                <Link href="/buyer-brief" className="hover:text-cyan-400 transition-colors">
                  Executive Buyer Brief
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" /> Governance & Inquiry
            </h4>
            <ul className="space-y-1.5">
              <li>
                <Link href="/legal" className="hover:text-cyan-400 transition-colors">
                  IP Ownership & Due Diligence Disclaimers
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setModalOpen(true)}
                  className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1"
                >
                  <Mail className="w-3 h-3 text-cyan-400" /> Request Technology Brief
                </button>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact Commercial Team
                </Link>
              </li>
            </ul>
            <div className="pt-3">
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded text-[11px] text-slate-400 space-y-1">
                <span className="font-semibold text-slate-300 block">Status Notice:</span>
                Technology-stage / Pre-commercial portfolio. Indicative TRL numbers represent internal assessments and are subject to commercial due diligence.
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 space-y-2 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} OJJJA.XYZ / INCANTO. All rights reserved. Commercial Technology Asset Hub.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/legal" className="hover:text-slate-400">
              Legal & IP Terms
            </Link>
            <span>•</span>
            <Link href="/buyer-brief" className="hover:text-slate-400">
              Buyer Brief
            </Link>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultInterest="Technology Brief"
      />
    </>
  );
}
