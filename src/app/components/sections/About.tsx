import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { BRAILLE_CAT_1, BRAILLE_CAT_2 } from "../../data/portfolioData";
import { WinChrome, WinTabStrip } from "../shared/WindowFrames";
import GhosttyPanel from "../shared/GhosttyPanel";

// Standardized window width presets
const WIN_SIZES = {
  s: 320,  
  m: 440, 
  l: 560,  
  xl: 640,
} as const;
    
function SlotCounter({ value, trigger }: { value: string; trigger: boolean }) {
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (!trigger) {
      const initial = value.replace(/\d/g, "0");
      setDisplayValue(initial);
      return;
    }

    const regex = /(\d+)|(\D+)/g;
    const matches = [...value.matchAll(regex)];
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = progress * (2 - progress);

      const current = matches
        .map((match) => {
          const text = match[0];
          if (/\d/.test(text)) {
            const targetNum = parseInt(text, 10);
            const currentNum = Math.floor(ease * targetNum);
            return String(currentNum).padStart(text.length, "0");
          }
          return text;
        })
        .join("");

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, trigger]);

  return <span>{displayValue}</span>;
}

type WinId = "me" | "engineer" | "artist" | "ascii";

export default function About() {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [zOrder, setZOrder] = useState<WinId[]>(["me", "engineer", "artist", "ascii"]);
  const [catFrame, setCatFrame] = useState(BRAILLE_CAT_1);
  const [asciiHovered, setAsciiHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!inView) return;
    const intervalTime = asciiHovered ? 200 : 800;
    const interval = setInterval(() => {
      setCatFrame((prev) =>
        prev === BRAILLE_CAT_1 ? BRAILLE_CAT_2 : BRAILLE_CAT_1
      );
    }, intervalTime);
    return () => clearInterval(interval);
  }, [inView, asciiHovered]);

  const stats = [
    { v: "06", u: "WKT", l: "Internships" },
    { v: "20+", u: "PRS", l: "Shipped" },
    { v: "85+", u: "WRK", l: "Artworks" },
    { v: "01", u: "VOL", l: "Manga" },
  ];

  const zFor = (id: WinId) => (zOrder.indexOf(id) + 1) * 10;
  const bringFront = (id: WinId) =>
    setZOrder((p) => [...p.filter((w) => w !== id), id]);

  const winCls =
    "overflow-hidden border border-[#2e3048] bg-[#21222c] shadow-[0_28px_70px_rgba(0,0,0,0.7)] cursor-grab active:cursor-grabbing select-none";

  return (
    <section id="about" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono-code text-[10px] text-primary tracking-[0.5em] uppercase">CH.01</span>
        <h2 className="font-display text-5xl md:text-7xl uppercase text-foreground">About Me</h2>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      {/* ── Floating terminal windows ───────────────────────────── */}
      <div ref={containerRef} className="relative mb-4 w-full md:h-[720px] flex flex-col md:block gap-8">

        {/* ME.EXE ── foremost by default */}
        <motion.div
          drag={isMobile ? false : true}
          dragMomentum={false}
          dragConstraints={containerRef}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          onPointerDown={() => bringFront("me")}
          className={winCls}
          style={{
            position: isMobile ? "relative" : "absolute",
            left: isMobile ? "auto" : 0,
            top: isMobile ? "auto" : 70,
            width: isMobile ? "100%" : WIN_SIZES.xl,
            zIndex: zFor("me"),
          }}
        >
          <WinChrome title="ARCHIVE // 01-A [ORIGIN]" />
          <WinTabStrip path="~/portfolio" />
          <div style={{ backgroundColor: "var(--term-bg)" }}>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <span style={{ color: "var(--term-accent-red)" }}>▶</span>
                <span className="font-mono-code text-[10px] tracking-[0.28em] uppercase" style={{ color: "rgba(255,255,255,0.52)" }}>
                  ME.EXE
                </span>
              </div>
              <div className="flex gap-5 items-end">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.55, duration: 0.9 }}
                  className="flex-1 font-mono-code text-xs leading-[1.85] space-y-3"
                  style={{ color: "rgba(255,255,255,0.46)" }}
                >
                  <p>My name is Melissa Deng. I am a software engineering student at the University of Waterloo by day and an artist at night.</p>

                  <p>Passionate for imagination and problem-solving, I thrive to deliver smooth web experience to users.</p> 
                  <p>My ultimate goal is to bridge the gap between creativity and functionality, turning ideas into realities through my coding skills.</p>
                </motion.div>
                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.0, duration: 0.7 }}
                  className="font-mono-code text-[8px] leading-[1.55] shrink-0"
                  style={{ color: "var(--term-accent-cyan)", opacity: 0.55 }}
                >
                  
                </motion.pre>
              </div>
            </div>
            <div className="px-5 pb-3 font-mono-code text-[8px]" style={{ color: "rgba(255,255,255,0.13)" }}>
              [01 / 04]
            </div>
          </div>
        </motion.div>

        {/* ENGINEER.EXE */}
        <motion.div
          drag={isMobile ? false : true}
          dragMomentum={false}
          dragConstraints={containerRef}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
          onPointerDown={() => bringFront("engineer")}
          className={winCls}
          style={{
            position: isMobile ? "relative" : "absolute",
            left: isMobile ? "auto" : "49%",
            top: isMobile ? "auto" : 0,
            width: isMobile ? "100%" : WIN_SIZES.l,
            zIndex: zFor("engineer"),
          }}
        >
          <WinChrome title="ARCHIVE // 01-B [ENGINEERING]" />
          <GhosttyPanel
            accentColor="#00e5c8"
            sessionName="~/portfolio"
            promptLabel="tech.stach"
            badge1="v2026.8"
            badge2="mdeng"
            panelLabel="[02 / 04]"
            code={`const stack = {\n  languages:  ["C/C++", "Go", "Python", "TypeScript"],\n  frameworks: ["React", "Three.js", "Node.js", "SpringBoot"],\n  tools:      ["Docker", "Git", "Grafana", "Telegraf", "InfluxDB"],\n};`}
            inView={inView}
            typeDelay={0.85}
          />
        </motion.div>

        {/* ARTIST.BRUSH ── furthest back by default */}
        <motion.div
          drag={isMobile ? false : true}
          dragMomentum={false}
          dragConstraints={containerRef}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
          onPointerDown={() => bringFront("artist")}
          className={winCls}
          style={{
            position: isMobile ? "relative" : "absolute",
            left: isMobile ? "auto" : "26%",
            top: isMobile ? "auto" : 380,
            width: isMobile ? "100%" : WIN_SIZES.m,
            zIndex: zFor("artist"),
          }}
        >
          <WinChrome title="ARCHIVE // 01-C [STUDIO]" />
          <GhosttyPanel
            accentColor="#ff2d7a"
            sessionName="~/art"
            promptLabel="artist.medium"
            badge1="v4.02"
            badge2="tokyo"
            panelLabel="[03 / 04]"
            code={`media.push(\n  "Acrylic on Canvas",  "Graphic Design",\n  "Colored Pencils",    "Digital Art",\n  "Graphite",           "Manga,"\n)`}
            inView={inView}
            typeDelay={2.3}
          />
        </motion.div>

        {/* ASCII ART ── small accent terminal, right side */}
        <motion.div
          drag={isMobile ? false : true}
          dragMomentum={false}
          dragConstraints={containerRef}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          onPointerDown={() => bringFront("ascii")}
          onMouseEnter={() => setAsciiHovered(true)}
          onMouseLeave={() => setAsciiHovered(false)}
          className={winCls}
          style={{
            position: isMobile ? "relative" : "absolute",
            left: isMobile ? "auto" : "68%",
            top: isMobile ? "auto" : 236,
            width: isMobile ? "100%" : WIN_SIZES.s,
            zIndex: zFor("ascii"),
          }}
        >
          <WinChrome title="ARCHIVE // 01-D [DEMO]" />
          <WinTabStrip path="~/art" />
          <div style={{ backgroundColor: "var(--term-bg)" }}>
            <div className="px-4 pt-4 pb-3">
              <div className="flex items-center gap-2 mb-6">
                <span style={{ color: "var(--term-accent-red)" }}>▶</span>
                <span className="font-mono-code text-[10px] tracking-[0.28em] uppercase" style={{ color: "rgba(255,255,255,0.52)" }}>
                  bongo cat.gif
                </span>
              </div>
              <motion.pre
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="overflow-hidden ml-6"
                style={{
                  color: "var(--term-accent-pink)",
                  opacity: 0.5,
                  fontFamily: "var(--font-symbols)",
                  fontSize: "14px",
                  lineHeight: 1,
                  whiteSpace: "pre",
                  letterSpacing: "-0.14em",
                  fontVariantEastAsian: "normal",
                  fontFeatureSettings: '"tnum"',
                  display: "inline-block",
                  height: "130px",
                }}
              >
                {catFrame}
              </motion.pre>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.34 }}
        className="bg-card border border-border p-6 relative mt-16 md:mt-0"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-5xl text-foreground">
                <SlotCounter value={s.v} trigger={inView} />
              </div>
              <div className="font-mono-code text-[9px] text-primary tracking-[0.35em] uppercase mt-1">{s.u}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="absolute top-4 right-4 font-mono-code text-[9px] text-muted-foreground/35">[04 / 04]</div>
      </motion.div>
    </section>
  );
}
