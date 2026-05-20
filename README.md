# farhann.dev — Personal Portfolio

Personal portfolio site built with Next.js, showcasing my projects, skills, and career journey as a Software Engineer.

## Tech Stack

- **Framework** — Next.js 16 (App Router), React 19
- **Styling** — Tailwind CSS 4
- **Animations** — Framer Motion
- **Background** — tsparticles (animated particle canvas)
- **Icons** — Lucide React, React Icons
- **UI Utilities** — clsx, tailwind-merge, class-variance-authority, Radix UI Slot
- **Contact Form** — Formspree

## Sections

- **Hero** — Introduction and CTAs
- **Skills** — Tech stack with official brand icons
- **Projects** — Featured work with links
- **Experience** — Work experience and education timeline
- **Achievements** — Asia Pacific competition awards
- **Contact** — Contact form

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── robots.ts         # Crawl rules
├── components/
│   ├── sections/         # Page sections (Hero, Skills, Projects, Experience, Achievements, Contact, Footer)
│   ├── ui/               # Shared UI components (SocialIcons)
│   ├── Background.tsx    # Particle canvas background
│   ├── Navbar.tsx        # Top navigation bar
│   ├── LoadingScreen.tsx
│   ├── ScrollProgress.tsx
│   └── BackToTop.tsx
└── lib/
    └── utils.ts          # Utility functions (cn)
```

## Live Site

[farhann.dev](https://farhann.dev)
