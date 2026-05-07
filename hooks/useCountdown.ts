import { useState, useEffect } from "react";

export function useCountdown(initialSeconds = 9240) {
  const [secs, setSecs] = useState(initialSeconds);

  useEffect(() => {
    const id = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;

  return {
    h,
    m,
    s,
    total: 86400,
    remaining: secs,
    label: `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`,
  };
}