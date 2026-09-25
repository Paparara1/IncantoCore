# INCANTO — 13 Offline AI / BCI / Biometric PWA Prototypes

**Turnkey AI OS — Full Commercial Buyout Ready**

A complete bundle of 13 working PWA applications (100% offline, full source code) across SaaS / Web3 / AI / BCI / eIDAS 2.0.

**Contact:** mepaulaj@gmail.com | [LinkedIn](https://www.linkedin.com/in/paulina-jakubowska-65712b163)

---

## 📋 Table of Contents

1. [What's Included](#whats-included)
2. [System Requirements](#system-requirements)
3. [Quick Start (No Install)](#quick-start-no-install)
4. [Detailed Installation](#detailed-installation)
5. [Configuration](#configuration)
6. [Deployment](#deployment)
7. [Project-by-Project Guide](#project-by-project-guide)
8. [Tech Stack](#tech-stack)
9. [Licensing](#licensing)
10. [Support](#support)

---

## 📦 What's Included

The bundle contains **13 independent projects**:

| # | Project | Type | Tech |
|---|---------|------|------|
| 1 | **ThinkLink BCI** | EEG + haptic, offline PWA | TensorFlow.js |
| 2 | **Perceptio** | Neurofeedback visualization | Canvas, JS |
| 3 | **NeuroMusic** | EEG → MIDI brain music | Web Audio API |
| 4 | **IrisVerify ID** | Iris + ZK-proof KYC (eIDAS 2.0) | MediaPipe, TFJS, OpenCV.js |
| 5 | **Quantum Vault / IrisVault** | Biometric wallet, quantum-resistant | Web Crypto API |
| 6 | **Kobalt AI Builder** | Offline Lovable/v0 clone | HTML, localStorage |
| 7 | **Vibe Coder** | AI code generator PWA | OpenAI / Mistral |
| 8 | **Kobalt Automation** | Workflow automation | JS, API |
| 9 | **ASI Bridge** | Agent orchestration | AI agents, MCP |
| 10 | **CRM AI + Asystent Sprzedaży** | LinkedIn + GitHub automation | JS, localStorage |
| 11 | **45 Mini SaaS HTML** | Bundle of 45 micro-apps | HTML, CSS, JS |
| 12 | **ClusterLaunch** | K3s + Grafana AWS Kit | Terraform, AWS |
| 13 | **INCANTO OS** | Bundle of all as one system | Combined |

---

## 💻 System Requirements

### Minimum (for PWA projects: 1–11, 13)
- **Browser:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Internet:** Required only for first load (PWA caching allows offline use after)
- **Storage:** ~50 MB for PWA cache

### Recommended (for AI/Web3 projects)
- **Node.js:** 18+ (for local dev servers)
- **API keys:** OpenAI / Anthropic / Mistral (for AI features)
- **Crypto wallet:** Phantom or MetaMask (for Web3 features)

### For ClusterLaunch (#12)
- **AWS account** (free tier works)
- **Terraform:** 1.5+
- **AWS CLI:** configured with credentials
- **Domain:** optional (for public demo)

---

## ⚡ Quick Start (No Install)

Most projects are **standalone HTML files** — no build, no install, no server.

### Method 1: Open in browser
1. Download the repository as ZIP
2. Unzip to any folder
3. Open `index.html` in Chrome / Firefox / Safari
4. All PWA projects work immediately

### Method 2: Local server (recommended for AI features)
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .
```
Then open `http://localhost:8000` in your browser.

---

## 🔧 Detailed Installation

### Step 1: Clone or download
```bash
git clone https://github.com/Paparara1/Incanto.git
cd Incanto
```

### Step 2: Install Node.js dependencies
```bash
# Check Node.js version
node --version # must be 18+

# Install dependencies
pnpm install
```

### Step 3: Configure environment variables
Create a `.env` file in the root:
```env
# AI Providers (required for Kobalt AI Builder, Vibe Coder, ASI Bridge)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
MISTRAL_API_KEY=...

# Supabase
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_PUBLISHABLE_KEY=...

# Replicate
REPLICATE_API_TOKEN=r8_...

# Web3
TON_API_KEY=...
```

---

## 📜 Licensing

Options include Commercial Single License, Bundle License, and Full IP Buyout (€75,000 + 10% royalties / flexible transfer). See `LICENSE.txt` for details.

© 2026 Paulina Jakubowska · INCANTO
