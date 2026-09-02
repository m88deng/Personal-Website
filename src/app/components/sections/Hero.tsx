import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import ArtCarousel3D from "../effects/ArtCarousel3D";
import Grain from "../effects/Grain";
import GlitchText from "../shared/GlitchText";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -150]);
  const op = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-start overflow-y-auto">
      <ArtCarousel3D />
      <Grain />

      {/* Edge gradient overlays to blend the 3D scene boundaries */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      {/* Cyan accent ring shifted to the left background */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "min(70vw, 700px)",
          height: "min(70vw, 700px)",
          background:
            "radial-gradient(circle, rgba(0,229,200,0.055) 0%, transparent 70%)",
          left: "20%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <motion.div
        style={{ y, opacity: op }}
        className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 select-none text-left flex flex-col items-start justify-center pointer-events-none"
      >
        {/* Volume label - left aligned */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-primary" />
          <span className="font-mono-code text-[10px] tracking-[0.45em] text-primary uppercase">
            Portfolio — Vol. 01
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="space-y-2"
        >
          <h1
            className="font-title leading-[0.82] tracking-tight uppercase"
            style={{ fontSize: "clamp(3.5rem, 15vw, 13rem)" }}
          >
            <GlitchText text="MELISSA" />
          </h1>
          <h1
            className="font-title leading-[0.82] tracking-tight uppercase"
            style={{ fontSize: "clamp(3.5rem, 15vw, 13rem)" }}
          >
            <span className="text-outline">DENG</span>
          </h1>
        </motion.div>

        {/* Dual identity - left aligned */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8"
        >
          <span className="font-mono-code text-xs tracking-[0.35em] text-[#00e5c8] uppercase">
            Software Engineer
          </span>
          <span className="text-border text-xl">
            ×
          </span>
          <span className="font-mono-code text-xs tracking-[0.35em] text-[#ff2d7a] uppercase">
            Visual Artist
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll cue - positioned absolutely at the bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none pointer-events-none"
      >
        <span className="font-mono-code text-[9px] tracking-[0.5em] text-muted-foreground uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* Corner annotations */}
      <div className="absolute top-16 left-6 font-mono-code text-[9px] text-muted-foreground/35 tracking-widest">
        [SYS:ONLINE]
      </div>
      <div className="absolute top-16 right-6 flex flex-col items-end gap-1.5 font-mono-code text-[9px] text-muted-foreground/35 tracking-widest">
        <div className="hidden md:block">████████░░ 80%</div>
        {/* <div>MTL / 2026</div> */}
      </div>
    </section>
  );
}
