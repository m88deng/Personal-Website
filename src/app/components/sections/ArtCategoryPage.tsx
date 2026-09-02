import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ALL_ARTWORKS, ART_SECTIONS } from "../../data/artData";
import LazyImage from "../shared/LazyImage";

function useColumnCount() {
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setCols(1);
      else if (w < 768) setCols(2);
      else if (w < 1024) setCols(3);
      else setCols(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cols;
}

export default function ArtCategoryPage({
  categoryIndex,
  openShowcaseInitially = false,
  onClose,
  onChangeCategory,
}: {
  categoryIndex: number | null;
  openShowcaseInitially?: boolean;
  onClose: () => void;
  onChangeCategory: (index: number) => void;
}) {
  const cols = useColumnCount();

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

  const [activeFilter, setActiveFilter] = useState<string>(
    categoryIndex !== null && categoryIndex !== undefined && ART_SECTIONS[categoryIndex]
      ? ART_SECTIONS[categoryIndex].t
      : "All"
  );
  
  const [selectedArtIdx, setSelectedArtIdx] = useState<number | null>(
    openShowcaseInitially ? 0 : null
  );

  const filters = ["All", ...ART_SECTIONS.map((s) => s.t)];

  const filteredArtworks = useMemo(() => {
    if (activeFilter === "All") return allArtworks;
    return allArtworks.filter((art) => art.categoryTitle === activeFilter);
  }, [activeFilter, allArtworks]);

  const totalImages = filteredArtworks.length;
  const currentArtwork = selectedArtIdx !== null ? (filteredArtworks[selectedArtIdx] as any) : null;

  const handlePrevImage = useCallback(() => {
    if (selectedArtIdx !== null && selectedArtIdx > 0) {
      setSelectedArtIdx((prev) => (prev !== null ? prev - 1 : null));
    }
  }, [selectedArtIdx]);

  const handleNextImage = useCallback(() => {
    if (selectedArtIdx !== null && selectedArtIdx < totalImages - 1) {
      setSelectedArtIdx((prev) => (prev !== null ? prev + 1 : null));
    }
  }, [selectedArtIdx, totalImages]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setSelectedArtIdx(null);
    const foundIdx = ART_SECTIONS.findIndex((s) => s.t === filter);
    if (foundIdx !== -1) {
      onChangeCategory(foundIdx);
    }
  };

  const columnBuckets = useMemo(() => {
    const buckets: Array<Array<(typeof filteredArtworks)[0] & { originalIndex: number }>> =
      Array.from({ length: cols }, () => []);

    filteredArtworks.forEach((art, idx) => {
      buckets[idx % cols].push({ ...art, originalIndex: idx });
    });

    return buckets;
  }, [filteredArtworks, cols]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedArtIdx !== null) {
          setSelectedArtIdx(null);
        } else {
          onClose();
        }
        return;
      }
      if (selectedArtIdx === null) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedArtIdx, handlePrevImage, handleNextImage, onClose]);

  return (
    <div className="min-h-screen bg-[#08080f] text-foreground flex flex-col pt-20">
      
      <header className="py-6 px-6 md:px-12 flex flex-col gap-6 max-w-7xl mx-auto w-full z-10">
        <button
          onClick={onClose}
          className="font-mono-code text-[10px] tracking-widest uppercase border border-border/60 bg-card px-4 py-2 hover:text-[#00e5c8] hover:border-[#00e5c8]/30 transition-all duration-300 rounded cursor-pointer self-start"
        >
          ← Back to Portfolio
        </button>

        <div className="flex flex-wrap items-center gap-2 border-b border-border/20 pb-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`font-mono-code text-[9px] tracking-widest uppercase px-4 py-2 rounded-full border transition-all cursor-pointer ${
                activeFilter === f
                  ? "bg-white text-black border-white"
                  : "border-border/40 text-muted-foreground hover:text-white hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pb-24 z-10">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`grid gap-4 items-start ${
            cols === 1
              ? "grid-cols-1"
              : cols === 2
              ? "grid-cols-2"
              : cols === 3
              ? "grid-cols-3"
              : "grid-cols-4"
          }`}
        >
          {columnBuckets.map((colArtworks, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {colArtworks.map((art) => (
                <div
                  key={`${art.title}-${art.originalIndex}`}
                  className="group relative overflow-hidden border border-border/40 bg-[#100d18] cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all"
                  onClick={() => setSelectedArtIdx(art.originalIndex)}
                >
                  <LazyImage
                    src={art.src}
                    alt={art.title}
                    containerClassName="w-full min-h-[140px]"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-102 select-none"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                    <div className="space-y-1">
                      <span
                        className="font-mono-code text-[8px] tracking-widest uppercase block"
                        style={{ color: art.categoryColor || "#00e5c8" }}
                      >
                        {art.categoryTitle} · {art.date}
                      </span>
                      <span className="font-mono-code text-[11px] tracking-widest text-white uppercase block">
                        {art.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </main>

      <AnimatePresence>
        {selectedArtIdx !== null && currentArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 bg-black/98 flex flex-col items-center justify-center p-6 select-none"
          >
            <div className="absolute inset-0 opacity-20 filter blur-2xl overflow-hidden pointer-events-none">
              <img
                src={currentArtwork.src}
                alt=""
                draggable={false}
                className="w-full h-full object-cover scale-110 select-none pointer-events-none"
              />
            </div>

            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={() => setSelectedArtIdx(null)}
                className="text-white/60 hover:text-white transition-colors p-2 cursor-pointer bg-black/50 border border-white/10 rounded-full"
                aria-label="Close Showcase"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Immersive Focus Image Slider */}
            <div className="w-full max-w-4xl flex items-center justify-between gap-4 relative z-10 select-none">
              {/* Left Arrow (Boundary Restricted) */}
              <button
                onClick={handlePrevImage}
                disabled={selectedArtIdx === 0}
                className={`p-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white transition-all cursor-pointer ${
                  selectedArtIdx === 0 ? "opacity-10 cursor-not-allowed" : "hover:border-[#00e5c8]/40 hover:text-[#00e5c8]"
                }`}
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Viewport for image */}
              <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] select-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedArtIdx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex flex-col items-center max-h-[78vh] select-none pointer-events-none"
                  >
                    <img
                      src={currentArtwork.src}
                      alt={currentArtwork.title}
                      decoding="async"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      className="max-h-[72vh] max-w-full object-contain rounded shadow-2xl border border-white/10 select-none pointer-events-none"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow (Boundary Restricted) */}
              <button
                onClick={handleNextImage}
                disabled={selectedArtIdx === totalImages - 1}
                className={`p-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-white transition-all cursor-pointer ${
                  selectedArtIdx === totalImages - 1 ? "opacity-10 cursor-not-allowed" : "hover:border-[#00e5c8]/40 hover:text-[#00e5c8]"
                }`}
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Low-profile Minimal Museum Metadata Bar */}
            <div className="mt-6 text-center space-y-1 relative z-10 select-none">
              <h3 className="font-display text-lg tracking-widest text-white uppercase">
                {currentArtwork.title}
              </h3>
              <p className="font-mono-code text-[10px] text-white/50 tracking-widest uppercase">
                {currentArtwork.medium || currentArtwork.categoryM}
                {currentArtwork.dimensions && ` · ${currentArtwork.dimensions}`}
                {currentArtwork.date && ` in ${currentArtwork.date}`}
              </p>
              <div className="font-mono-code text-[9px] text-white/30 tracking-widest pt-1">
                {selectedArtIdx + 1} / {totalImages}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
