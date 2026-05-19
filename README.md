# SS_PORTFOLIO.sch

## 01. System Overview
A modular, web-based portfolio representing an engineering journey across hardware and software domains. This project is architected with a focus on clean code, performance optimization, and secure credential management. The UI is designed to emulate a **KiCad** workspace, providing a familiar environment for hardware engineers to explore software-integrated solutions.

## 02. Bill of Materials (BOM)
| Component | Part Number / Ref | Functional Description |
| :--- | :--- | :--- |
| **Frontend** | HTML5 / TailwindCSS | Custom grid engine (20px pitch) with KiCad color tokens. |
| **Backend** | Vercel Serverless | Event-driven execution for high-speed API handling. |
| **Intelligence** | Google Gemini 1.5 | Secure neural uplink for the digital twin terminal. |
| **Security** | Vercel Env Vars | Secret-key isolation to prevent credential leakage. |
| **Deployment** | GitHub Actions | Automated CI/CD pipeline for site deployment. |

## 03. Circuit Design (The KiCad UI)
The interface implements hardware-centric design patterns to bridge the gap between EDA tools and web design:

* **Global Grid Engine:** A CSS-driven radial gradient background mimicking the KiCad layout editor workspace.
* **Interactive Components:** Project cards feature dual-state LED indicators. On hover, the state transitions from Standby (Red) to Active (Green).
* **Schematic Layout:** Section dividers utilize dashed borders and circuit nodes to visualize the flow of the engineering narrative.
* **Title Block Metadata:** Every page includes an engineering title block in the footer, tracking REV, SHEET, and DATE of the current build.



## 04. Core Modules
* **BMS_HV (600V Stack):** Documentation of modular battery management logic including isoSPI communication and safety-critical FMEA for Formula Student EVs.
* **ECU_ARCH (CAN-Bus):** Breakdown of decentralized controller architecture nodes designed to reduce wiring harness mass and improve fault isolation.
* **AI_UPLINK (Secure API):** A standalone Serverless function that proxies user queries to the Gemini API, ensuring private keys are never exposed on the client side.

## 05. Deployment and Configuration
The site is optimized for low-latency delivery using Vercel’s infrastructure:

1. **Clean URLs:** Configuration via `vercel.json` handles extensionless routing, allowing users to access pages like `/projects` without the `.html` suffix.
2. **Environment Variables:** Sensitive API keys are stored in the Vercel encrypted layer, fully decoupled from the public source code.

---
**© Subham Saha** | 2026 Build
