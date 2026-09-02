import { useState, useEffect, useRef } from "react";

export default function TypedCode({
  code,
  inView,
  delay = 0,
}: {
  code: string;
  inView: boolean;
  delay?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const iRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!inView) return;
    tRef.current = setTimeout(() => {
      let i = 0;
      iRef.current = setInterval(() => {
        i++;
        setDisplayed(code.slice(0, i));
        if (i >= code.length && iRef.current) clearInterval(iRef.current);
      }, 26);
    }, delay * 1000);
    return () => {
      if (tRef.current) clearTimeout(tRef.current);
      if (iRef.current) clearInterval(iRef.current);
    };
  }, [inView, code, delay]);

  return <>{displayed}</>;
}
