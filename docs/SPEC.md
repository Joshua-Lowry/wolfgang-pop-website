# Wolfgang Pop – Website Specification

## 1. Product Vision & Purpose

Wolfgang Pop is a local popcorn stand brand built to feel friendly, memorable, and trustworthy. The brand should appeal to families, event-goers, and local customers who want a simple, enjoyable treat.

The purpose of the website is not to sell online or over-explain the business. Its purpose is to:

- Clearly communicate what Wolfgang Pop is
- Make the brand feel real, polished, and welcoming
- Help customers quickly understand where to find the stand and how to get in touch
- Establish credibility for a small local food business

The website should feel:

- Friendly and warm
- Confident but not corporate
- Simple, fast, and easy to use
- Approachable for non-technical users

This website is a Version 1 (v1) marketing site. It is intentionally limited in scope and optimized for clarity and speed rather than advanced features.

---

## 2. Version 1 Scope (Hard Boundaries)

This project is explicitly limited to a Version 1 (v1) website. Agents and contributors must not add features outside this scope unless the specification is updated.

### Included in v1

The v1 website includes only the following:

- **Pages:**
  - Home
  - Menu
  - About
  - Contact

- **Functionality:**
  - Static content with light interactivity
  - Responsive, mobile-first layout
  - A contact form that sends an email
  - Clear calls-to-action (location, contact, social links)
  - Basic SEO metadata (title, description, social preview)

- **Design:**
  - Uses the approved brand colors and logo
  - Friendly, readable typography
  - Simple layouts prioritizing clarity and speed

### Explicitly Excluded from v1

The following must NOT be added in Version 1:

- Online ordering or payments
- User accounts or authentication
- Databases or CMS systems
- Admin dashboards
- Blog functionality
- SEO campaigns, analytics dashboards, or tracking tools
- Advanced animations or motion-heavy effects
- Third-party UI frameworks beyond Tailwind CSS
- New features added "for improvement" without approval

**If a feature is not listed in the Included section, it is considered out of scope.**

---

## 3. Brand Rules

All design and content decisions must follow these brand rules.

### Brand Name

**Wolfgang Pop**

### Logo Usage

- The primary logo is the approved wolf + "WOLFGANG POP" wordmark.
- The original logo must be used for all primary branding.
- Alternate or novelty logo variations (e.g., popcorn-shaped letters) are not used in v1.
- The logo must not be recolored outside the approved palette.
- Do not add outlines, shadows, or effects to the logo unless explicitly approved.

### Color Palette (Approved)

Only the following colors may be used:

- **Cream / Butter Yellow:** `#F3E1A4`
- **Plum Purple:** `#4B2E83`
- **Charcoal (dark background):** `#1F1F1F`
- **Warm Gray (secondary neutral):** `#9B9B9B`

**No additional colors may be introduced without updating this specification.**

### Typography

- Use clean, readable fonts.
- Avoid novelty or decorative fonts.
- Typography should feel friendly, confident, and legible on mobile.
- Limit font usage to a maximum of two font families.

### Tone of Voice

Written content should be:

- Friendly and approachable
- Clear and straightforward
- Confident but not salesy
- Local and human, not corporate or technical

**Avoid:**

- Buzzwords
- Overly playful or childish language
- Technical jargon
- Marketing hype

The brand should feel trustworthy, simple, and welcoming.

---

## 4. Information Architecture & Page Intent

The website follows a simple, flat structure designed for clarity and ease of navigation.

### Sitemap

- Home (`/`)
- Menu (`/menu`)
- About (`/about`)
- Contact (`/contact`)

---

### Home Page (`/`)

**Purpose:** Introduce the brand, establish trust, and guide visitors toward contact or visiting the stand.

**Required Sections:**

- Hero section with brand name, short tagline, and primary call-to-action
- Brief introduction to Wolfgang Pop
- Featured popcorn flavors or offerings (high-level)
- Location or "Where to Find Us" section
- Social proof or credibility placeholder (e.g., "local favorite", events, or testimonials placeholder)
- Footer with navigation and contact info

The Home page should feel welcoming and immediately understandable within a few seconds.

---

### Menu Page (`/menu`)

**Purpose:** Show what is offered without overwhelming detail.

**Required Sections:**

- Clear heading
- Grouped list of popcorn flavors or categories
- Simple descriptions (no pricing required unless desired)
- Optional note that menu offerings may vary by event or location

This page should be clean, scannable, and easy to read on mobile.

---

### About Page (`/about`)

**Purpose:** Build trust by telling a simple, human story.

**Required Sections:**

- Short brand story (who, why, what makes Wolfgang Pop special)
- Mission or values (optional, keep brief)
- Photo or visual element that humanizes the brand
- Optional: team introduction or founder story

This page should feel personal and authentic.

---

### Contact Page (`/contact`)

**Purpose:** Make it easy for customers to get in touch.

**Required Sections:**

- Contact form with fields: Name, Email, Message
- Email address and/or phone number
- Social media links
- Optional: embedded map or location description

The form should be simple, functional, and mobile-friendly.

---

## 5. Technical & Development Rules

All development must follow these technical rules. Deviations are not allowed unless this specification is updated.

### Framework & Stack

- **Next.js 14** using the App Router
- **TypeScript** for all source files
- **Tailwind CSS 3.4.1** for styling with a custom OKLCH color system
- No additional UI frameworks or CSS libraries

### Project Structure

- Use the Next.js App Router structure
- Pages live under `/src/app`
- Shared UI components live under `/src/components`
- Utility or helper logic lives under `/src/lib`

