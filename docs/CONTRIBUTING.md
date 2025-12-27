# Contributing to Wolfgang Pop Website

Thank you for your interest in contributing to the Wolfgang Pop website project. This document outlines the guidelines and workflow for contributing to this project.

## Before You Start

**This is a Version 1 (v1) project with strict scope boundaries.** Before making any contributions, you must:

1. Read the complete project specification: **[docs/SPEC.md](./SPEC.md)**
2. Understand the v1 scope limitations
3. Familiarize yourself with the brand guidelines
4. Review the technical requirements

**The specification document is the single source of truth for this project.** All contributions must align with the requirements defined in that document.

## Development Workflow

### 1. Set Up Your Environment

Follow the setup instructions in **[docs/CURSOR_SETUP.md](./CURSOR_SETUP.md)** to configure your local development environment.

Required tools:
- Node.js 22.x
- pnpm package manager
- Git
- Cursor IDE (recommended for AI Agent development)

### 2. Create a Feature Branch

Always work in a feature branch, never directly on `main`:

```bash
git checkout main
git pull origin main
git checkout -b feature/descriptive-name
```

Branch naming conventions:
- `feature/` - New features (e.g., `feature/home-page`)
- `fix/` - Bug fixes (e.g., `fix/contact-form`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `style/` - Styling changes (e.g., `style/mobile-responsive`)

### 3. Make Your Changes

When developing:

- Follow the technical rules in `docs/SPEC.md` section 5
- Use only the approved brand colors
- Keep code simple and readable
- Write TypeScript for all source files
- Use Tailwind CSS for styling
- Test your changes thoroughly

### 4. Test Your Work

Before committing, ensure:

```bash
# Development server runs without errors
pnpm run dev

# Production build succeeds
pnpm run build

# Linting passes
pnpm run lint
```

### 5. Commit Your Changes

Use clear, descriptive commit messages following this format:

```
Brief summary of changes (50 characters or less)

- Detailed point about what changed
- Another specific change
- Why the change was necessary
```

Example:

```bash
git add .
git commit -m "Add hero section to Home page

- Created hero component with brand name and tagline
- Added primary CTA button
- Implemented responsive layout for mobile
- Used approved brand colors from tailwind.config.ts"
```

### 6. Push to GitHub

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

1. Go to the GitHub repository
2. Click "New Pull Request"
3. Select your feature branch
4. Fill out the PR template (see below)
5. Request review

### 8. Address Review Feedback

- Respond to all review comments
- Make requested changes in your feature branch
- Push updates to the same branch
- Request re-review when ready

### 9. Merge to Main

Once approved:
- The PR will be merged to `main`
- Deployment to Vercel happens automatically
- Delete your feature branch after merge

## Pull Request Template

When creating a pull request, include:

```markdown
## Description
Brief description of what this PR does.

## Related Issue
Closes #[issue number] (if applicable)

## Changes Made
- Specific change 1
- Specific change 2
- Specific change 3

## Specification Reference
This PR implements requirements from:
- docs/SPEC.md section [X]

## Testing
- [ ] Tested in development mode (`pnpm run dev`)
- [ ] Production build succeeds (`pnpm run build`)
- [ ] Tested on mobile devices
- [ ] Tested in multiple browsers
- [ ] No console errors or warnings

## Screenshots
[If applicable, add screenshots showing the changes]

## Checklist
- [ ] Code follows the project specification
- [ ] Only approved brand colors used
- [ ] No out-of-scope features added
- [ ] TypeScript types are properly defined
- [ ] Code is readable and well-commented
- [ ] Commit messages are clear and descriptive
```

## Code Style Guidelines

### TypeScript

- Use TypeScript for all source files
- Define proper types for props and function parameters
- Avoid using `any` type
- Use interfaces for object shapes

Example:

```typescript
interface HeroProps {
  title: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, tagline, ctaText, ctaLink }: HeroProps) {
  // Component implementation
}
```

### React Components

- Use functional components with TypeScript
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use descriptive component and prop names

### Tailwind CSS

- Use Tailwind utility classes for styling
- Use the approved brand colors from `tailwind.config.ts`
- Follow mobile-first responsive design
- Keep class names organized and readable

Example:

```tsx
<div className="bg-butter-yellow text-plum-purple p-6 md:p-12">
  <h1 className="text-4xl font-bold mb-4">Wolfgang Pop</h1>
  <p className="text-lg text-charcoal">Fresh, delicious popcorn</p>
</div>
```

### File Organization

- Place pages in `/src/app/`
- Place reusable components in `/src/components/`
- Place utility functions in `/src/lib/`
- Keep files focused and modular

## What to Contribute

### In Scope for v1

You can contribute work on:

- **Home page** - Hero section, introduction, featured flavors, location
- **Menu page** - Popcorn flavors and descriptions
- **About page** - Brand story and mission
- **Contact page** - Contact form and information
- **Navigation component** - Links between pages
- **Footer component** - Site footer with links
- **Responsive design** - Mobile-first layouts
- **Accessibility improvements** - WCAG compliance
- **Performance optimizations** - Within v1 scope
- **Bug fixes** - Any issues found
- **Documentation** - Improvements to docs

### Out of Scope for v1

**Do not contribute work on:**

- Online ordering or payment systems
- User accounts or authentication
- Databases or CMS integration
- Admin dashboards
- Blog functionality
- Advanced animations
- Third-party UI frameworks
- Any features not listed in the specification

If you're unsure whether something is in scope, check `docs/SPEC.md` section 2 or ask before starting work.

## Reporting Issues

If you find a bug or have a question:

1. Check if an issue already exists
2. If not, create a new issue with:
   - Clear title
   - Detailed description
   - Steps to reproduce (for bugs)
   - Expected vs. actual behavior
   - Screenshots if applicable

## Questions and Clarifications

If you need clarification on requirements:

1. Check `docs/SPEC.md` first
2. Review existing issues and PRs
3. Ask in the issue or PR comments
4. Tag the project maintainer

**Do not guess or interpret requirements beyond what is written in the specification.**

## Code Review Process

All pull requests will be reviewed for:

1. **Specification compliance** - Does it follow `docs/SPEC.md`?
2. **Scope boundaries** - Is it within v1 scope?
3. **Code quality** - Is it readable and maintainable?
4. **Brand guidelines** - Does it use approved colors and tone?
5. **Testing** - Does it work correctly?
6. **Build success** - Does `pnpm run build` succeed?

Reviews may request changes. Please address all feedback before the PR can be merged.

## Definition of Done

Your contribution is complete when:

- ✅ All requirements from the specification are met
- ✅ Code follows the technical rules
- ✅ Brand guidelines are followed
- ✅ Tests pass and build succeeds
- ✅ Code is reviewed and approved
- ✅ Documentation is updated (if needed)
- ✅ No out-of-scope features added

## License

By contributing to this project, you agree that your contributions will be subject to the project's license.

## Thank You

Thank you for contributing to the Wolfgang Pop website! Your work helps bring this local brand to life online.

If you have questions about contributing, please reach out to the project maintainer.

---

**Remember: Read `docs/SPEC.md` before starting any work. It's your guide to successful contributions.**
