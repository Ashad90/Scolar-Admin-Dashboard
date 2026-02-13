# Technologies et dépendances

## Résumé
Projet frontend construit avec React et Vite, écrit en TypeScript/TSX, stylisé avec Tailwind CSS. Le package manager indiqué est Bun. Ci‑dessous la liste complète extraite de `package.json` et des fichiers de configuration.

## Frameworks & Langages
- React (JSX/TSX)
- TypeScript (fichiers `.ts` / `.tsx`)

## Outils de build / dev server
- Vite

## Package managers / lock files
- Bun (déclaré : `packageManager: "bun@1"`)
- pnpm (présence de `pnpm.overrides` dans `package.json`) — compatibilité historique

## Dépendances (runtime)
- @emotion/react (11.14.0)
- @emotion/styled (11.14.1)
- @mui/icons-material (7.3.5)
- @mui/material (7.3.5)
- @popperjs/core (2.11.8)
- Radix UI (divers modules @radix-ui/react-*)
- class-variance-authority (0.7.1)
- clsx (2.1.1)
- cmdk (1.1.1)
- date-fns (3.6.0)
- embla-carousel-react (8.6.0)
- input-otp (1.4.2)
- lucide-react (0.487.0)
- motion (12.23.24)
- next-themes (0.4.6)
- react-day-picker (8.10.1)
- react-dnd (16.0.1)
- react-dnd-html5-backend (16.0.1)
- react-hook-form (7.55.0)
- react-popper (2.3.0)
- react-resizable-panels (2.1.7)
- react-responsive-masonry (2.7.1)
- react-router (7.13.0)
- react-slick (0.31.0)
- recharts (2.15.2)
- sonner (2.0.3)
- tailwind-merge (3.2.0)
- tw-animate-css (1.3.8)
- vaul (1.1.2)

## DevDependencies
- @tailwindcss/vite (4.1.12)
- @vitejs/plugin-react (4.7.0)
- tailwindcss (4.1.12)
- vite (6.3.5)

## PeerDependencies
- react (18.3.1) — optionnel
- react-dom (18.3.1) — optionnel

## Configuration & fichiers présents
- `vite.config.ts` (plugins React + Tailwind, alias `@`)
- `postcss.config.mjs` (PostCSS config placeholder)
- `src/main.tsx` (point d'entrée React)
- Scripts npm : `dev` → `vite`, `build` → `vite build`

## Notes et recommandations
- Bun est déclaré comme package manager ; si vous utilisez Bun : `bun install` puis `bun run dev`.
- Conserver les lockfiles (ex. `bun.lockb`, `pnpm-lock.yaml`) selon le package manager choisi.

---
Fichier généré automatiquement par l'analyse du dépôt.
