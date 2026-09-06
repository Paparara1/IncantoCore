# INCANTO — Deep-Tech Technology Exploration & Asset Platform

**INCANTO** is a production-ready **Deep-Tech Technology Exploration Lab & Technology Asset Platform** built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Web Audio / WebGL Canvas**.

It serves as a modular ecosystem connecting neural signal processing, biomimetic AI, spatial intent interpretation, and physical-world actuation across 10 structured R&D technology assets.

---

## 🚀 Key Platform Architecture

### 1. Technology Asset Registry (`/explorations` & `/registry`)
Interactive catalog supporting real-time text search, domain category filters, status filters, and TRL filters.

Exposes 10 modular technology assets:
1. **NeuroAI** (`/explorations/neuroai`) — Spiking Neural Networks & Neuromorphic Compute
2. **NeuroMusic** (`/explorations/neuromusic`) — Real-time Generative Soundscapes & Synthetic EEG Audio
3. **NeuroLight** (`/explorations/neurolight`) — Biometric Lighting & Photonic Entrainment
4. **Brain-to-World** (`/explorations/brain-to-world`) — Direct Spatial Intent & Teleoperation Interfaces
5. **AI Robotics** (`/explorations/ai-robotics`) — Embodied Vision-Language-Action Robotics Control
6. **Machine Perception** (`/explorations/machine-perception`) — Multi-Spectral Sensing & Event Camera Point Clouds
7. **Edge Intelligence** (`/explorations/edge-intelligence`) — Sub-bit Quantized TinyML Microcontroller Engine
8. **Immersive AI** (`/explorations/immersive-ai`) — Affective Spatial 3D Virtual World Rendering
9. **Neuro-Smart Home** (`/explorations/neuro-smart-home`) — Contactless Micro-Doppler Radar Smart Habitat OS
10. **Assistive Intelligence** (`/explorations/assistive-intelligence`) — Intent-Predictive Adaptive Speech & Gaze AAC

---

### 2. NeuroMusic Reference Demonstrator
Live interactive lab operating on:
$$\text{Synthetic EEG} \rightarrow \text{Signal Bands (Alpha, Beta, Theta)} \rightarrow \text{Feature Extraction} \rightarrow \text{Web Audio API} \rightarrow \text{Photonic RGB Visuals}$$

- **Signal Oscilloscope:** Real-time animated canvas waveform visualizer.
- **Derived Metrics:** Focus Index, Relaxation Score, Spectral Entropy.
- **Generative Audio:** Web Audio API synth graph modulated in real time by neural frequency band power.
- **Safety Label:** Explicitly labeled as **Synthetic EEG / Experimental Simulation** (hardware-agnostic architecture ready for OpenBCI, Muse, and Neury stream integration).

---

### 3. 7-Layer Technology Map (`/technology-map`)
Visual architecture flow demonstrating multi-layer integration across all 10 assets:

$$\text{Signals / Sensors} \rightarrow \text{Signal Processing} \rightarrow \text{AI / ML / Agents} \rightarrow \text{Intent / Interpretation} \rightarrow \text{Interaction} \rightarrow \text{IoT / Robotics / XR} \rightarrow \text{Experience / Physical World}$$

---

## 🛠 Local Developer Setup

### Prerequisites
- Node.js >= 18.x
- pnpm >= 8.x

### Installation & Development
```bash
# Clone repository
git clone https://github.com/Paparara1/IncantoCore.git
cd IncantoCore

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Validation Commands

All build and validation steps run strictly with zero type or build error bypasses:

```bash
# 1. TypeScript Strict Typecheck
pnpm exec tsc --noEmit

# 2. ESLint Code Linting
pnpm run lint

# 3. Vitest Unit Test Suite
pnpm test

# 4. Next.js Production Build
pnpm build
```

---

## ☁️ Vercel Deployment

The platform is fully deployable as a standard Next.js application on Vercel:
- **Framework:** Next.js
- **Build Command:** `next build`
- **Output Directory:** `.next`
- Dynamic routes (`/explorations/[slug]`) and static route aliases pre-render properly for direct refresh support without 404s.

---

## 🔒 Security & Secrets
No secrets or `.env` credentials are committed. `.gitignore` safely ignores all environment variables (`.env*.local`) and build outputs (`.next/`, `node_modules/`, `build/`).

---

## 📝 License
© INCANTO Deep-Tech Technology Platform. Proprietary & Confidential.
