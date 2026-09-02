import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { JOBS } from "../../data/portfolioData";
import { THEME_COLOR_KEYS } from "../shared/theme";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [expanded, setExpanded] = useState(false);
  const visibleJobs = expanded ? JOBS : JOBS.slice(0, 3);

  return (
    <section
      id="experience"
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
          CH.02
        </span>
        <h2 className="font-display text-5xl md:text-7xl uppercase text-foreground">
          Experience
        </h2>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      <div className="relative md:pl-36">
        {/* Timeline line — draws itself downward */}
        <motion.div
          className="absolute left-0 md:left-28 top-0 bottom-0 w-px bg-border hidden md:block origin-top"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
        <div className="space-y-12">
          {visibleJobs.map((j, i) => {
            const entryDelay = 0.4 + (i % 3) * 0.28; // cycle delay based on visibility slice index
            const jColor = THEME_COLOR_KEYS[i % THEME_COLOR_KEYS.length];

            return (
              <div key={i} className="relative">
                {/* Timeline dot — pops in with spring */}
                <motion.div
                  className="absolute -left-8 top-[1.625rem] w-3 h-3 border-2 hidden md:block"
                  style={{
                    borderColor: `var(${jColor}-border)`,
                    backgroundColor: `var(${jColor}-bg)`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ type: "spring", stiffness: 380, damping: 18, delay: entryDelay }}
                />
                {/* Dot glow pulse */}
                <motion.div
                  className="absolute -left-8 top-[1.625rem] w-3 h-3 hidden md:block pointer-events-none"
                  style={{
                    backgroundColor: `var(${jColor})`,
                    borderRadius: "50%",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: [0, 2.5, 0], opacity: [0, 0.35, 0] } : {}}
                  transition={{ duration: 0.9, delay: entryDelay + 0.05, ease: "easeOut" }}
                />
                {/* Date label — fades in from left */}
                <motion.div
                  className="hidden md:block absolute -left-36 top-6 text-right w-24"
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: entryDelay + 0.1 }}
                >
                  <div className="leading-none mt-1">
                    <div
                      className="font-mono-code text-xs leading-none tracking-[0.15em]"
                      style={{ color: `var(${jColor})` }}
                    >
                      {j.from.yr}
                    </div>
                    <div className="font-mono-code text-[9px] tracking-[0.2em] text-muted-foreground/50 uppercase mt-0.5">
                      {j.from.mo}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-0.5 my-2 pr-0.5">
                    {[0, 1, 2].map(k => (
                      <div
                        key={k}
                        className="w-px h-1.5"
                        style={{
                          backgroundColor: `var(${jColor})`,
                          opacity: 0.25 + k * 0.15,
                        }}
                      />
                    ))}
                  </div>
                  <div className="leading-none">
                    {j.to.yr ? (
                      <>
                        <div className="font-mono-code text-xs leading-none tracking-[0.15em] text-muted-foreground">
                          {j.to.yr}
                        </div>
                        <div className="font-mono-code text-[9px] tracking-[0.2em] text-muted-foreground/50 uppercase mt-0.5">
                          {j.to.mo}
                        </div>
                      </>
                    ) : (
                      <div className="font-mono-code text-[10px] tracking-[0.2em] text-muted-foreground/70 uppercase">
                        {j.to.mo}
                      </div>
                    )}
                  </div>
                </motion.div>
                {/* Card — unfolds from top */}
                <motion.div
                  className="relative border border-border bg-card overflow-hidden group"
                  initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
                  animate={inView ? { clipPath: "inset(0 0 0% 0)", opacity: 1 } : {}}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: entryDelay + 0.08 }}
                >
                  <motion.div
                    className="p-6 hover:border-foreground/15 transition-colors duration-300"
                    initial={{ y: -16 }}
                    animate={inView ? { y: 0 } : {}}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: entryDelay + 0.08 }}
                  >
                    <div
                      className="absolute top-0 left-0 h-full w-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
                      style={{ backgroundColor: `var(${jColor})` }}
                    />
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-3 text-xs">
                      <div className="flex items-center gap-2">
                        <span
                          className="font-mono-code tracking-widest font-medium"
                          style={{ color: `var(${jColor})` }}
                        >
                          {j.co}
                        </span>
                        <span className="text-border">·</span>
                        <span className="font-mono-code tracking-widest text-muted-foreground">
                          {j.loc}
                        </span>
                      </div>
                      
                      <span className="hidden md:inline text-border">·</span>
                      <span className="font-mono-code tracking-widest text-muted-foreground/50 md:text-muted-foreground block md:inline w-full md:w-auto mt-0.5 md:mt-0">
                        {j.period}
                      </span>
                    </div>
                    <h3 className="text-lg tracking-widest uppercase font-semibold text-foreground/70 mb-4">
                      {j.role}
                    </h3>
                    <ul className="space-y-2">
                      {j.wins.map((w, k) => (
                        <li key={k} className="flex gap-3 text-sm text-muted-foreground">
                          <span style={{ color: `var(${jColor})` }} className="shrink-0 mt-0.5">
                            ›
                          </span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* View More / Collapse Toggle Button */}
      {JOBS.length > 3 && (
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] flex justify-center mt-12">
          <motion.div
            className="relative border border-border bg-card overflow-hidden group"
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={inView ? { clipPath: "inset(0 0 0% 0)", opacity: 1 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
          >
            <button
              onClick={() => setExpanded(!expanded)}
              className="font-mono-code text-[10px] tracking-[0.25em] uppercase px-6 py-2.5 border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300 rounded cursor-pointer"
            >
              {expanded ? "See Less" : "View More"}
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
