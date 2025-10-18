# E-Commerce React (Vite + Tailwind + Convex)

A small e-commerce demo built with React, Vite, Tailwind CSS utilities, MUI (for occasional UI), and Convex for backend functions. This README covers how to install, run and contribute to the project.

## What you'll find here
- Fast dev server powered by Vite
- React 19 front-end components using Tailwind utility classes
- Convex directory for serverless functions / data model
- Example pages/components: `Home`, `ProductDetails`, `NotFound`, `Navbar`, `Banner`, `Newproducts`, `ProductCard`

Key files and folders:
- `src/` — main source
  - `src/main.jsx`
  - `src/App.jsx`
  - `src/index.css`, `src/App.css`
  - `src/components/` — `Banner.jsx`, `Navbar.jsx`, `Newproducts.jsx`, `ProductCard.jsx`
  - `src/pages/` — `Home.jsx`, `ProductDetails.jsx`, `NotFound.jsx`
- `convex/` — Convex functions, generated API
- `package.json` — scripts & dependencies
- `vite.config.js`, `eslint.config.js`

## Tech stack
- React 19
- Vite (dev server + build)
- Tailwind CSS (utility classes used in components)
- Convex (backend functions / data model)
- MUI (optional UI components/styles)
- ESLint for linting

## Prerequisites
- Node.js (recommended 18.x or newer)
- npm (or use yarn/pnpm if you prefer; scripts shown below use npm)

## Quick start (PowerShell)

Install dependencies:
```powershell
npm install
```

Start dev server:
```powershell
npm run dev
```
Open the app at the URL printed by Vite (typically http://localhost:5173).

Build for production:
```powershell
npm run build
```

Preview the production build locally:
```powershell
npm run preview
```

Run lint:
```powershell
npm run lint
```

## Notes about styling & images
- Tailwind utility classes are used across components (e.g. `Banner.jsx`). Ensure Tailwind is configured (Tailwind is listed in `package.json`), and `index.css` or `App.css` includes the Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`).
- Banner/background images referenced with paths like `/banner.jpg` should be placed in the `public/` folder (e.g. `public/banner.jpg`) so they resolve at the root path.

## Convex notes
- The `convex/` folder contains server-side functions and generated API files.
- If you run a local Convex dev server, use the Convex CLI as documented by Convex (commonly `convex dev`) — follow Convex docs to connect and deploy your backend.
- The front-end imports from the generated `convex/` API; ensure the Convex runtime is available during development if your pages call server functions.

## Routing
- `react-router` is included. If you want SPA navigation, prefer using `<Link to="/">` from `react-router` in place of plain `<a href="/">` to avoid full page reloads.

## Accessibility & UX
- The project uses semantic HTML and accessible attributes in components where appropriate (role/aria labels).
- The `NotFound.jsx` component shows a friendly 404 message and CTAs (Home / Go Back).

## Testing & linting
- No automated tests included by default. Consider adding unit tests with Vitest or React Testing Library.
- Linting is available via the `lint` script. Run `npm run lint` and fix reported issues.

## Deployment
- Build using `npm run build` then host the `dist/` output on Vercel, Netlify, or any static host.
- Vercel and Netlify integrate well with Vite projects — choose the `build` command (`npm run build`) and the `dist` folder as the publish directory.
- If using Convex backend, follow Convex deployment instructions in addition to the static host deployment.

## Troubleshooting
- If dev server doesn't start: ensure Node.js + npm are installed and run `npm install` again.
- Tailwind classes not applied: verify Tailwind directives exist in your entry CSS (e.g. `index.css`) and Tailwind is configured in `tailwind.config.*`.
- Missing images: confirm images are in `public/` (e.g. `public/banner.jpg`) or correct the URL in the components.

## Contributing
1. Fork the repository and create a feature branch.
2. Make changes and keep them small and focused.
3. Run `npm run lint` and verify the app runs locally (`npm run dev`).
4. Open a pull request with a description of your changes.

## Ideas / Next steps
- Add product search and filtering on `Home` page.
- Add a shopping cart (local or server-backed).
- Add unit/integration tests with Vitest + Testing Library.
- Convert CTA anchors to `react-router` `<Link>` components for SPA navigation.

## Contact / support
- For questions about this repository, open an issue or reach out to the project owner.
