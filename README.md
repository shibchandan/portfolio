# Engineering Portfolio Architecture

A high-performance, developer-focused personal portfolio built to showcase systems engineering projects, competitive programming statistics, and full-stack capabilities. 

## 🏗️ Workflow & System Architecture

This project is built using a modern decoupled architecture, leveraging Next.js Server-Side Rendering (SSR) for initial load speed and dynamic API routes for real-time data fetching.

`mermaid
graph TD
    Client[Client Browser] -->|Requests Portfolio| NextJS[Next.js 14 SSR]
    NextJS -->|Serves Optimized HTML/CSS| Client
    
    sublayer1[Real-Time Stats]
    Client -->|Fetch Request| API_Route[/api/stats Server Route/]
    API_Route -->|Scrapes Data| LeetCode[LeetCode GraphQL]
    API_Route -->|Fetches Data| Codeforces[Codeforces REST API]
    
    sublayer2[Secure Contact]
    Client -->|POST JSON Payload| Web3Forms[Web3Forms API]
    Web3Forms -->|SMTP Delivery| Inbox[Encrypted Email Inbox]
`

## 🛠️ Core Tech Stack

### Frontend Architecture
- **Next.js 14 (App Router):** Utilized for server-side rendering, layout management, and optimal SEO.
- **React 19:** Managing component state, hooks, and UI lifecycle.
- **Tailwind CSS v4:** Utility-first CSS engine for creating the premium, custom "Dark Mode / Hacker" aesthetic with hardware-accelerated glassmorphism and neon glows.
- **Framer Motion:** Handling complex scroll-linked animations, micro-interactions, and component entry variants.

### Backend Integrations
- **Next.js API Routes (/api/stats):** A custom backend proxy that securely fetches data from external coding platforms. This prevents Cross-Origin Resource Sharing (CORS) blocks and hides the fetching logic from the client.
- **Web3Forms API:** A serverless form handler used to transmit contact form payloads securely without requiring a dedicated SMTP server or exposing email credentials.

## 🚀 Key Technical Features

1. **Live CP Statistics Engine:** The backend route actively polls LeetCode and Codeforces APIs to dynamically inject live problem-solving counts and ratings directly into the UI.
2. **Interactive Terminal Simulation:** A custom-built React component that simulates a typing Unix terminal environment in the Hero section.
3. **Decoupled Form State:** The contact form uses strict React state management to validate payloads before transmitting them asynchronously to Web3Forms, utilizing try/catch blocks for error handling and UI log updates.
4. **Performance Optimized:** Utilizing Next.js 
ext build to pre-generate static pages, resulting in incredibly low Time-to-First-Byte (TTFB) and instant page transitions.

## 💻 Local Setup & Execution

### 1. Clone the Repository
`ash
git clone https://github.com/shibchandan/portfolio.git
cd portfolio
`

### 2. Install Dependencies
`ash
npm install
`

### 3. Environment Configuration
Create a .env.local file in the root directory to store your private API keys:
`env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
`

### 4. Boot the Development Server
`ash
npm run dev
`
Navigate to http://localhost:3000 to view the application locally.

---
*Architected and developed from scratch.*
