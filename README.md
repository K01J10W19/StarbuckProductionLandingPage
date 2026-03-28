# ☕ Starbucks Reimagined — Not Just a Cup

![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

A high-end, high-performance Single Page Application (SPA) built with **React 18** and **Vite**. This project serves as a deep engineering practice in modern "Fluid Responsive Design" and immersive UI/UX orchestration, reimagining the Starbucks digital brand experience.

---

## 🚀 Features

* **Immersive Hero Section**: Utilizing dynamic viewport height and advanced image blending techniques.
* **Interactive Category Showcase**: Featuring scroll-snap carousels and real-time category filtering.
* **Intelligent Product Modal**: A responsive modal engine that switches between "Side-by-Side" desktop layouts and "Stacked" mobile layouts.
* **Brand Philosophy & Benefits**: Modularized sections using elastic flexbox logic to ensure vertical alignment of heterogeneous content.
* **Conversion-focused CTA**: An animated lifestyle carousel integrated with a modern Newsletter subscription system.

---

## 🛠️ Tech Stack

* **Frontend**: React (JSX) + Vite.
* **Styling**: Tailwind CSS (Fluid Typography system powered by `clamp()`).
* **Animations**: Framer Motion (`motion/react`) for scroll-triggered orchestration and layout transitions.
* **Icons**: Lucide React.
* **Deployment**: Vercel (CI/CD Pipeline).

---

## 🧠 Engineering Highlights

### 1. Fluid Typography & Spacing System
Moving away from traditional "stepped" breakpoints, the entire site utilizes CSS `clamp()`. Headings and margins scale seamlessly between **390px** and **1280px**, providing a consistent visual hierarchy across all devices.

### 2. Solving the Viewport Height Trap (`100dvh`)
To prevent layout jumping caused by mobile browser address bars, the Hero Section implements `100dvh` (Dynamic Viewport Height). This ensures the content remains perfectly centered and full-screen without accidental overflow.

### 3. Visual Blending Strategy
To resolve the "Letterboxing" effect caused by `object-contain`, I implemented a multi-layered blending strategy using CSS inner shadows and radial gradients. This seamlessly merges product image edges into the dark background containers.

### 4. Elastic Alignment Logic
In the Benefits module, I utilized a combination of `flex-grow` and `mt-auto`. This ensures that data-highlight boxes remain perfectly aligned at the bottom of cards regardless of varying description lengths.

---

## 📁 Folder Structure

```text
src/
├── assets/
│   ├── images/     # WebP optimized product and lifestyle assets
│   └── icons/      # Modularized SVG logos benefiting from Vite's hash caching
├── components/     # Atomic UI components
│   ├── HeroSection.jsx
│   ├── CategoryShowcase.jsx
│   ├── ProductModal.jsx
│   └── ...
├── App.jsx         # Main application entry and routing logic
└── theme.css       # Centralized Tailwind variables and fluid configurations
```

---

## Getting Started

# 1. Clone the repository
git clone [https://github.com/your-username/starbucks-project.git](https://github.com/your-username/starbucks-project.git)

# 2. Install dependencies
npm install

# 3. Start development server (Laboratory Mode)
npm run dev

# 4. Build for production (Factory Check)
npm run build

---

## Responsive Strategy

The project features pixel-perfect optimizations across the following key breakpoints:

* **390px (Mobile)**: Single-column layout with horizontal-scroll category tabs.

* **768px (Tablet)**: Matrix grid layouts with optimized image ratios.

* **1024px+ (Desktop)**: Immersive dual-column modals and full-screen parallax effects.
