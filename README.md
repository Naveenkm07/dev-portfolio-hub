 # Dev Portfolio Hub
 
 A modern, animated developer portfolio hub built as a small full-stack monorepo.
 
 - **Frontend**: React (CRA) + CRACO
 - **Backend**: FastAPI (ASGI) + Motor (async MongoDB)
 - **Database**: MongoDB (local or Atlas)
 
 ## Highlights
 
 - **Modern single-page portfolio** with sections for hero, skills, links, and about
 - **Rich motion UX**: typing effect, scroll-reveal, 3D tilt, parallax background, navigation dots
 - **Simple API** (`/api`) backed by MongoDB (sample status-check endpoints)
 - **Monorepo structure** with clean separation: `frontend/` and `backend/`
 
 ## Tech Stack
 
 ### Frontend
 
 - React + CRACO
 - Tailwind CSS (`tailwind-merge`, `tailwindcss-animate`)
 - Radix UI primitives
 - `lucide-react` icons
 - `axios`
 
 ### Backend
 
 - FastAPI
 - Uvicorn
 - Motor (`AsyncIOMotorClient`)
 - `python-dotenv`
 
 ## Project Structure
 
 - `frontend/` React app
   - `src/components/Home.jsx` main portfolio page
   - `.env` frontend environment variables
 - `backend/` FastAPI app
   - `server.py` API server (routes mounted under `/api`)
   - `requirements.txt` Python dependencies
   - `.env` backend environment variables
 
 ## Quickstart (Local)
 
 ### Prerequisites
 
 - Node.js (latest LTS recommended)
 - Yarn classic v1 (repo specifies `yarn@1.22.22`)
 - Python 3.10+
 - MongoDB (local) or MongoDB Atlas connection string
 
 ### 1) Backend
 
 Create/edit `backend/.env`:
 
 - `MONGO_URL` (example: `mongodb://localhost:27017`)
 - `DB_NAME` (example: `test_database`)
 - `CORS_ORIGINS` (comma-separated, or `*` for local dev)
 
 Run:
 
 ```bash
 pip install -r backend/requirements.txt
 uvicorn --app-dir backend server:app --reload --host 0.0.0.0 --port 8000
 ```
 
 Backend URLs:
 
 - API root: `http://localhost:8000/api/`
 - Swagger UI: `http://localhost:8000/docs`
 
 ### 2) Frontend
 
 Ensure `frontend/.env` has the backend URL:
 
 - `REACT_APP_BACKEND_URL=http://localhost:8000`
 
 Run:
 
 ```bash
 yarn --cwd frontend install
 yarn --cwd frontend start
 ```
 
 Frontend will be available at `http://localhost:3000`.
 
 ## Environment Variables
 
 ### Backend (`backend/.env`)
 
 - `MONGO_URL` Mongo connection string
 - `DB_NAME` Mongo database name
 - `CORS_ORIGINS` Comma-separated list of allowed origins (or `*`)
 
 ### Frontend (`frontend/.env`)
 
 - `REACT_APP_BACKEND_URL` Backend base URL (example: `http://localhost:8000`)
 - `ENABLE_HEALTH_CHECK` Optional dev/build toggle (`true`/`false`)
 - `WDS_SOCKET_PORT` Dev-server socket port (present in repo; keep as-is unless you know you need to change it)
 
 ## Scripts
 
### Frontend (`frontend/`)
 
- `yarn start` Start dev server (CRACO)
- `yarn build` Production build
- `yarn test` Test runner
 
### Backend (`backend/`)
 
- `uvicorn --app-dir backend server:app --reload --host 0.0.0.0 --port 8000` Run the API locally from the repo root
 
## API (Backend)
 
Routes are mounted under `/api`:
 
- `GET /api/` Returns a simple hello response
- `POST /api/status` Inserts a status check document into MongoDB
- `GET /api/status` Lists recent status checks
 
See full API docs at `http://localhost:8000/docs`.
 
 ## Customize Your Portfolio
 
 Most personalization is in `frontend/src/components/Home.jsx`:
 
 - Update **name/title/location**
 - Update **links** (Portfolio/GitHub/LinkedIn)
 - Replace **placeholder images** with your own assets
 - Adjust **skills** list and section labels
 
 ## Deployment Notes
 
 - **Frontend**
   - Build with `yarn --cwd frontend build`
   - Deploy the build output to Netlify/Vercel/static hosting
 - **Backend**
   - Deploy to any ASGI-capable host (Render/Railway/Fly.io/etc.)
   - Set production `CORS_ORIGINS` to your deployed frontend URL
   - Use a managed MongoDB (Atlas) for production
 
 ## License
 
 Add a license file if you plan to make this public.
