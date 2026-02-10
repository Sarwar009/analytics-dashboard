Analytics Dashboard

A responsive, production-ready Admin Analytics Dashboard built with Next.js, TypeScript, Tailwind CSS, Zustand, and Recharts.
This project visualizes business KPIs and charts with filters and supports Dark/Light mode.

🚀 Features

Responsive sidebar + header layout

KPI cards: Total Revenue, Total Users, Orders, Conversion Rate

Charts: Line, Bar, Pie, Traffic Source

Filters: Date range (Last 7 days / 30 days / 12 months) + User type

Dark / Light theme toggle

Skeleton loading states + error handling

Fully TypeScript-safe and beginner-friendly

| Layer            | Technology                         |
| ---------------- | ---------------------------------- |
| Framework        | Next.js 13 (App Router)            |
| Language         | TypeScript                         |
| Styling          | Tailwind CSS                       |
| Charts           | Recharts                           |
| State Management | Zustand                            |
| Data Fetching    | Fake API (simulated with Promises) |
| Deployment       | Vercel (recommended)               |


Setup Instructions:-
Clone repository

git clone https://github.com/<your-username>/analytics-dashboard.git
cd analytics-dashboard


Install dependencies:-
npm install
# or
yarn


Run development server:-
npm run dev
# or
yarn dev


Open in browser:-
http://localhost:3000


Build for production:-
npm run build
npm run start

Architecture Decisions :
App Router + Root Layout: used Next.js 13 App Router with <html> & <body> for Dark/Light support.
Zustand Store: centralized state for filters + theme, making components reactive and independent.
KPI + Charts separation: KpiSection, ChartsSection, KpiCard are separate components → reusable and memoized.
Fake API: fakeFetch simulates async API calls with loading/error states for better UX.
Dynamic imports: Charts are dynamically imported with ssr: false to prevent SSR issues.
Dark/Light mode: Tailwind dark: variants + Zustand store for toggle.

Assumptions Made :
KPI values are numbers for calculation; formatted to string for display.
Filter logic is simplified: multiplier applied to simulate different date ranges / user types.
Traffic source data is static; in real scenarios, API would return filtered data.
