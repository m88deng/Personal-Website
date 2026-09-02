import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowLeft, Grid } from "lucide-react";
import { ALL_ARTWORKS, ART_SECTIONS } from "../../data/artData";
import LazyImage from "../shared/LazyImage";

export default function GalleryShowcasePage({
  initialArtworkIndex = 0,
  activeFilter = "All",
  onBackToGallery,
  onCloseToPortfolio,
}: {
  initialArtworkIndex: number;
  activeFilter?: string;
  onBackToGallery: () => void;
  onCloseToPortfolio?: () => void;
}) {
  // Master artwork list
  const allArtworks = useMemo(() => {
    return ALL_ARTWORKS.map((art) => {
      const section = ART_SECTIONS.find((s) => s.t === art.category);
      return {
        ...art,
        categoryTitle: art.category,
        categoryColor: section?.color || "#00e5c8",
        categoryDim: section?.dim || "",
        categoryM: section?.m || "",
      };
    });
  }, []);

  // Filtered artworks if a category was active
  const filteredArtworks = useMemo(() => {
    if (activeFilter === "All") return allArtworks;
    return allArtworks.filter((art) => art.categoryTitle === activeFilter);
  }, [activeFilter, allArtworks]);

  const totalImages = filteredArtworks.length;
  const safeInitial = Math.min(Math.max(initialArtworkIndex, 0), totalImages - 1);
  const [currentIdx, setCurrentIdx] = useState<number>(safeInitial);

  const currentArtwork = filteredArtworks[currentIdx] || filteredArtworks[0];

  const handlePrev = useCallback(() => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  }, [currentIdx]);

  const handleNext = useCallback(() => {
    if (currentIdx < totalImages - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  }, [currentIdx, totalImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onBackToGallery();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, onBackToGallery]);

  if (!currentArtwork) return null;

  return (
    <div className="min-h-screen bg-[#08080f] text-foreground flex flex-col pt-20 select-none relative overflow-hidden">
      {/* Background ambient artwork glow */}
      <div className="absolute inset-0 opacity-15 filter blur-3xl overflow-hidden pointer-events-none transition-all duration-700">
        <img
          key={currentArtwork.src}
          src={currentArtwork.src}
          alt=""
          draggable={false}
          className="w-full h-full object-cover scale-110 select-none pointer-events-none"
        />
      </div>

      {/* Top Header Navigation Bar */}
      <header className="py-6 px-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto w-full z-20">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToGallery}
            className="font-mono-code text-[10px] tracking-widest uppercase border border-border/60 bg-card/80 px-4 py-2 hover:text-[#00e5c8] hover:border-[#00e5c8]/40 transition-all duration-300 rounded cursor-pointer flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            ← Back to Gallery
          </button>

          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/40 bg-card/50 text-[9px] font-mono-code tracking-widest uppercase">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: currentArtwork.categoryColor || "#00e5c8" }}
            />
            {currentArtwork.categoryTitle}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono-code text-[10px] text-muted-foreground/70 tracking-widest uppercase">
            [ {currentIdx + 1} / {totalImages} ]
          </span>

          {onCloseToPortfolio && (
            <button
              onClick={onCloseToPortfolio}
              className="font-mono-code text-[10px] tracking-widest uppercase border border-border/40 bg-card/40 px-3 py-2 text-muted-foreground hover:text-white hover:border-white/20 transition-all rounded cursor-pointer hidden md:flex items-center gap-1.5"
            >
              <Grid className="w-3 h-3" />
              Portfolio
            </button>
          )}
        </div>
      </header>

      {/* Main Canvas Viewport */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-12 flex items-center justify-between gap-4 relative z-10 my-auto">
        {/* Previous Image Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentIdx === 0}
          className={`p-3 md:p-4 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white transition-all cursor-pointer ${
            currentIdx === 0
              ? "opacity-10 cursor-not-allowed"
              : "hover:border-[#00e5c8]/40 hover:text-[#00e5c8] hover:scale-105"
          }`}
          aria-label="Previous Artwork"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
        </button>

        {/* Center Artwork View */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[62vh] max-h-[74vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentArtwork.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center max-h-[72vh] max-w-full pointer-events-none"
            >
              <LazyImage
                src={currentArtwork.src}
                alt={currentArtwork.title}
                containerClassName="max-h-[72vh] max-w-full rounded-lg shadow-2xl border border-white/15 bg-[#0e0f18]"
                className="max-h-[72vh] max-w-full object-contain pointer-events-none select-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Image Arrow */}
        <button
          onClick={handleNext}
          disabled={currentIdx === totalImages - 1}
          className={`p-3 md:p-4 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white transition-all cursor-pointer ${
            currentIdx === totalImages - 1
              ? "opacity-10 cursor-not-allowed"
              : "hover:border-[#00e5c8]/40 hover:text-[#00e5c8] hover:scale-105"
          }`}
          aria-label="Next Artwork"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      </main>

      {/* Museum Artwork Metadata Bar */}
      <footer className="py-8 px-6 text-center space-y-1.5 relative z-20 max-w-4xl mx-auto w-full">
        <div className="flex items-center justify-center gap-2">
          <span
            className="font-mono-code text-[8px] uppercase tracking-widest px-2 py-0.5 rounded border border-white/10"
            style={{ color: currentArtwork.categoryColor || "#00e5c8" }}
          >
            {currentArtwork.categoryTitle}
          </span>
        </div>

        <h2 className="font-display text-xl md:text-2xl tracking-widest text-white uppercase pt-1">
          {currentArtwork.title}
        </h2>

        <p className="font-mono-code text-[11px] text-white/55 tracking-widest uppercase">
          {currentArtwork.medium || currentArtwork.categoryM}
          {currentArtwork.dimensions && ` · ${currentArtwork.dimensions}`}
          {currentArtwork.date && ` in ${currentArtwork.date}`}
        </p>
        
      </footer>
    </div>
  );
}
