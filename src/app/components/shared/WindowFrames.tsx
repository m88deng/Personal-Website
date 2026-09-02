import { useState, useEffect } from "react";

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

export function WinChrome({ title }: { title: string }) {
  return (
    <div
      className="flex items-center px-4 h-9 gap-3 shrink-0"
      style={{ backgroundColor: "var(--term-header-alt)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="flex gap-[7px]">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--term-accent-red)" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--term-accent-yellow)" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--term-accent-green)" }} />
      </div>
      <span className="font-mono-code text-[9px] tracking-wide" style={{ color: "rgba(255,255,255,0.2)" }}>
        {title}
      </span>
    </div>
  );
}

export function WinTabStrip({ path }: { path: string }) {
  const [initTime, setInitTime] = useState("");
  const [renderTime, setRenderTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");
    setInitTime(`${hrs}:${mins}`);

    const t0 = performance.now();
    requestAnimationFrame(() => {
      const dur = performance.now() - t0;
      setRenderTime(`${Math.max(1, Math.round(dur))}ms`);
    });
  }, []);

  return (
    <div
      className="flex items-center justify-between px-3 h-8 shrink-0"
      style={{ backgroundColor: "var(--term-header-strip)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="flex items-center gap-1.5">
        <StatusPill text={initTime} color="purple" />
        <StatusPill text={renderTime} color="orange" />
        <StatusPill text={path} color="blue" />
      </div>
      <div className="flex items-center gap-1.5">
        <StatusPill text="v25.11.25" color="green" />
        <StatusPill text="m88" color="gray" />
      </div>
    </div>
  );
}
