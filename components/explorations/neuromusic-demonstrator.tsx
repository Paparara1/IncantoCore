'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RefreshCw, Volume2, VolumeX, Cpu, Activity, Zap, Sparkles, AlertTriangle, Radio } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

export function NeuroMusicDemonstrator() {
  // EEG Simulation parameters
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [simulationPreset, setSimulationPreset] = useState<'deep_focus' | 'meditation' | 'high_arousal' | 'custom'>('deep_focus');

  // Frequency bands (0-100 normalized power)
  const [alpha, setAlpha] = useState(65); // 8-12 Hz
  const [beta, setBeta] = useState(40);  // 13-30 Hz
  const [theta, setTheta] = useState(25); // 4-8 Hz

  // Derived metrics
  const focusIndex = Math.round(((beta * 1.5) / (alpha + theta + 1)) * 50);
  const relaxationScore = Math.round(((alpha * 1.8 + theta * 1.2) / (beta + 1)) * 25);
  const spectralEntropy = (0.3 + (alpha * 0.003) + (beta * 0.002) + (theta * 0.0025)).toFixed(2);

  // Web Audio Context reference
  const audioCtxRef = useRef<AudioContext | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // Canvas animation reference
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Apply preset values
  const applyPreset = (preset: 'deep_focus' | 'meditation' | 'high_arousal') => {
    setSimulationPreset(preset);
    if (preset === 'deep_focus') {
      setAlpha(50);
      setBeta(85);
      setTheta(20);
    } else if (preset === 'meditation') {
      setAlpha(90);
      setBeta(15);
      setTheta(75);
    } else if (preset === 'high_arousal') {
      setAlpha(25);
      setBeta(95);
      setTheta(45);
    }
  };

  // Initialize & update Web Audio API
  useEffect(() => {
    if (isPlaying) {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Create audio nodes
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc2.type = 'triangle';
        filter.type = 'lowpass';

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        osc1Ref.current = osc1;
        osc2Ref.current = osc2;
        filterRef.current = filter;
        gainRef.current = gain;
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      // Update audio parameters based on Alpha/Beta/Theta
      const baseFreq = 110 + (beta * 2.5); // Beta drives pitch height
      const harmonicFreq = baseFreq * (1 + alpha * 0.005); // Alpha adds pitch depth
      const filterCutoff = 200 + (focusIndex * 35) + (beta * 20); // Focus opens filter cutoff
      const volume = isAudioMuted ? 0 : 0.15;

      if (osc1Ref.current && audioCtxRef.current) {
        osc1Ref.current.frequency.setTargetAtTime(baseFreq, audioCtxRef.current.currentTime, 0.1);
      }
      if (osc2Ref.current && audioCtxRef.current) {
        osc2Ref.current.frequency.setTargetAtTime(harmonicFreq, audioCtxRef.current.currentTime, 0.1);
      }
      if (filterRef.current && audioCtxRef.current) {
        filterRef.current.frequency.setTargetAtTime(filterCutoff, audioCtxRef.current.currentTime, 0.1);
      }
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.setTargetAtTime(volume, audioCtxRef.current.currentTime, 0.1);
      }
    } else {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.1);
      }
    }
  }, [isPlaying, alpha, beta, theta, focusIndex, isAudioMuted]);

  // Clean up AudioContext on unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  // Compute RGB values from EEG states
  const red = Math.round(Math.min(255, (beta / 100) * 255));
  const green = Math.round(Math.min(255, (alpha / 100) * 255));
  const blue = Math.round(Math.min(255, (theta / 100) * 255));
  const rgbString = `rgb(${red}, ${green}, ${blue})`;

  // Canvas wave visualization loop
  const drawWaveform = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let step = 0;
    const render = () => {
      step += 0.05;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw Alpha Wave (8-12Hz simulated) - Green
      ctx.beginPath();
      ctx.strokeStyle = `rgba(34, 197, 94, ${isPlaying ? 0.8 : 0.3})`;
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x++) {
        const freq = 0.03;
        const amp = (alpha / 100) * 20;
        const y = height / 2 - 25 + Math.sin(x * freq + step * 2) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw Beta Wave (13-30Hz simulated) - Red/Cyan
      ctx.beginPath();
      ctx.strokeStyle = `rgba(239, 68, 68, ${isPlaying ? 0.8 : 0.3})`;
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x++) {
        const freq = 0.08;
        const amp = (beta / 100) * 18;
        const y = height / 2 + Math.sin(x * freq + step * 4) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw Theta Wave (4-8Hz simulated) - Blue/Purple
      ctx.beginPath();
      ctx.strokeStyle = `rgba(59, 130, 246, ${isPlaying ? 0.8 : 0.3})`;
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x++) {
        const freq = 0.015;
        const amp = (theta / 100) * 22;
        const y = height / 2 + 25 + Math.sin(x * freq + step * 1.2) * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      if (isPlaying) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    render();
  }, [alpha, beta, theta, isPlaying]);

  useEffect(() => {
    drawWaveform();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [drawWaveform]);

  return (
    <div className="space-y-6 text-white">
      {/* Synthetic EEG Data Disclaimer */}
      <div className="bg-amber-950/40 border border-amber-500/40 rounded-xl p-4 flex items-start gap-3 shadow-lg">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="text-sm">
          <span className="font-semibold text-amber-300">Data Source Label: </span>
          <span className="text-amber-200/90">
            Synthetic EEG / Experimental Simulation. Current demo synthesizes neural frequency band shifts for parameter testing.
            Architecture is hardware-agnostic and ready for live OpenBCI, Muse, and Neury electrode stream ingestion.
          </span>
        </div>
      </div>

      {/* Main Interactive Workstation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Column: Wave Controls & Band Sliders */}
        <Card className="lg:col-span-5 bg-slate-900/80 border-slate-800 shadow-xl backdrop-blur">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold flex items-center gap-2 text-cyan-400">
                <Cpu className="w-5 h-5 text-cyan-400" />
                Synthetic EEG Signal Synthesizer
              </CardTitle>
              <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-950/50">
                Simulated 10-20 EEG
              </Badge>
            </div>
            <CardDescription className="text-slate-400 text-xs">
              Modulate raw brainwave frequency bands to drive generative sound synthesis and photonic RGB rendering.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">
            {/* Simulation Presets */}
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Neural State Presets
              </label>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  size="sm"
                  variant={simulationPreset === 'deep_focus' ? 'default' : 'outline'}
                  onClick={() => applyPreset('deep_focus')}
                  className={simulationPreset === 'deep_focus' ? 'bg-cyan-600 hover:bg-cyan-500 text-white' : 'border-slate-700 text-slate-300'}
                >
                  Deep Focus
                </Button>
                <Button
                  size="sm"
                  variant={simulationPreset === 'meditation' ? 'default' : 'outline'}
                  onClick={() => applyPreset('meditation')}
                  className={simulationPreset === 'meditation' ? 'bg-cyan-600 hover:bg-cyan-500 text-white' : 'border-slate-700 text-slate-300'}
                >
                  Meditation
                </Button>
                <Button
                  size="sm"
                  variant={simulationPreset === 'high_arousal' ? 'default' : 'outline'}
                  onClick={() => applyPreset('high_arousal')}
                  className={simulationPreset === 'high_arousal' ? 'bg-cyan-600 hover:bg-cyan-500 text-white' : 'border-slate-700 text-slate-300'}
                >
                  High Arousal
                </Button>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-4 pt-2">
              {/* Alpha Band */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2 text-emerald-400 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    Alpha Band (8–12 Hz)
                  </span>
                  <span className="font-mono text-xs text-slate-300">{alpha}% Power</span>
                </div>
                <Slider
                  value={[alpha]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(val) => {
                    setAlpha(val[0]);
                    setSimulationPreset('custom');
                  }}
                  className="[&>span:first-child]:bg-emerald-950 [&_[role=slider]]:bg-emerald-400"
                />
                <p className="text-[11px] text-slate-400">Associated with relaxed wakefulness, calm focus, and creative flow.</p>
              </div>

              {/* Beta Band */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2 text-red-400 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                    Beta Band (13–30 Hz)
                  </span>
                  <span className="font-mono text-xs text-slate-300">{beta}% Power</span>
                </div>
                <Slider
                  value={[beta]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(val) => {
                    setBeta(val[0]);
                    setSimulationPreset('custom');
                  }}
                  className="[&>span:first-child]:bg-red-950 [&_[role=slider]]:bg-red-400"
                />
                <p className="text-[11px] text-slate-400">Reflects active problem solving, logical processing, and high alertness.</p>
              </div>

              {/* Theta Band */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2 text-blue-400 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                    Theta Band (4–8 Hz)
                  </span>
                  <span className="font-mono text-xs text-slate-300">{theta}% Power</span>
                </div>
                <Slider
                  value={[theta]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(val) => {
                    setTheta(val[0]);
                    setSimulationPreset('custom');
                  }}
                  className="[&>span:first-child]:bg-blue-950 [&_[role=slider]]:bg-blue-400"
                />
                <p className="text-[11px] text-slate-400">Linked to deep intuition, memory consolidation, and light sleep states.</p>
              </div>
            </div>

            {/* Playback & Audio Controls */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                className={isPlaying ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-emerald-600 hover:bg-emerald-500 text-white'}
              >
                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isPlaying ? 'Pause Neural Feed' : 'Start Neural Engine'}
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsAudioMuted(!isAudioMuted)}
                className="border-slate-700 text-slate-300 hover:bg-slate-800"
                title={isAudioMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Column: Dynamic Visualizer & Soundscape Matrix */}
        <div className="lg:col-span-7 space-y-6">
          {/* Signal Spectrum Oscilloscope */}
          <Card className="bg-slate-900/80 border-slate-800 shadow-xl backdrop-blur">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-bold text-slate-200 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  Real-time Neural Wave Oscilloscope
                </CardTitle>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Radio className={`w-3.5 h-3.5 ${isPlaying ? 'text-emerald-400 animate-pulse' : 'text-slate-600'}`} />
                  <span>{isPlaying ? 'LIVE STREAMING' : 'STANDBY'}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950 p-2">
                <canvas ref={canvasRef} width={600} height={160} className="w-full h-40 block" />
                <div className="absolute top-3 right-3 flex items-center gap-3 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800 text-[11px]">
                  <span className="flex items-center gap-1 text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Alpha</span>
                  <span className="flex items-center gap-1 text-red-400"><span className="w-2 h-2 rounded-full bg-red-500" /> Beta</span>
                  <span className="flex items-center gap-1 text-blue-400"><span className="w-2 h-2 rounded-full bg-blue-500" /> Theta</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Derived Features & Photonic RGB Environment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Derived Neural Metrics */}
            <Card className="bg-slate-900/80 border-slate-800 shadow-xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold text-slate-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  Feature Extraction Engine
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Focus Index (Beta/Alpha+Theta)</span>
                    <span className="font-mono text-cyan-300">{focusIndex} / 100</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 transition-all duration-300" style={{ width: `${Math.min(100, focusIndex)}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Relaxation Score (Alpha+Theta/Beta)</span>
                    <span className="font-mono text-emerald-300">{relaxationScore} / 100</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 transition-all duration-300" style={{ width: `${Math.min(100, relaxationScore)}%` }} />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Spectral Entropy Index</span>
                  <span className="font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/50">
                    {spectralEntropy} H(f)
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Photonic RGB Ambient Light Visualizer */}
            <Card className="bg-slate-900/80 border-slate-800 shadow-xl relative overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold text-slate-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Photonic RGB Atmosphere
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-xl border-2 border-slate-700 shadow-2xl transition-all duration-300 shrink-0"
                    style={{
                      backgroundColor: rgbString,
                      boxShadow: `0 0 25px ${rgbString}`
                    }}
                  />
                  <div className="space-y-1 text-xs">
                    <div className="font-mono text-slate-300">
                      R: <span className="text-red-400">{red}</span> (Beta) | G: <span className="text-emerald-400">{green}</span> (Alpha) | B: <span className="text-blue-400">{blue}</span> (Theta)
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Maps continuous spectral energy directly to dynamic ambient photon wave functions for adaptive physical room lighting.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Audio Frequency Output:</span>
                  <span className="font-mono text-cyan-300">{Math.round(110 + (beta * 2.5))} Hz</span>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </div>
  );
}
