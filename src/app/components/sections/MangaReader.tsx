import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  BookOpen,
  ScrollText,
  Maximize2,
  Minimize2,
  ArrowLeftRight,
} from "lucide-react";
import LazyImage from "../shared/LazyImage";

// Load all manga images dynamically from the images/manga folder via Vite glob
const mangaModules = import.meta.glob<{ default: string }>(
  "../../images/manga/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  { eager: true }
);

interface MangaPage {
  pageNum: number;
  src: string;
  isCover: boolean;
}

// Parse and sort pages numerically (0.png -> 1.jpg -> ... -> 52.jpg)
const MANGA_PAGES: MangaPage[] = Object.entries(mangaModules)
  .map(([path, module]) => {
    const match = path.match(/\/(\d+)\.(png|jpg|jpeg|PNG|JPG|JPEG)$/i);
    const pageNum = match ? parseInt(match[1], 10) : 0;
    return {
      pageNum,
      src: module.default,
      isCover: pageNum === 0,
    };
  })
  .sort((a, b) => a.pageNum - b.pageNum);

export default function MangaReader({ onClose }: { onClose: () => void }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [mode, setMode] = useState<"page" | "scroll">("page");
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr"); // Left-to-Right or traditional Right-to-Left
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const totalPages = MANGA_PAGES.length;
  const current = MANGA_PAGES[currentPage] || MANGA_PAGES[0];

  // Navigation handlers
  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  }, [totalPages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (mode === "page") {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          if (direction === "ltr") handlePrev();
          else handleNext();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          if (direction === "ltr") handleNext();
          else handlePrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mode, direction, handlePrev, handleNext, onClose]);

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Swipe handlers for mobile page view
  const handleDragEnd = (_event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      if (direction === "ltr") handlePrev();
      else handleNext();
    } else if (info.offset.x < -threshold) {
      if (direction === "ltr") handleNext();
      else handlePrev();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
      className="fixed inset-0 z-[300] bg-[#06060c] text-foreground flex flex-col select-none"
    >
      {/* Top Header Bar */}
      <header className="h-14 border-b border-border/40 bg-background/90 backdrop-blur-md px-4 md:px-8 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 font-mono-code text-[10px] tracking-widest uppercase border border-border/50 bg-card px-3 py-1.5 rounded hover:text-primary hover:border-primary/40 transition-colors cursor-pointer"
          >
            [ ← Exit Reader ]
          </button>
          <div className="hidden sm:block">
            <h1 className="font-display text-sm md:text-base uppercase tracking-wider text-foreground">
              From My Heart
            </h1>
            <p className="font-mono-code text-[8px] tracking-[0.25em] text-muted-foreground uppercase">
              One-Shot Manga · 2021
            </p>
          </div>
        </div>

        {/* Center Page indicator / selector */}
        <div className="flex items-center gap-2">
          {mode === "page" ? (
            <div className="flex items-center gap-2 bg-card/60 border border-border/40 px-3 py-1 rounded">
              <span className="font-mono-code text-[10px] text-primary tracking-widest">
                {current.isCover ? "COVER" : `PAGE ${current.pageNum} / ${totalPages - 1}`}
              </span>
              <select
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className="bg-transparent font-mono-code text-[10px] text-muted-foreground focus:outline-none cursor-pointer"
              >
                {MANGA_PAGES.map((p, idx) => (
                  <option key={p.pageNum} value={idx} className="bg-[#0c0d16] text-white">
                    {p.isCover ? "Cover" : `Page ${p.pageNum}`}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <span className="font-mono-code text-[10px] text-muted-foreground tracking-widest hidden md:inline-block">
              52 PAGES · CONTINUOUS SCROLL
            </span>
          )}
        </div>

        {/* Right Tools Controls */}
        <div className="flex items-center gap-2">
          {/* Mode Switcher: Page vs Scroll */}
          <div className="flex items-center border border-border/40 bg-card rounded p-0.5">
            <button
              onClick={() => setMode("page")}
              title="Page-by-page reader"
              className={`p-1.5 rounded transition-all cursor-pointer ${
                mode === "page"
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setMode("scroll")}
              title="Continuous webtoon scroll"
              className={`p-1.5 rounded transition-all cursor-pointer ${
                mode === "scroll"
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ScrollText className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* LTR / RTL Direction (Page mode only) */}
          {mode === "page" && (
            <button
              onClick={() => setDirection((d) => (d === "ltr" ? "rtl" : "ltr"))}
              title={`Reading Direction: ${direction === "ltr" ? "Left-to-Right" : "Right-to-Left (Manga style)"}`}
              className="hidden md:flex items-center gap-1 font-mono-code text-[9px] tracking-wider border border-border/40 bg-card px-2.5 py-1.5 rounded text-muted-foreground hover:text-foreground hover:border-border transition-colors cursor-pointer"
            >
              <ArrowLeftRight className="w-3 h-3 text-primary" />
              <span>{direction.toUpperCase()}</span>
            </button>
          )}

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded border border-border/40 bg-card text-muted-foreground hover:text-foreground transition-colors cursor-pointer hidden sm:block"
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="w-3.5 h-3.5" />
            ) : (
              <Maximize2 className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded border border-border/40 bg-card text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      {mode === "page" ? (
        /* PAGE BY PAGE READER */
        <main className="flex-1 relative flex items-center justify-between p-4 md:p-8 overflow-hidden">
          {/* Previous Page Button / Zone */}
          <button
            onClick={direction === "ltr" ? handlePrev : handleNext}
            disabled={direction === "ltr" ? currentPage === 0 : currentPage === totalPages - 1}
            className={`p-3 md:p-4 rounded-full border border-border/40 bg-card/70 backdrop-blur-md transition-all cursor-pointer z-10 ${
              (direction === "ltr" ? currentPage === 0 : currentPage === totalPages - 1)
                ? "opacity-20 cursor-not-allowed"
                : "hover:border-primary/50 hover:text-primary"
            }`}
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Current Page Canvas Display */}
          <div className="flex-1 h-full flex flex-col items-center justify-center relative overflow-hidden py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="h-full max-h-[82vh] flex items-center justify-center relative shadow-[0_15px_50px_rgba(0,0,0,0.9)] cursor-grab active:cursor-grabbing"
              >
                <img
                  src={current.src}
                  alt={current.isCover ? "Cover" : `Page ${current.pageNum}`}
                  decoding="async"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="max-h-[82vh] max-w-full object-contain rounded border border-border/40 bg-[#0e0f18] pointer-events-none select-none"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Page Button / Zone */}
          <button
            onClick={direction === "ltr" ? handleNext : handlePrev}
            disabled={direction === "ltr" ? currentPage === totalPages - 1 : currentPage === 0}
            className={`p-3 md:p-4 rounded-full border border-border/40 bg-card/70 backdrop-blur-md transition-all cursor-pointer z-10 ${
              (direction === "ltr" ? currentPage === totalPages - 1 : currentPage === 0)
                ? "opacity-20 cursor-not-allowed"
                : "hover:border-primary/50 hover:text-primary"
            }`}
            aria-label="Next Page"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Bottom helper info */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono-code text-[8px] tracking-[0.3em] text-muted-foreground/40 uppercase pointer-events-none hidden md:block">
            [ Keyboard: Left / Right Arrow · Click Sides · Swipe ]
          </div>
        </main>
      ) : (
        /* CONTINUOUS SCROLL WEBTOON READER */
        <main
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col items-center py-8 px-4 gap-4 bg-[#08080f]"
        >
          <div className="max-w-2xl w-full flex flex-col items-center gap-4">
            {MANGA_PAGES.map((page) => (
              <div
                key={page.pageNum}
                className="w-full flex flex-col items-center gap-2 border border-border/30 bg-[#0e0f18] rounded-md overflow-hidden shadow-xl"
              >
                <LazyImage
                  src={page.src}
                  alt={page.isCover ? "Cover" : `Page ${page.pageNum}`}
                  containerClassName="w-full min-h-[450px]"
                  className="w-full h-auto object-contain pointer-events-none select-none"
                />
                <div className="py-2 px-4 w-full bg-card/40 border-t border-border/20 flex justify-between items-center text-muted-foreground font-mono-code text-[9px] tracking-widest uppercase">
                  <span>From My Heart</span>
                  <span>{page.isCover ? "Cover" : `Page ${page.pageNum} / ${totalPages - 1}`}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
    </motion.div>
  );
}
