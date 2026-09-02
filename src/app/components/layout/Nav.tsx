import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/portfolioData";

export default function Nav({
  onNavigate,
}: {
  onNavigate?: (id: string) => void;
}) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    const id = name.toLowerCase();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("hero");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[200] transition-all duration-500 ${
        solid
          ? "bg-background/92 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          className="font-display text-sm tracking-[0.4em] text-primary hover:opacity-80 transition-opacity cursor-pointer text-left focus:outline-none"
        >
          M.DENG
        </button>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, n)}
              className="font-mono-code text-[10px] tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors duration-200 uppercase cursor-pointer"
            >
              {n}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
