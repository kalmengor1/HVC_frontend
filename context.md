# Frontend Context (HVC)

## Stack & Architecture
- **Framework:** React 19 (Vite) + TypeScript.
- **Styling:** Tailwind CSS v4, utilizing CSS variables mapped to `@theme` in `src/index.css`.
- **Icons & UI:** `lucide-react` for icons, `sonner` for toast notifications.
- **Routing:** `react-router-dom` v7 (setup in `main.tsx` and `App.tsx`).

## Global Colors (`index.css` via Tailwind v4)
- `--color-brand-primary`: `#4fa8e2` (Celeste, main buttons/links)
- `--color-brand-primary-dark`: `#3a7fb0` (Hover states)
- `--color-brand-secondary`: `#f5e642` (Yellow/Oro)
- `--color-brand-surface`: `#f7f9fe` (Light background)
- `--color-brand-text`: `#181c20` (Dark text)

## Authentication Flow (`/`)
- Component: `src/pages/Login.tsx`
- Layout: Responsive (1-column mobile with card, 2-column desktop with background image `Inicio.webp`).
- State: Local `useState` for `email`, `password`, `showPassword`.
- Mock Submission: Validates non-empty fields, simulates a 1.5s delay, and shows a `sonner` toast promise (`toast.promise`).

*Note for LLMs: When creating new components, ensure they are responsive, use the brand color variables (`bg-brand-primary`, `text-brand-text`), and leverage `lucide-react` for iconography.*
