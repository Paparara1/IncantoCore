# Premium Multi-Project AI & Web3 Portfolio Bundle for Sale

### 💖 Support Development

If you appreciate our work and would like to support future development, consider sending a donation: 👉 Click here to donate via Donatr 👈

🌟 **SIX PREMIUM PROJECTS FOR SALE / COMMERCIAL IP ACQUISITION BUNDLE** 🌟

A complete, ready-for-commercialization portfolio of software projects and AI/Web3 infrastructure is available for immediate acquisition (full intellectual property rights / IP & Code Acquisition)!

You are purchasing six independent, fully functional, optimized premium products representing hundreds of hours of engineering, architectural, and development work.

## 📦 What's Included (The Bundle Products)

### 1. ClusterLaunch — AWS K3s + Grafana AWS Kit

**Description:** Advanced and fully optimized Infrastructure-as-Code (Terraform) kit for automated deployment of a single-node Kubernetes cluster (K3s) on AWS.

**Key features:**
- Complete monitoring stack: Prometheus-Community Stack, Grafana, Loki, and telemetry modules.
- Full support for AWS Graviton (ARM64) architecture, automatically reducing server maintenance costs by 20%.
- Instant Public Demo mode (Traefik Ingress) and secure port tunneling via AWS Systems Manager (SSM) Session Manager.

**Project folder:** `/terraform/aws/`

### 2. Inkanto AI Assistant — React/Vite Chat Application

**Description:** Modern single-page application (SPA) built on React, Vite, and Tailwind CSS, ready for immediate publication on Vercel.

**Key features:**
- Beautiful, responsive chat interface seamlessly connected to OpenAI ChatGPT models (gpt-4o-mini).
- Built-in passwordless Social Login via Google OAuth integration.
- Secure serverless backend (api/chat.js) protecting API keys from leakage.

### 3. SIT v2.0 (Sovereign Intel Terminal) — React & Supabase Enterprise Dashboard

**Description:** Visually and technologically advanced React/TypeScript/Vite operational cockpit with deep Supabase database integration.

**Key features:**
- AI agent fleet management: dynamic creation, parameter modification, and chat with specialized agents.
- Voice integration: generating naturally sounding voice messages using the Replicate API.
- Web3 & Automation Integration: built-in TON (The Open Network) wallet monitor and n8n proxy with Model Context Protocol (MCP) architecture.

**Project folder:** `/sovereign-terminal/`

### 4. Kobalt AI Builder — Offline-First Code Generator

**Description:** Extremely lightweight, 100% client-side AI-powered web application generator and editor (offline equivalent of Lovable/v0/Bolt).

**Key features:**
- Support for three leading AI providers: Anthropic (Claude), OpenAI (GPT), and Mistral AI.
- Project database in localStorage: create, edit code, download ready HTML files, full import and export of sessions to JSON backup.
- Version history: automatic saving of changes as versions with the ability to instantly restore any state.
- Share via link: innovative feature compressing the entire generated application code directly into the URL hash. The recipient opens the application directly in their browser, without a server!

**How to run:** Open `/kobalt-html/index.html` directly in any browser.

**Project folder:** `/kobalt-html/`

### 5. IrisVerify ID — React Biometric ID SPA

**Description:** Digital identity and biometric verification protocol based on React, Vite, and Tailwind CSS, built into its own web structure.

**Key features:**
- Ready template for applying for NVIDIA Hardware Grant with full documentation.
- Professional cryptographic login and face/eye scanning interfaces.

**Project folder:** historical commit `76f2820` / instructions in documentation.

### 6. IrisVault — Cyberpunk Biometric Eye-Scan Wallet

**Description:** Hypnotizing, futuristic cryptocurrency wallet (single-page HTML/CSS/JS) with a unique cyberpunk design, integrated with an interactive biometric camera.

**Key features:**
- Animated Iris Scanner: full access to the device's webcam with dynamic biometric markers and laser scanning effects.
- Biometric fallback: automatic activation of an animated 3D SVG/CSS iris when camera access is denied.
- Web3 wallet interface: dynamically changing asset prices (BTC, ETH, TON, SOL) on a scrolling ticker, real-time balance, and address copying with feedback.
- Interactive Modals: fully functional and validated Send and Receive forms. The send process requires additional eye-scan authorization and automatically updates the wallet state and adds the transaction to the transaction history!

**How to run:** Open `/irisvault/index.html` directly in any browser.

**Project folder:** `/irisvault/`

## 🚀 How to Run and Test the Projects (Local Setup Guide)

### 💻 1. Running IrisVault and Kobalt AI Builder (Simplest Path)

These projects require no server or compilation!

- **IrisVault:** Go to the `/irisvault` directory and double-click the `index.html` file (or drag it into Chrome/Safari/Firefox). Click the "Scan Iris" button to unlock the wallet, then test the Send/Receive forms!
- **Kobalt AI Builder:** Go to `/kobalt-html`, open `index.html` in your browser, go to settings (gear icon), enter your own API key (Claude, OpenAI, or Mistral), and start creating applications!

### ⚙️ 2. Running Sovereign Intel Terminal (SIT v2.0)

Requires Node.js version 18+.

```bash
# Navigate to the terminal folder
cd sovereign-terminal

# Install dependencies
npm install

# Create a .env file with Supabase configuration
# VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
# VITE_SUPABASE_PUBLISHABLE_KEY="YOUR_SUPABASE_KEY"

# Start the local development server
# npm run dev
```
