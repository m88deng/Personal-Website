# Melissa Deng Portfolio Website — Vol. 01

A highly interactive portfolio website combining web development engineering and creative visual arts.

## 🛠️ Tech Stack
- **React 18**: Frontend user interface library.
- **TypeScript**: Typed safety for graphics rendering loops and UI state.
- **Tailwind CSS v4**: Utility-first styling engine integrated via Vite.
- **Three.js**: Renders the interactive, gesture-dragged 3D coverflow carousel.
- **Motion (Framer Motion v12)**: Orchestrates spring physics, dragging window states, and scroll animations.
- **Vite**: Ultra-fast build tool and bundler.

---

## 🚀 How to Run the Project

The best way to run this project is using **Node.js** with `npm` (the package lock format matches `npm`).

### 1. Install Dependencies
Run the following command in the project root to install the required dependencies:
```bash
npm install
```

### 2. Start Local Development Server
Launch the development environment:
```bash
npm run dev
```
This starts the local dev server (usually at `http://localhost:5173`). Vite hot-module replacement (HMR) will automatically refresh changes in the browser.

### 3. Build for Production
Generate optimized static production assets in the `dist/` directory:
```bash
npm run build
```

### 4. Preview the Production Build
Test the compiled production bundle locally:
```bash
npm run preview
```

---

## 📁 Architecture & Directory Structure

The project has been refactored into modular components following clean coding principles:

```
personal_website_v3.0/
├── src/
│   ├── app/
│   │   ├── App.tsx                     # Main page entry point and orchestrator
│   │   ├── data/
│   │   │   └── portfolioData.ts        # Extracted data configurations (jobs, arts, projects)
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   └── Nav.tsx             # Responsive sticky navigation bar
│   │   │   ├── sections/
│   │   │   │   ├── Hero.tsx            # Intro banner with 3D carousel
│   │   │   │   ├── About.tsx           # OS-like terminals and stats grid
│   │   │   │   ├── Experience.tsx      # Manga chapter career timeline
│   │   │   │   ├── Projects.tsx        # Projects directory
│   │   │   │   ├── Artworks.tsx        # Graphic artwork photo masonry grid
│   │   │   │   └── Contact.tsx         # Contact footer links
│   │   │   ├── shared/
│   │   │   │   ├── GlitchText.tsx      # RGB split graphics text
│   │   │   │   ├── TypedCode.tsx       # Typewriter simulation timer loops
│   │   │   │   ├── GhosttyPanel.tsx    # Terminal screen simulators
│   │   │   │   └── WindowFrames.tsx    # OS window headers and title chromes
│   │   │   ├── effects/
│   │   │   │   ├── InkCanvas.tsx       # Follow-cursor canvas ink trail particles
│   │   │   │   ├── SpeedLines.tsx      # SVG manga action line generators
│   │   │   │   ├── Grain.tsx           # Paper texture backdrop overlay
│   │   │   │   └── ArtCarousel3D.tsx   # Three.js 3D Coverflow carousel
│   │   │   └── ui/                     # UI Primitives (Radix UI etc.)
│   │   └── styles/                     # CSS stylesheets and Tailwind config
```