**Do not reorganize the project structure without approval.**

### Hosting & Deployment

- The site is deployed on **Vercel**
- Code should follow Vercel best practices for Next.js App Router
- Do not introduce custom servers, Docker configs, or non-Vercel deployment assumptions

### Version Control & Workflow

- All code is stored in the **GitHub repository**: `Joshua-Lowry/wolfgang-pop-website`
- Development is done using **Cursor's AI Agent** (not locally)
- **Workflow:**
  1. Create feature branches from `main` for all development work
  2. Push changes to test branches for review and testing
  3. When complete and approved, merge to `main` (production)
- **Do not commit directly to `main` during development**
- Use clear, descriptive commit messages
- Test branches should be named descriptively (e.g., `feature/home-page`, `fix/contact-form`)

### Styling Rules

- Use Tailwind utility classes for styling
- Do not introduce custom CSS files unless necessary
- Colors must come from the approved brand palette
- Favor clarity and readability over visual complexity

### Functionality Rules

- The site is static-first
- Dynamic behavior should be minimal and intentional
- The contact form may use a server action or API route, but not both
- No database connections in v1
- No client-side state management libraries

### Dependencies

- Do not add new npm packages unless explicitly required
- If a new dependency is proposed, it must be justified and approved
- Avoid experimental or unstable libraries

### Code Quality

- Code must be readable and simple
- Avoid unnecessary abstraction
- The project must successfully run:
  - `pnpm run dev`
  - `pnpm run build`

**Errors or warnings must be resolved before work is considered complete.**

---

## 6. Definition of Done & Agent Instructions

### Definition of Done

Work on this project is considered complete when all of the following are true:

- All pages defined in the sitemap exist and render correctly
- Navigation works between all pages
- The site is responsive and usable on mobile devices
- The contact form successfully sends an email
- Branding follows the approved logo, color, and tone rules
- No out-of-scope features have been added
- The project builds successfully with `pnpm run build`
- There are no unresolved errors or warnings
- All changes are committed and pushed to the appropriate branch

**Once these conditions are met, work must stop unless a new task is explicitly assigned.**

---

### Agent Instructions

All AI agents (including Cursor AI Agent) must follow these rules:

- **Read `docs/SPEC.md` in full before starting any task**
- Do not assume requirements beyond what is written
- Do not expand scope or add features for "improvement"
- Only work on the files relevant to the assigned task
- Do not refactor unrelated code
- If a requirement is unclear or missing, stop and ask for clarification
- Prefer simple, readable solutions over complex abstractions
- **All development work should be done in feature branches, not directly on `main`**
- Push changes to test branches for review before merging to production
- Use clear, descriptive commit messages

**Agents are not permitted to reinterpret or override this specification. This document is the single source of truth for the project.**

---

## 7. Color System Configuration

The project uses a custom OKLCH color system with Tailwind CSS. The approved brand colors should be configured in `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'butter-yellow': '#F3E1A4',
        'plum-purple': '#4B2E83',
        'charcoal': '#1F1F1F',
        'warm-gray': '#9B9B9B',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 8. Project Setup & Getting Started

### Prerequisites

- Node.js 22.x
- pnpm package manager
- Git
- Cursor IDE (for AI Agent development)

### Initial Setup

1. Clone the repository:
   ```bash
   gh repo clone Joshua-Lowry/wolfgang-pop-website
   cd wolfgang-pop-website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Development Workflow

1. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

3. Push to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a pull request for review

5. After approval, merge to `main`

---

## 9. Contact Form Implementation

The contact form should use Next.js Server Actions for simplicity. Example implementation:

**Location:** `/src/app/contact/page.tsx`

The form should:
- Validate all required fields (Name, Email, Message)
- Send an email using a service like Resend, SendGrid, or Nodemailer
- Display success/error messages to the user
- Be fully responsive and accessible

---

## 10. SEO & Metadata

Each page should include appropriate metadata using Next.js App Router conventions:

```typescript
export const metadata = {
  title: 'Wolfgang Pop - Local Popcorn Stand',
  description: 'Fresh, delicious popcorn at local events',
  openGraph: {
    title: 'Wolfgang Pop',
    description: 'Fresh, delicious popcorn at local events',
    images: ['/images/og-image.png'],
  },
};
```

---

## 11. Assets & Resources

### Logo

The Wolfgang Pop logo should be placed in `/public/images/logo.png` (or appropriate format).

### Images

All images should be:
- Optimized for web (compressed, appropriate dimensions)
- Stored in `/public/images/`
- Used with Next.js `<Image>` component for optimization

---

## 12. Accessibility Requirements

- All interactive elements must be keyboard accessible
- Images must have descriptive `alt` text
- Color contrast must meet WCAG AA standards
- Forms must have proper labels and error messages
- The site must be navigable with screen readers

---

## 13. Performance Requirements

- Lighthouse score of 90+ for Performance
- First Contentful Paint (FCP) under 1.5s
- Largest Contentful Paint (LCP) under 2.5s
- Images should be lazy-loaded where appropriate
- Minimize JavaScript bundle size

---

## 14. Browser Support

The website must work correctly on:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

---

## 15. Future Considerations (Post-v1)

Features that may be considered after v1 is complete:

- Online ordering system
- Event calendar
- Blog or news section
- Customer testimonials system
- Email newsletter signup
- Analytics integration

**These features are explicitly out of scope for v1 and should not be implemented unless this specification is updated.**

---

## Document Version

**Version:** 1.0  
**Last Updated:** December 27, 2025  
**Status:** Active
