export default function GlitchText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className="glitch-r absolute inset-0"
        style={{ color: "#ff2d7a", mixBlendMode: "screen" }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="glitch-c absolute inset-0"
        style={{ color: "#00e5c8", mixBlendMode: "screen" }}
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
}
