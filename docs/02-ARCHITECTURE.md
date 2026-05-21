# Architecture & Implementation Strategy

## System Architecture

The application uses a server-first architecture leveraging Next.js App Router.

### Data Flow
1. **Content**: Managed in Sanity CMS.
2. **Media**: Stored and optimized via Cloudinary.
3. **Fetching**: Server Components fetch data from Sanity via GROQ using a typed `sanity-client`.
4. **Caching**: Next.js Data Cache is utilized with route segments and specific tags for On-Demand ISR.

### Server/Client Boundaries
- **Default**: All components are Server Components.
- **Client Components**: Used strictly for:
  - Interactive forms (e.g., Contact Form).
  - Advanced animations requiring scroll/layout measurement (Framer Motion).
  - Client-side state (e.g., image lightboxes, mobile navigation).

### Booking Flow Architecture
1. Client submits form (Client Component).
2. Form posts to Next.js Server Action.
3. Server Action validates payload via Zod.
4. Server Action checks rate limits via Upstash Redis.
5. On success, email is dispatched via Resend.
6. Client receives success state; fallback to WhatsApp link on failure.

## Folder Structure

The project strictly follows this structure:

```
/
├── app/                  # Next.js App Router pages and layouts
├── components/           # React components
│   ├── ui/               # Reusable primitives (Button, Container)
│   ├── layout/           # Global layouts (Header, Footer)
│   ├── sections/         # Page sections (Hero, FeaturedWork)
│   └── forms/            # Interactive forms
├── lib/                  # Utilities, fetchers, and configurations
│   ├── sanity/           # Sanity clients and GROQ queries
│   ├── actions/          # Next.js Server Actions
│   └── utils/            # General helpers
├── sanity/               # Sanity CMS configuration and schemas
├── types/                # Global TypeScript definitions
└── public/               # Static assets
```

## Design System (Cinematic Noir)

- **Colors**:
  - Background: Deep Black (`#0a0a0a`), Charcoal (`#1a1a1a`)
  - Text: Off-White (`#f5f5f5`), Muted Silver (`#a3a3a3`)
  - Accents: Champagne Gold (`#d4af37`), Muted Gold (`#b89947`)
- **Typography**:
  - Headings: Elegant Serif (e.g., Playfair Display)
  - Body: Clean Sans-Serif (e.g., Inter or Lato)
- **Motion**: Subtle fade-ins, slow scale-ins for images, smooth scrolling. Always respect `prefers-reduced-motion`.
