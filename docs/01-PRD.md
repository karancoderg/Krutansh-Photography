# Krutansh Photography - Product Requirements Document (PRD)

## Overview
Krutansh Photography is a production-grade luxury photography portfolio and booking platform. The platform is designed to showcase high-end photography (primarily weddings, but flexible for other categories) and facilitate client inquiries through a seamless, premium user experience.

## Target Audience
High-end clients, engaged couples, luxury brands, and individuals seeking premium photography services.

## Core Features
1. **Dynamic Portfolio**: A cinematic showcase of photography projects, filterable by category.
2. **CMS Integration**: Full content management capabilities via Sanity CMS for portfolio items, services, and site settings.
3. **Booking System**: A secure, rate-limited inquiry form with email routing (Resend) and WhatsApp fallback.
4. **Luxury Aesthetic**: A "cinematic noir" design system featuring deep blacks, elegant typography, subtle gold/champagne accents, and smooth Framer Motion animations.
5. **SEO & Performance**: Optimized for fast load times (sub-2s LCP), zero Cumulative Layout Shift (CLS), and extensive SEO metadata.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Sanity CMS
- Cloudinary
- Upstash Redis
- Resend

## Out of Scope
- Client login / authentication (Sanity handles admin auth, no client-facing accounts needed).
- Direct payment processing.
