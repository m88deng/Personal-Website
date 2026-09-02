import { useState, useEffect } from "react";
import TypedCode from "./TypedCode";

function StatusPill({ text, color }: { text: string; color: string }) {
  return (
    <span
      className="font-mono-code text-[8px] px-2 py-[2px] rounded-full"
      style={{
        backgroundColor: `var(--term-accent-${color}-bg)`,
        color: `var(--term-accent-${color})`,
        border: `1px solid var(--term-accent-${color}-border)`,
      }}
    >
      {text}
    </span>
  );
}

export default function GhosttyPanel({
  accentColor,
  sessionName,
  promptLabel,
  badge1,
  badge2,
  panelLabel,
  code,
  inView,
  typeDelay,
  children,
}: {
  accentColor: string;
  sessionName: string;
  promptLabel: string;
  badge1: string;
  badge2: string;
  panelLabel: string;
  code: string;
  inView: boolean;
  typeDelay: number;
  children?: React.ReactNode;
}) {
  const [done, setDone] = useState(false);
  const [initTime, setInitTime] = useState("");
  const [renderTime, setRenderTime] = useState("");

  const lineCount = code ? code.split("\n").length : 0;
  
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setDone(true), (typeDelay + code.length * 0.026 + 0.1) * 1000);
    return () => clearTimeout(t);
  }, [inView, code, typeDelay]);

  useEffect(() => {
    // Current time of initialization
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");
    setInitTime(`${hrs}:${mins}`);

    // Render duration
    const t0 = performance.now();
    requestAnimationFrame(() => {
      const dur = performance.now() - t0;
      const totalTime = code ? (typeDelay + code.length * 0.026) : (dur / 1000);
      if (totalTime > 0.05) {
        setRenderTime(`${totalTime.toFixed(1)}s`);
      } else {
        setRenderTime(`${Math.round(dur)}ms`);
      }
    });
  }, [code, typeDelay]);

  const locationPath = sessionName.split(" — ")[0] || "~/portfolio";

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: "var(--term-bg-alt)" }}>
      {/* Chrome bar */}
      <div
        className="flex items-center justify-between px-3 h-8 shrink-0"
        style={{ backgroundColor: "var(--term-header)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-1.5">
          <StatusPill text={initTime} color="purple" />
          <StatusPill text={renderTime} color="orange" />
          <StatusPill text={locationPath} color="blue" />
        </div>
        <span className="font-mono-code text-[9px] tracking-wide" style={{ color: "rgba(255,255,255,0.2)" }}>
          {promptLabel}
        </span>
        <div className="flex items-center gap-1.5">
          <StatusPill text={badge1} color="green" />
          <StatusPill text={badge2} color="purple" />
        </div>
      </div>
      {/* Body */}
      <div className="flex-1 p-5 relative">
        <div className="flex items-center gap-2 mb-3">
          <span style={{ color: "var(--term-accent-red)" }}>▶</span>
          <span className="font-mono-code text-[10px] tracking-[0.25em] uppercase" style={{ color: accentColor }}>
            {promptLabel}
          </span>
        </div>
        <pre className="font-mono-code text-xs leading-[1.75] overflow-hidden whitespace-pre" style={{ color: "rgba(255,255,255,0.52)", minHeight: `${lineCount * 1.75}em` }}>
          <TypedCode code={code} inView={inView} delay={typeDelay} />
          {inView && !done && <span className="animate-pulse" style={{ color: accentColor }}>█</span>}
        </pre>
        {children}
        <div className="absolute top-3 right-4 font-mono-code text-[8px]" style={{ color: "rgba(255,255,255,0.18)" }}>
          {panelLabel}
        </div>
      </div>
    </div>
  );
}
