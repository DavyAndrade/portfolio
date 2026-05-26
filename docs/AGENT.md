# AGENT.md — AI Agent Guide for Portfolio

This document is intended for AI agents working on the Portfolio codebase. Read it entirely before making any changes.

---

## 🏗️ Project Architecture

Portfolio is an Astro 6 site with Vue components and Tailwind CSS v4. It is built with:

| Layer | Technology | Location |
|---|---|---|
| Framework | Astro 6 | `src/pages/`, `src/layouts/` |
| UI Components | Vue 3 single-file components | `src/components/` |
| Styling | Tailwind CSS v4 + custom tokens | `src/styles/global.css` |
| Icons | lucide-vue-next | `src/components/*` |
| Utilities | clsx + tailwind-merge | `src/lib/utils.ts` |
| Content | JSON content | `content.json` |
| Design System | Spotify-inspired spec | `DESIGN.md` |

### Rendering Flow

```
Astro page (src/pages/index.astro)
  └── Layout wrapper (src/layouts/Layout.astro)
        └── Vue components (src/components/*.vue)
              └── Tailwind classes + global.css tokens
```

### Folder Responsibilities

```
src/
├── pages/        Astro routes
├── layouts/      Shared HTML structure + global CSS import
├── components/   Vue components used by Astro pages
├── styles/       Tailwind imports + theme tokens
├── lib/          Shared utilities (cn)
└── assets/       Static assets imported in code
public/           Static files served as-is
```

---

## 📐 Conventions

### TypeScript
- Strict mode is on via `astro/tsconfigs/strict`.
- Avoid `any`. Use `unknown` for unsafe values.
- Use explicit return types for reusable helpers in `src/lib/`.

### File Naming
- Files: `kebab-case` for Astro, `PascalCase` for Vue components.
- Vue components are single-purpose and should be small.

### Components
- Prefer Vue components in `src/components/` and compose them in `src/pages/`.
- Only use scripts in Vue when needed for data, icons, or interactivity.
- Keep sections accessible: semantic tags, headings ordered, and meaningful aria labels when needed.

### Styling
- Tailwind CSS v4 is the default; keep styles in class lists.
- Global theme tokens live in `src/styles/global.css`.
- Follow the Spotify-inspired look from `DESIGN.md` unless explicitly asked to change the theme.
- Prefer the existing dark palette and zinc/near-black surfaces already used in the site.

### Content
- Update text content via `content.json` when possible.
- Keep Portuguese copy consistent with the rest of the site.

---

## 🛠️ How to Safely Modify Code

### Adding a new section
1. Create a Vue component in `src/components/`.
2. Import it into `src/pages/index.astro`.
3. Style with Tailwind classes and reuse tokens from `src/styles/global.css`.
4. Prefer data-driven text in `content.json` if the copy is reused.

### Editing styles
- Adjust tokens in `src/styles/global.css` only when needed.
- Avoid duplicating styles across components; prefer utility classes or shared tokens.

### Running the project
```bash
astro dev      # development server
astro build    # production build
astro preview  # preview build
```

---

## ❌ Things the Agent Must NOT Do

- Do not add new dependencies unless explicitly requested.
- Do not edit files in `node_modules/`.
- Do not replace Tailwind with custom CSS unless required.
- Do not introduce a new design direction without updating `DESIGN.md`.
- Do not add comments that only explain what the code does.

---

## 🤖 AI Development Rules

### Prompt discipline
- Keep changes minimal and localized.
- Avoid rewriting whole files when a targeted edit works.
- If a component’s public API must remain stable, do not change its props or emitted events.

### Anti-patterns to avoid

| Anti-pattern | Correct approach |
|---|---|
| Duplicated layout logic across sections | Extract a shared component |
| Over-engineered abstractions | Implement only what is requested |
| Excessive comments for trivial code | Prefer clear naming and structure |
| Introducing new fonts or palettes casually | Follow `DESIGN.md` and existing tokens |
