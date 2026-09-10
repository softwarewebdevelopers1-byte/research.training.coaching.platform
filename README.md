# [Company Name] — Consultancy Website

A professional, credibility-focused marketing website for a coaching, training,
and research consultancy. Built as a **frontend-only** project with Vite,
React, and TypeScript, ready to have the client's real logo, brand colors,
photos, and copy dropped in.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Routing](#routing)
- [Content & Data Architecture](#content--data-architecture)
- [Replacing Placeholder Assets](#replacing-placeholder-assets)
- [Contact Form & Backend Hookup](#contact-form--backend-hookup)
- [SEO & Discoverability](#seo--discoverability)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [License](#license)

---

## Overview

The site is designed to:

- Establish credibility and professionalism for the consultancy.
- Make it easy for people who Google the company to find and understand it.
- Clearly present the three core offerings: **Coaching**, **Training**, and **Research**.
- Make it trivial for a potential client to get in touch (form, email, phone, WhatsApp).
- Look and feel premium on mobile, tablet, and desktop.

It is **not** an application. There is no authentication, no database, and no
server-side logic. Every "dynamic" piece is either static data or a clearly
marked placeholder ready to be wired to a real backend later.

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Build tool | **Vite** | Fast dev server, tiny config, great TS support |
| UI | **React 18** | Standard, well-supported |
| Language | **TypeScript** (strict) | Typed props, safer refactors |
| Styling | **CSS Modules** + CSS custom properties | Scoped styles, no runtime cost, easy theming |
| Routing | **React Router v6** | Flat, readable route definitions |
| Icons | **Lucide React** | Lightweight, tree-shakeable, consistent |

No state manager. No CSS framework. No animation library. The site stays light
on purpose.

---

## Getting Started

### Requirements

- Node.js **18+** (Node 20 LTS recommended)
- npm **9+** (or pnpm / yarn — examples use npm)

### Install & run

```bash
npm install
npm run dev
