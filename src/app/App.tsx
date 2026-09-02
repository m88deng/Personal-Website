import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import ArtCategoryPage from "./components/sections/ArtCategoryPage";
import Nav from "./components/layout/Nav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Artworks from "./components/sections/Artworks";
import Contact from "./components/sections/Contact";

export default function App() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number | null>(null);
  const [openShowcaseOnLoad, setOpenShowcaseOnLoad] = useState<boolean>(false);

  const handleOpenCategory = (idx: number | null, openShowcase: boolean = true) => {
    // If idx is null (e.g. View All in Gallery), use -1 to represent "All"
    setActiveCategoryIdx(idx === null ? -1 : idx);
    setOpenShowcaseOnLoad(openShowcase);
    window.history.pushState({ gallery: true }, "", "#gallery");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleCloseCategory = () => {
    setActiveCategoryIdx(null);
    setOpenShowcaseOnLoad(false);
    window.history.pushState(null, "", "#artworks");
  };

  const handleNavigate = (id: string) => {
    const wasSubpageOpen = activeCategoryIdx !== null;
    setActiveCategoryIdx(null);
    setOpenShowcaseOnLoad(false);

    setTimeout(() => {
      if (id === "top" || id === "home" || id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", window.location.pathname);
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${id}`);
        }
      }
    }, wasSubpageOpen ? 300 : 10);
  };

  // Scroll to target section when returning from subpage
  useEffect(() => {
    if (activeCategoryIdx === null) {
      const hash = window.location.hash.replace("#", "");
      if (hash === "artworks" || hash === "gallery") {
        const timer = setTimeout(() => {
          const el = document.getElementById("artworks");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [activeCategoryIdx]);

  // Support native browser Back & Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash !== "#gallery" && activeCategoryIdx !== null) {
        setActiveCategoryIdx(null);
        setOpenShowcaseOnLoad(false);
      } else if (hash === "#gallery" && activeCategoryIdx === null) {
        setActiveCategoryIdx(-1);
        setOpenShowcaseOnLoad(false);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [activeCategoryIdx]);

  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden relative">
      {/* Anchor global Nav header consistently above all pages */}
      <Nav onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        {activeCategoryIdx !== null ? (
          <motion.div
            key="category-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <ArtCategoryPage
              categoryIndex={activeCategoryIdx >= 0 ? activeCategoryIdx : null}
              openShowcaseInitially={openShowcaseOnLoad}
              onClose={handleCloseCategory}
              onChangeCategory={(idx) => {
                setActiveCategoryIdx(idx);
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Artworks onOpenCategory={handleOpenCategory} />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}