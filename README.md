# The Business Idea Studio

**Founder Psychology → Business Mechanics.**  
A lightweight React/TypeScript application that publishes an open library of visual one-pagers, a staged **Knowledge Graph**, and pages for **Community**, **Software**, **AI (Private Beta)**, **Governance**, **FAQ**, **Repository**, and **Book a Strategy Call**. The site is a fast, static SPA with a tiny hash-router and utility-class styling.

---

## Contents

- [What’s inside](#whats-inside)
- [Core pages](#core-pages)
- [Architecture](#architecture)
- [Local development](#local-development)
- [Configuration & content](#configuration--content)
- [Adding content](#adding-content)
- [Design & accessibility](#design--accessibility)
- [Governance & quality](#governance--quality)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## What’s inside

- **Knowledge Graph** of 7 psychological stages (self → proof) visualized as a simple “step” Gantt.
- **Open Library / Repository** of one-pagers you can open without meetings.
- **Community (Skool)** page with clear CTAs.
- **Software** page (tools & connections) and **AI** page (private beta).
- **Governance** page with anchor-linked quick navigation.
- **Book a Strategy Call** page with YouTube explainer and Calendly embed.
- **UtilityStrip** (top nav) and **Footer** rendered on all main pages for consistent navigation.

---

## Core pages

- `Home` (in `App.tsx`): Hero, verification bar, stages, and library.
- `KnowledgeGraph.tsx`: Staged ladder view. Pills auto-size to text and never overflow.
- `Repository.tsx`: Lists all one-pagers.
- `OnePagerView.tsx`: Renders a selected one-pager.
- `Community.tsx`: Skool network overview.
- `Software.tsx`: Product modules, integrations, how-it-works.
- `Ai.tsx`: Private beta AI Operator overview.
- `Governance.tsx`: Standards with left-rail quick links (anchors).
- `Faq.tsx`: Frequently asked questions.
- `BookACall.tsx`: YouTube + Calendly; de-risking content.
- `Header.tsx`, `UtilityStrip.tsx`, `Footer.tsx`, `CTA.tsx`: shared UI.

---

## Architecture

- **Framework:** React + TypeScript
- **Routing:** Tiny **hash router** in `App.tsx` (no external dependency)
- **Styling:** Utility-first classes (Tailwind-style)
- **Build:** Any standard React/Vite toolchain works (static assets only)
- **Data model:** One-pagers are plain TS objects exported from `onepagers/index.ts`

Suggested project layout:
