# Frontend (Dev Portfolio Hub)

This is the React frontend for **Dev Portfolio Hub**.

For the full monorepo setup (backend + database), see the root `README.md`.

## Stack

- React (Create React App) with **CRACO**
- Tailwind CSS
- Radix UI primitives
- `lucide-react` icons

## Prerequisites

- Node.js (latest LTS recommended)
- Yarn classic v1 (`yarn@1.22.22`)

## Environment Variables

Create or edit `frontend/.env`:

- `REACT_APP_BACKEND_URL=http://localhost:8000`
- `ENABLE_HEALTH_CHECK=false`

This repo also includes `WDS_SOCKET_PORT=443`. Keep it as-is unless you have a specific dev-server networking need.

## Run Locally

From the repo root:

```bash
yarn --cwd frontend install
yarn --cwd frontend start
```

The dev server will usually start at `http://localhost:3000`.

## Scripts

Run these from `frontend/` (or with `yarn --cwd frontend <script>`):

- `yarn start` Start dev server (CRACO)
- `yarn build` Create a production build
- `yarn test` Run tests

## Customize

The main portfolio page is implemented in `src/components/Home.jsx` (hero, skills, links, about + animations).
