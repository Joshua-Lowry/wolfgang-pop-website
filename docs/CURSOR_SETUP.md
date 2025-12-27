# Cursor AI Agent Setup Guide

This document provides instructions for setting up and using Cursor AI Agent to develop the Wolfgang Pop website.

## Prerequisites

Before you begin, ensure you have:

1. **Cursor IDE** installed on your local machine
2. **Git** configured with your GitHub credentials
3. **Node.js 22.x** and **pnpm** installed
4. Access to the GitHub repository: `Joshua-Lowry/wolfgang-pop-website`

## Initial Setup

### 1. Clone the Repository

Open your terminal and clone the repository to your local machine:

```bash
gh repo clone Joshua-Lowry/wolfgang-pop-website
cd wolfgang-pop-website
```

Alternatively, using standard Git:

```bash
git clone https://github.com/Joshua-Lowry/wolfgang-pop-website.git
cd wolfgang-pop-website
```

### 2. Install Dependencies

Install all project dependencies using pnpm:

```bash
pnpm install
```

### 3. Open in Cursor

Open the project directory in Cursor IDE:

```bash
cursor .
```

Or use the Cursor IDE menu: **File → Open Folder** and select the `wolfgang-pop-website` directory.

### 4. Verify Setup

Test that the development server runs correctly:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the default Next.js page.

## Understanding the Project Structure

The project follows this structure:

```
wolfgang-pop-website/
├── docs/
│   ├── SPEC.md              # ⭐ MUST READ - Complete specification
│   └── CURSOR_SETUP.md      # This file
├── public/
│   └── images/              # Static images and assets
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Home page
│   │   ├── layout.tsx       # Root layout
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable UI components
│   └── lib/                 # Utility functions
├── .cursorrules             # Cursor AI Agent rules
├── tailwind.config.ts       # Tailwind configuration with brand colors
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Critical: Read the Specification

**Before starting any development work, you MUST read the complete specification:**

📖 **[docs/SPEC.md](./SPEC.md)**

The specification document contains:

- Project vision and purpose
- Version 1 scope boundaries (what is and isn't included)
- Brand rules (colors, logo, typography, tone)
- Page requirements for Home, Menu, About, and Contact
- Technical and development rules
- Definition of Done criteria
- Agent instructions

**The specification is the single source of truth for this project.**

## Cursor AI Agent Configuration

The project includes a `.cursorrules` file that configures Cursor AI Agent with project-specific rules. This file:

- Enforces the specification requirements
- Prevents scope creep
- Ensures consistent code quality
- Defines the development workflow

Cursor AI Agent will automatically read and follow these rules when you use AI features in the IDE.

## Development Workflow

### Creating a New Feature

1. **Create a feature branch** from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **Use Cursor AI Agent** to implement the feature:
   - Use **Cmd+K** (Mac) or **Ctrl+K** (Windows/Linux) to open the AI command palette
   - Describe what you want to build
   - The AI Agent will follow the `.cursorrules` and specification

3. **Test your changes**:
   ```bash
   pnpm run dev
   ```

4. **Build to verify** no errors:
   ```bash
   pnpm run build
   ```

5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Clear description of changes"
   ```

6. **Push to GitHub**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** on GitHub for review

8. **After approval**, merge to `main`

### Important Workflow Rules

- ⚠️ **NEVER commit directly to `main`** during development
- Always work in feature branches
- Use clear, descriptive commit messages
- Test thoroughly before pushing
- Ensure `pnpm run build` succeeds without errors

## Using Cursor AI Agent Effectively

### Best Practices

1. **Be Specific**: When asking the AI to build something, reference the specification:
   - ✅ "Build the Home page hero section according to docs/SPEC.md section 4"
   - ❌ "Make a cool homepage"

2. **Stay in Scope**: The AI is configured to reject out-of-scope features:
   - ✅ "Create a contact form that sends email"
   - ❌ "Add a user login system" (out of scope for v1)

3. **Use Context**: The AI has access to all project files:
   - ✅ "Update the Menu page to use the brand colors from tailwind.config.ts"
   - ✅ "Follow the typography guidelines in docs/SPEC.md"

