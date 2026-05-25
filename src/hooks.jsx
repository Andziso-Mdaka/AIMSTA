// src/hooks.js — shared React hooks
import { useRef, useEffect } from "react";

/**
 * useReveal(cls)
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the class "in" is added
 * (pairs with .reveal / .reveal-l / .reveal-r in styles.js).
 *
 * Returns a prop-getter function: call it to get { ref, className }.
 * Optionally pass an extra class string to merge:
 *   const r = useReveal();
 *   <div {...r("sec-hd")}> …
 */
export function useReveal(cls = "reveal") {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // returns a prop-getter so callers can do {...r()} or {...r("extra-class")}
  return (extraCls = "") => ({
    ref,
    className: [cls, extraCls].filter(Boolean).join(" "),
  });
}