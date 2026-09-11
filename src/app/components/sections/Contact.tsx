import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Ghost watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display uppercase leading-none opacity-[0.022] whitespace-nowrap"
          style={{ fontSize: "clamp(8rem, 22vw, 22rem)" }}
        >
          CONTACT
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="font-mono-code text-[10px] text-primary tracking-[0.5em] uppercase">
          CH.05
        </span>
        <h2 className="font-display text-5xl md:text-7xl uppercase text-foreground">
          {"Let's Connect"}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative z-10 max-w-2xl"
      >
        <p className="text-2xl md:text-4xl uppercase tracking-widest font-semibold leading-tight mb-8 text-foreground">
          "<span className="text-primary">Engineering</span>{" "}is a form of art and has filled the world with things of obvious visual beauty but also with subtle forms."
        </p>
        <p className="text-muted-foreground leading-relaxed mb-12 text-sm max-w-lg">
          — Louis Brown.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          <a
            href="mailto:deng_melissa@outlook.com"
            className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono-code text-xs tracking-widest uppercase hover:bg-primary/85 transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            deng_melissa@outlook.com
          </a>
          <a
            href="https://github.com/m88deng"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border border-border font-mono-code text-xs tracking-widest uppercase hover:border-foreground/30 transition-colors duration-200 text-foreground"
          >
            <SiGithub className="w-4 h-4" />
            github/m88deng
          </a>
          {/* Instagram link (commented out for later)
          <a
            href="https://www.instagram.com/meiliiart/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border border-border font-mono-code text-xs tracking-widest uppercase hover:border-foreground/30 transition-colors duration-200 text-foreground"
          >
            <SiInstagram className="w-4 h-4" />
            instagram/meiliiart
          </a>
          */}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          <span className="font-mono-code text-[9px] text-muted-foreground/45 tracking-widest uppercase">
            Melissa Deng © {new Date().getFullYear()}
          </span>
          {/* <span className="font-mono-code text-[9px] text-muted-foreground/45 tracking-widest uppercase">
            Montreal, Canada
          </span> */}
        </div>
      </motion.div>
    </section>
  );
}
