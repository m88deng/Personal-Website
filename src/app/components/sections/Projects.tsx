import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { SiGithub } from "react-icons/si";
// import { Github, ExternalLink } from "lucide-react";
import { PROJS } from "../../data/portfolioData";
import { THEME_COLOR_KEYS as THEME_KEYS } from "../shared/theme";

function ProjCard({
  p,
  i,
  colorKey,
  inView,
}: {
  p: (typeof PROJS)[0];
  i: number;
  colorKey: string;
  inView: boolean;
}) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.09 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative bg-card border border-border overflow-hidden cursor-pointer group"
      style={{
        borderColor: hov ? `var(${colorKey}-border)` : "",
        boxShadow: hov
          ? `0 0 56px var(${colorKey}-bg), inset 0 0 40px var(${colorKey}-bg)`
          : "",
        transition: "border-color 0.3s, box-shadow 0.35s",
      }}
    >

      {/* Top accent bar */}
      <div
        className="absolute top-0 inset-x-0 h-0.5 transition-opacity duration-300"
        style={{
          backgroundColor: `var(${colorKey})`,
          opacity: hov ? 1 : 0.45,
        }}
      />

      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono-code text-[9px] text-muted-foreground/45 tracking-widest">
            PROJ_{p.id}
          </span>
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <SiGithub className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
              </a>
            )}
            {/* <ExternalLink className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" /> */}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl uppercase tracking-widest font-semibold text-foreground mb-3">
          {p.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="font-mono-code text-[9px] px-2 py-1 border tracking-widest transition-colors duration-200"
              style={{
                borderColor: hov ? `var(${colorKey}-border)` : `var(${colorKey}-bg)`,
                color: hov ? `var(${colorKey})` : "",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono-code text-[10px] text-primary tracking-[0.5em] uppercase">
          CH.03
        </span>
        <h2 className="font-display text-5xl md:text-7xl uppercase text-foreground">
          Projects
        </h2>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJS.map((p, i) => {
          const colorKey = THEME_KEYS[i % THEME_KEYS.length];
          return (
            <ProjCard key={p.id} p={p} i={i} colorKey={colorKey} inView={inView} />
          );
        })}
      </div>
    </section>
  );
}
