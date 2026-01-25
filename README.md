# Dev Portfolio Hub
 
 A modern, animated developer bio/portfolio hub built as a small full‑stack monorepo:
 
 - **Frontend**: React (CRA) + **CRACO**, Tailwind CSS, Radix UI, lucide-react
 - **Backend**: **FastAPI** + Motor (async MongoDB)
 - **DB**: MongoDB
 
 The UI is a single-page portfolio experience (hero, skills, links, about) with scroll reveal, 3D tilt, and parallax effects.
 
 ## Tech Stack
 
 - **Frontend**
   - React + react-router-dom
   - Tailwind CSS + tailwind-merge + tailwindcss-animate
   - Radix UI primitives
   - lucide-react icons
   - axios
 - **Backend**
   - FastAPI
   - Uvicorn
   - Motor (AsyncIOMotorClient)
   - python-dotenv
 
 ## Project Structure
 
 - `frontend/` React app (CRACO)
 - `backend/` FastAPI app
   - `server.py` API server
   - `requirements.txt` Python deps
   - `.env` backend environment variables
 
 ## Quick Start (Local)
 
 ### 1) Prerequisites
 
 - **Node.js** (recommended: latest LTS)
 - **Yarn classic (v1)** (the repo specifies `yarn@1.22.22`)
 - **Python** (3.10+ recommended)
 - **MongoDB** running locally (or a MongoDB Atlas connection string)
 
 ### 2) Backend setup
 
 Create/edit `backend/.env`:
 
 - `MONGO_URL` (e.g. `mongodb://localhost:27017`)
 - `DB_NAME` (e.g. `test_database`)
 - `CORS_ORIGINS` (comma-separated; `*` for development)
 
 Install deps and run the API:
 
 - `pip install -r backend/requirements.txt`
 - `uvicorn server:app --reload --host 0.0.0.0 --port 8000`
 
 API will be available at:
 
 - `http://localhost:8000/api/`
 - Swagger UI: `http://localhost:8000/docs`
 
 ### 3) Frontend setup
 
 Frontend environment is in `frontend/.env`.
 The app expects:
 
 - `REACT_APP_BACKEND_URL` (example: `http://localhost:8000`)
 
 Install deps and run:
 
 - `yarn --cwd frontend install`
 - `yarn --cwd frontend start`
 
 Frontend runs on CRA dev server (typically `http://localhost:3000`).
 
 ## Scripts
 
 ### Frontend (`frontend/`)
 
 - `yarn start` - start dev server (CRACO)
 - `yarn build` - production build
 - `yarn test` - run tests
 
 ### Backend (`backend/`)
 
 - Run locally with Uvicorn:
   - `uvicorn server:app --reload --host 0.0.0.0 --port 8000`
 
 ## Environment Variables
 
 ### Backend (`backend/.env`)
 
 - `MONGO_URL` - Mongo connection string
 - `DB_NAME` - database name
 - `CORS_ORIGINS` - comma-separated origins (or `*`)
 
 ### Frontend (`frontend/.env`)
 
 - `REACT_APP_BACKEND_URL` - base URL of the backend (e.g. `http://localhost:8000`)
 - `ENABLE_HEALTH_CHECK` - optional build/dev toggle
 
 ## Deployment Notes
 
 - **Frontend** can be deployed on Vercel/Netlify as a static build (CRA build output).
 - **Backend** can be deployed to any platform that supports Python + ASGI (Render/Fly.io/Railway/etc.).
 - Make sure to set the backend `CORS_ORIGINS` to your deployed frontend URL(s).
 
 ## Customization
 
 - Update your name, bio, links, and images in `frontend/src/components/Home.jsx`.
 - Replace placeholder URLs like `https://myportfolio.com` with your real links.
 
 ## License
 
 Add a license if you plan to make this public.
