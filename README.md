# Wolfgang Pop Website

A friendly, welcoming website for Wolfgang Pop, a local popcorn stand brand.

## 🎯 Project Overview

This is a Version 1 (v1) marketing website built to:
- Introduce the Wolfgang Pop brand
- Help customers find the stand and get in touch
- Establish credibility for a local food business

Built using **Next.js 14** (App Router) with **TypeScript** for type safety, **Tailwind CSS 3.4.1** for styling with a custom OKLCH color system, and deployed on **Vercel** with **Cloudflare** DNS management.

## 📋 Documentation

**Before starting any work, read the full specification:**

👉 **[docs/SPEC.md](./docs/SPEC.md)** - Complete project specification and requirements

The specification document is the single source of truth for this project. All development work must follow the rules and guidelines defined there.

## 🚀 Quick Start

### Prerequisites

- Node.js 22.x
- pnpm package manager
- Git

### Installation

```bash
# Clone the repository
gh repo clone Joshua-Lowry/wolfgang-pop-website
cd wolfgang-pop-website

# Install dependencies
pnpm install

# Run the development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 🔧 Development Workflow

This project uses a **GitHub-based workflow** with test branches:

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit:
   ```bash
   git add .
   git commit -m "Clear description of changes"
   ```

3. **Push to GitHub**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a pull request** for review

5. **After approval**, merge to `main` (production)

**⚠️ Do not commit directly to `main` during development.**

## 📦 Project Structure

```
wolfgang-pop-website/
├── docs/
│   └── SPEC.md              # Complete project specification
├── public/
│   └── images/              # Static images and assets
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Home page
│   │   ├── menu/            # Menu page
│   │   ├── about/           # About page
│   │   └── contact/         # Contact page
│   ├── components/          # Reusable UI components
│   └── lib/                 # Utility functions and helpers
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🎨 Brand Colors

The approved brand color palette:

- **Butter Yellow:** `#F3E1A4`
- **Plum Purple:** `#4B2E83`
- **Charcoal:** `#1F1F1F`
- **Warm Gray:** `#9B9B9B`

These colors are configured in `tailwind.config.ts` and should be used exclusively.

## 📄 Pages

The v1 website includes four pages:

1. **Home** (`/`) - Brand introduction and hero section
2. **Menu** (`/menu`) - Popcorn flavors and offerings
3. **About** (`/about`) - Brand story and mission
4. **Contact** (`/contact`) - Contact form and information

## 🛠️ Available Scripts

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start

# Run linter
pnpm run lint
```

## 🤖 AI Agent Development

This project is designed to be developed using **Cursor's AI Agent**. All AI agents must:

- Read `docs/SPEC.md` in full before starting any task
- Follow the defined scope and not add features beyond v1
- Work in feature branches, not directly on `main`
- Use clear, descriptive commit messages
- Ask for clarification if requirements are unclear

## 🚫 Out of Scope for v1

The following features are **explicitly excluded** from Version 1:

- Online ordering or payments
- User accounts or authentication
- Databases or CMS systems
- Blog functionality
- Advanced animations
- Third-party UI frameworks beyond Tailwind CSS

See `docs/SPEC.md` for complete scope boundaries.

## 📊 Definition of Done

Work is complete when:

- ✅ All pages exist and render correctly
- ✅ Navigation works between all pages
- ✅ Site is responsive and mobile-friendly
- ✅ Contact form sends emails successfully
- ✅ Branding follows approved guidelines
- ✅ No out-of-scope features added
- ✅ `pnpm run build` succeeds without errors
- ✅ All changes committed and pushed

## 🌐 Deployment

The site is deployed on **Vercel** with **Cloudflare** DNS management.

Deployment happens automatically when changes are merged to `main`.

## 📞 Contact

For questions or clarifications about the project, refer to the specification document or contact the project owner.

## 📝 License

This project is proprietary and confidential.

---

**Version:** 1.0  
**Last Updated:** December 27, 2025
