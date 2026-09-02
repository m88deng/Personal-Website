import { useState, useEffect, useRef } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
  rootMargin?: string;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  aspectRatio,
  rootMargin = "300px 0px",
  draggable = false,
  onContextMenu,
  onDragStart,
  style,
  ...props
}: LazyImageProps) {
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  // Check if image is already cached and loaded immediately
  const handleImageLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [inView, src]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#100f18] ${aspectRatio ? aspectRatio : ""} ${containerClassName}`}
    >
      {/* Smooth Shimmer / Skeleton Placeholder */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-card/30 via-white/5 to-card/30 animate-pulse pointer-events-none transition-opacity duration-700 ease-out z-0 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {inView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          draggable={draggable}
          onContextMenu={onContextMenu || ((e) => e.preventDefault())}
          onDragStart={onDragStart || ((e) => e.preventDefault())}
          onLoad={handleImageLoad}
          decoding="async"
          className={`${className} relative z-1`}
          style={{
            ...style,
            opacity: loaded ? 1 : 0,
            filter: loaded ? "blur(0px)" : "blur(6px)",
            transform: loaded ? "scale(1)" : "scale(1.025)",
            transition:
              "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), filter 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          {...props}
        />
      )}
    </div>
  );
}
