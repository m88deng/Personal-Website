import { useEffect, useRef, useCallback } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  color: string;
  alpha: number;
};

const RISO = ["#ff2d7a", "#00e5c8", "#ffd100"];

export default function InkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pts = useRef<Particle[]>([]);
  const raf = useRef<number>(0);

  const spawn = useCallback((cx: number, cy: number) => {
    for (let i = 0; i < 5; i++) {
      const a = Math.random() * Math.PI * 2;
      const s = Math.random() * 1.6 + 0.4;
      pts.current.push({
        x: cx,
        y: cy,
        vx: Math.cos(a) * s,
        vy: Math.sin(a) * s,
        radius: Math.random() * 4 + 2,
        maxRadius: Math.random() * 48 + 14,
        color: RISO[Math.floor(Math.random() * 3)],
        alpha: 0.6,
      });
    }
  }, []);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const inkMove = (e: MouseEvent) => spawn(e.clientX, e.clientY);
    window.addEventListener("mousemove", inkMove);

    const tick = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.current = pts.current.filter((p) => p.alpha > 0.01);
      for (const p of pts.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        if (p.radius < p.maxRadius) p.radius += 0.85;
        p.alpha *= 0.94;
        ctx.globalAlpha = p.alpha;
        const g = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );
        g.addColorStop(0, p.color);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", inkMove);
    };
  }, [spawn]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999, mixBlendMode: "screen" }}
    />
  );
}
