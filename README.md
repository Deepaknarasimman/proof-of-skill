# ⬡ Proof-of-Skill — Polygon On-Chain Skills Platform

A stunning Web3 platform where users can showcase verified skills on-chain, earn NFT badges, complete challenges, and build transparent reputation scores on Polygon.

## ✨ Features

- 🎯 **Proof-of-Skill Challenges** — Timed quizzes across blockchain topics (DeFi, Security, Solidity, etc.)
- 🏅 **NFT Skill Badges** — Earn tamper-proof NFT credentials for completed challenges
- 📊 **Skill Reputation Score** — On-chain reputation that grows with your achievements
- 🔐 **Secure Login** — Email/password auth via Supabase + simulated MetaMask wallet connect
- 🏆 **Global Leaderboard** — Compete for the top spots with real users

## 🚀 Quick Start

### Option 1: Double-click launcher (Windows)
```
Double-click launch.bat
```

### Option 2: Python server (zero dependencies)
```bash
cd "antigra project"
python -m http.server 3000
```
Then open http://localhost:3000

### Option 3: Node.js server
```bash
cd "antigra project"
node server.js
```

## ⛓️ Auto-Deployment (Hardhat)

Deploy your smart contracts automatically to Polygon testnets.

### 1. Setup Environment
Rename `.env.example` to `.env` and add your private key:
```bash
PRIVATE_KEY=your_private_key_here
```

### 2. Install Dependencies
```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox dotenv
```

### 3. Deploy to Amoy Testnet
```bash
npx hardhat run scripts/deploy.js --network amoy
```

### 4. Deploy to Mainnet
```bash
npx hardhat run scripts/deploy.js --network polygon
```

## 📁 Project Structure

```
antigra project/
├── index.html          # Main SPA (Single Page Application)
├── css/
│   └── style.css       # Complete design system
├── js/
│   ├── blockchain.js   # Polygon chain simulation + data
│   └── app.js          # Core application logic
├── server.js           # Zero-dependency Node.js server
├── launch.bat          # Windows one-click launcher
└── README.md           # This file
```

## 🎨 Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (zero frameworks)
- **Backend:** Polygon Smart Contracts (Solidity)
- **Blockchain:** Polygon (Amoy/Mainnet)
- **Storage:** IPFS (via Pinata)
- **Design:** Glassmorphism, animated particles, dark Web3 aesthetic
- **Fonts:** Inter, Space Grotesk, JetBrains Mono

## 📦 IPFS Storage Layer

Proof-of-Skill now uses **IPFS (InterPlanetary File System)** to store document content decentrally.

1. Create a free account at [Pinata](https://pinata.cloud/).
2. Create an API Key and Secret.
3. In the PoS App, go to **Profile → Settings**.
4. Paste your Pinata Keys and save.
5. All future uploads will be pinned to IPFS and linked on-chain!

## 📸 Pages

| Page | Description |
|------|-------------|
| Landing | Hero section with animated chain nodes and platform features |
| Login | MetaMask wallet connect + Supabase email auth |
| Dashboard | Overview with stats, activity feed, and quick actions |
| Challenges | Timed skill challenges with filtering by category |
| NFT Badges | Badge gallery with mint-on-chain simulation |
| Reputation | Score circle, breakdown chart, and global leaderboard |
| Profile | User info, earned badges, and settings |

---

Built with ❤️ on ⬡ Polygon
