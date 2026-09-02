import { useState, useEffect } from "react";
import { BRAILLE_CAT_1, BRAILLE_CAT_2 } from "../../data/portfolioData";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [catFrame, setCatFrame] = useState(BRAILLE_CAT_1);

  // Bongo cat typing animation
  useEffect(() => {
    const catInterval = setInterval(() => {
      setCatFrame((prev) => (prev === BRAILLE_CAT_1 ? BRAILLE_CAT_2 : BRAILLE_CAT_1));
    }, 150);

    return () => clearInterval(catInterval);
  }, []);

  // Hold loading screen for 2.2 seconds to showcase animation
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#08080f] flex flex-col items-center justify-center select-none">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Bongo Cat */}
        <pre
          style={{
            color: "var(--term-accent-blue)",
            fontFamily: "var(--font-symbols)",
            fontSize: "18px",
            lineHeight: 1.1,
            whiteSpace: "pre",
            letterSpacing: "-0.14em",
            fontVariantEastAsian: "normal",
            fontFeatureSettings: '"tnum"',
            height: "130px",
          }}
          className="opacity-95 pl-18"
        >
          {catFrame}
        </pre>

        {/* Status indicator */}
        <div className="flex flex-col items-center gap-2">
          <div className="font-mono-code text-[11px] tracking-[0.35em] text-white uppercase flex items-center">
            melissa.exe
          </div>
          <div className="font-mono-code text-[8px] tracking-[0.2em] text-muted-foreground/30 uppercase mt-1">
            system boot initialized
          </div>
        </div>
      </div>
    </div>
  );
}