4. **Iterate**: Break complex tasks into smaller steps:
   - ✅ "First, create the navigation component"
   - ✅ "Now, add the navigation to the layout"

### Common Commands

- **Cmd/Ctrl + K**: Open AI command palette (inline editing)
- **Cmd/Ctrl + L**: Open AI chat sidebar (conversation mode)
- **Cmd/Ctrl + I**: Generate code from comment

### Example Prompts

Here are some effective prompts for building the Wolfgang Pop website:

```
"Create the Home page (src/app/page.tsx) following the requirements in docs/SPEC.md section 4. Include a hero section with the brand name, tagline, and CTA."

"Build a reusable Navigation component in src/components/Navigation.tsx that links to all four pages. Use the brand colors from tailwind.config.ts."

"Implement the Contact page with a form (Name, Email, Message) that uses Next.js Server Actions. Follow the requirements in docs/SPEC.md section 4."

"Style the Menu page to be mobile-responsive, using Tailwind CSS utilities and the approved brand colors."
```

## Brand Colors Reference

The approved brand colors are configured in `tailwind.config.ts`:

```typescript
colors: {
  'butter-yellow': '#F3E1A4',
  'plum-purple': '#4B2E83',
  'charcoal': '#1F1F1F',
  'warm-gray': '#9B9B9B',
}
```

Use these in your Tailwind classes:

```tsx
<div className="bg-butter-yellow text-plum-purple">
  <h1 className="text-charcoal">Wolfgang Pop</h1>
</div>
```

## Pages to Build (v1 Scope)

The v1 website requires exactly four pages:

1. **Home** (`/`) - `/src/app/page.tsx`
2. **Menu** (`/menu`) - `/src/app/menu/page.tsx`
3. **About** (`/about`) - `/src/app/about/page.tsx`
4. **Contact** (`/contact`) - `/src/app/contact/page.tsx`

Each page has specific requirements detailed in `docs/SPEC.md` section 4.

## Definition of Done

Before considering your work complete, verify:

- ✅ All four pages exist and render correctly
- ✅ Navigation works between all pages
- ✅ Site is responsive and mobile-friendly
- ✅ Contact form sends emails successfully
- ✅ Branding follows approved guidelines (colors, typography, tone)
- ✅ No out-of-scope features added
- ✅ `pnpm run build` succeeds without errors or warnings
- ✅ All changes committed and pushed to feature branch

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Check the error message carefully
2. Ensure all imports are correct
3. Verify TypeScript types are properly defined
4. Run `pnpm run lint` to check for linting issues

### AI Agent Not Following Rules

If the AI Agent suggests out-of-scope features:

1. Remind it to check `.cursorrules`
2. Reference the specific section in `docs/SPEC.md`
3. Be explicit: "This is out of scope for v1"

### Git Issues

If you accidentally commit to `main`:

```bash
# Reset the commit (keep changes)
git reset --soft HEAD~1

# Create a feature branch
git checkout -b feature/your-feature-name

# Commit again
git commit -m "Your commit message"
```

## Deployment

The site will be deployed to **Vercel** with **Cloudflare** DNS management.

Deployment happens automatically when changes are merged to `main`.

You don't need to configure deployment manually - it's handled through the Vercel GitHub integration.

## Getting Help

If you need clarification on requirements:

1. Check `docs/SPEC.md` first
2. Look for similar examples in the specification
3. Ask specific questions about the requirement

Remember: **If a requirement is unclear or missing, stop and ask for clarification rather than guessing.**

## Summary

To successfully develop the Wolfgang Pop website with Cursor AI Agent:

1. ✅ Read `docs/SPEC.md` completely before starting
2. ✅ Work in feature branches, never directly on `main`
3. ✅ Use the AI Agent with specific, spec-referenced prompts
4. ✅ Stay within the v1 scope boundaries
5. ✅ Use only the approved brand colors
6. ✅ Test thoroughly and ensure builds succeed
7. ✅ Follow the Definition of Done criteria

**The specification is your guide. Follow it exactly, and you'll build a successful v1 website.**

---

**Good luck building Wolfgang Pop! 🍿**
