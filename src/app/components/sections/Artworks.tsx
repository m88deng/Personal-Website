import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { BookOpen, Sparkles } from "lucide-react";
import { ART_SECTIONS } from "../../data/artData";
import mangaCover from "../../images/manga/0.png";
import MangaReader from "./MangaReader";
import CategoryShowcaseModal from "./CategoryShowcaseModal";
import LazyImage from "../shared/LazyImage";

export default function Artworks({
  onOpenCategory,
}: {
  onOpenCategory: (index: number | null, openShowcase?: boolean) => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showMangaReader, setShowMangaReader] = useState(false);
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number | null>(null);

  return (
    <section
      id="artworks"
      ref={ref}
      className="py-32 px-6 max-w-7xl mx-auto relative"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono-code text-[10px] text-primary tracking-[0.5em] uppercase">
          CH.04
        </span>
        <h2 className="font-display text-5xl md:text-7xl uppercase text-foreground">
          Artworks
        </h2>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      {/* ── Featured Manga Spotlight Section ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="border border-border/60 bg-card/40 rounded-xl p-6 md:p-10 mb-16 backdrop-blur-md shadow-2xl relative overflow-hidden group"
      >
        {/* Subtle accent corner glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* Left Column: Manga Cover Art */}
          <div className="md:col-span-5 flex justify-center">
            <div
              onClick={() => setShowMangaReader(true)}
              className="relative aspect-[3/4] w-full max-w-sm rounded-lg overflow-hidden border border-border/70 shadow-2xl group/cover cursor-pointer bg-[#0e0f18]"
            >
              <LazyImage
                src={mangaCover}
                alt="From My Heart Manga Cover"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/cover:scale-105 pointer-events-none select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover/cover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                <span className="font-mono-code text-[10px] text-primary tracking-widest uppercase flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> [ Open Manga Reader ]
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Manga Description & Read Action */}
          <div className="md:col-span-7 flex flex-col justify-center gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono-code tracking-widest uppercase bg-primary/15 text-primary border border-primary/30">
                  <Sparkles className="w-2.5 h-2.5" /> Featured One-Shot
                </span>
                <span className="font-mono-code text-[9px] text-muted-foreground/60 tracking-widest">
                  2021 · 52 PAGES
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-5xl uppercase tracking-wider text-foreground">
                From My Heart
              </h3>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">"From My Heart"</span> is an inspiring one-shot manga created in 2021 that follows the self-discovery journey of a sixteen-year-old teenager, May. The 52-page manga remains to this day my most challenging project as it merges my drawing and storytelling skills, resulting in a heartfelt and relatable creative work. The unwavering support of family and friends throughout the process was crucial in completing this ambitious project.
            </p>

            {/* <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setShowMangaReader(true)}
                className="inline-flex items-center gap-3 font-mono-code text-xs tracking-widest uppercase bg-primary text-black font-semibold px-6 py-3 rounded hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(0,229,200,0.4)] transition-all duration-300 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                Read Now
              </button>
            </div> */}
          </div>
        </div>
      </motion.div>

      {/* ── Square Artwork Category Showcase Row ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <div className="font-mono-code text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          
          </div>
          <button
            onClick={() => onOpenCategory(null, false)}
            className="font-mono-code text-[10px] tracking-widest uppercase text-primary hover:underline cursor-pointer flex items-center gap-1"
          >
            View All in Gallery →
          </button>
        </div>

        {/* 5 Perfect Square Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {ART_SECTIONS.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setSelectedCategoryIdx(idx)}
              className="relative aspect-square rounded-lg overflow-hidden border border-border/60 bg-[#0e0f18] group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <LazyImage
                src={section.img}
                alt={section.t}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Hover Dark Gradient with Titles */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent transition-opacity duration-300 flex flex-col justify-end p-3.5 ${
                  activeCard === idx ? "opacity-100" : "opacity-0 md:opacity-0"
                }`}
              >
                <div className="space-y-0.5">
                  <span
                    className="font-mono-code text-[8px] tracking-widest uppercase block"
                    style={{ color: section.color }}
                  >
                    {section.artworks.length} Works
                  </span>
                  <h4 className="font-display text-xs md:text-sm uppercase tracking-wider text-white">
                    {section.t}
                  </h4>
                  <p className="font-mono-code text-[8px] text-muted-foreground/70 tracking-wider truncate">
                    {section.m}
                  </p>
                </div>
              </div>

              {/* Active hover accent border */}
              <div
                className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
                style={{ borderColor: section.color }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Manga Reader Overlay Modal */}
      <AnimatePresence>
        {showMangaReader && (
          <MangaReader onClose={() => setShowMangaReader(false)} />
        )}
      </AnimatePresence>

      {/* Category Artworks Showcase Modal (Directly on Portfolio) */}
      <AnimatePresence>
        {selectedCategoryIdx !== null && (
          <CategoryShowcaseModal
            categoryIndex={selectedCategoryIdx}
            onClose={() => setSelectedCategoryIdx(null)}
            onOpenGalleryCategory={(catIdx) => onOpenCategory(catIdx, false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
