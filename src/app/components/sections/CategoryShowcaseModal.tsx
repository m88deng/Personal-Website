import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ALL_ARTWORKS, ART_SECTIONS } from "../../data/artData";

export default function CategoryShowcaseModal({
  categoryIndex,
  initialCategoryIndex,
  onClose,
  onOpenGalleryCategory,
}: {
  categoryIndex?: number;
  initialCategoryIndex?: number;
  onClose: () => void;
  onOpenGalleryCategory?: (categoryIndex: number) => void;
}) {
  const totalCategories = ART_SECTIONS.length;
  const rawInitial = categoryIndex !== undefined ? categoryIndex : (initialCategoryIndex !== undefined ? initialCategoryIndex : 0);
  const safeInitial = Math.min(Math.max(typeof rawInitial === "number" && !isNaN(rawInitial) ? rawInitial : 0, 0), totalCategories - 1);

  const [catIdx, setCatIdx] = useState<number>(safeInitial);

  // Sync if prop changes
  useEffect(() => {
    if (categoryIndex !== undefined && !isNaN(categoryIndex)) {
      setCatIdx(Math.min(Math.max(categoryIndex, 0), totalCategories - 1));
    }
  }, [categoryIndex, totalCategories]);

  const section = ART_SECTIONS[catIdx] || ART_SECTIONS[0];
  const matchingArt = ALL_ARTWORKS.find((a) => a.src === section?.img) || section?.artworks?.[0];
  const displayImg = section?.img || matchingArt?.src || "";

  const handlePrev = useCallback(() => {
    if (catIdx > 0) setCatIdx((prev) => prev - 1);
  }, [catIdx]);

  const handleNext = useCallback(() => {
    if (catIdx < totalCategories - 1) setCatIdx((prev) => prev + 1);
  }, [catIdx, totalCategories]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
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
  }, [handlePrev, handleNext, onClose]);

  if (!section) return null;

  const displayTitle = matchingArt?.title || section.t;
  const displayMedium = matchingArt?.medium || section.m;
  const displayDim = matchingArt?.dimensions || section.dim;
  const displayDate = matchingArt?.date ? ` · ${matchingArt.date}` : "";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 select-none"
    >
      {/* Background ambient art blur */}
      {displayImg && (
        <div className="absolute inset-0 opacity-15 filter blur-2xl overflow-hidden pointer-events-none">
          <img
            key={section.t}
            src={displayImg}
            alt=""
            draggable={false}
            className="w-full h-full object-cover scale-110 select-none pointer-events-none transition-all duration-700"
          />
        </div>
      )}

      {/* Top Header Bar */}
      <div className="absolute top-6 inset-x-6 max-w-5xl mx-auto flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: section.color }}
          />
          <span className="font-mono-code text-[11px] uppercase tracking-[0.25em] text-white">
            {section.t}
          </span>
          <span className="font-mono-code text-[10px] text-muted-foreground/60 tracking-wider">
            [ Category {catIdx + 1} / {totalCategories} · {section.artworks.length} Works ]
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full border border-white/15 bg-black/50 hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
          aria-label="Close Showcase"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Slider Viewport */}
      <div className="w-full max-w-4xl flex items-center justify-between gap-4 relative z-10">
        {/* Left Arrow (navigates to previous category) */}
        <button
          onClick={handlePrev}
          disabled={catIdx === 0}
          className={`p-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white transition-all cursor-pointer ${
            catIdx === 0
              ? "opacity-10 cursor-not-allowed"
              : "hover:border-[#00e5c8]/40 hover:text-[#00e5c8]"
          }`}
          aria-label="Previous Category"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Category Image Display */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col items-center max-h-[75vh] select-none pointer-events-none"
            >
              {displayImg && (
                <img
                  src={displayImg}
                  alt={displayTitle}
                  decoding="async"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10 select-none pointer-events-none"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow (navigates to next category) */}
        <button
          onClick={handleNext}
          disabled={catIdx === totalCategories - 1}
          className={`p-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white transition-all cursor-pointer ${
            catIdx === totalCategories - 1
              ? "opacity-10 cursor-not-allowed"
              : "hover:border-[#00e5c8]/40 hover:text-[#00e5c8]"
          }`}
          aria-label="Next Category"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Metadata Bar */}
      <div className="mt-6 text-center space-y-1 relative z-10 select-none">
        <div className="flex items-center justify-center gap-2">
          <span
            className="font-mono-code text-[9px] uppercase tracking-widest px-2 py-0.5 rounded border border-white/10"
            style={{ color: section.color }}
          >
            {section.t}
          </span>
        </div>
        <h3 className="font-display text-lg tracking-widest text-white uppercase pt-1">
          {displayTitle}
        </h3>
        <p className="font-mono-code text-[10px] text-white/50 tracking-widest uppercase">
          {displayMedium}
          {displayDim && ` · ${displayDim}`}
          {displayDate}
        </p>

        {onOpenGalleryCategory && (
          <button
            onClick={() => {
              onClose();
              onOpenGalleryCategory(catIdx);
            }}
            className="inline-flex items-center gap-1 mt-3 font-mono-code text-[10px] tracking-widest uppercase text-[#00e5c8] hover:underline cursor-pointer"
          >
            [ View All {section.artworks.length} {section.t} in Gallery → ]
          </button>
        )}
      </div>

    </motion.div>
  );
}
