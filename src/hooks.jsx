// src/hooks.jsx — shared React hooks
import { useRef, useEffect } from "react";

/**
 * useReveal — single element reveal (used for section headers, CTA blocks)
 */
export function useReveal(cls = "reveal") {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("in"); obs.disconnect(); }
      },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (extraCls = "") => ({
    ref,
    className: [cls, extraCls].filter(Boolean).join(" "),
  });
}

/**
 * useRevealList — reveals an array of elements individually.
 * Returns a ref-setter: call it with the index to get a callback ref.
 *
 * Usage:
 *   const setRef = useRevealList();
 *   {items.map((item, i) => (
 *     <div ref={setRef(i)} className="reveal" key={i}>…</div>
 *   ))}
 */
export function useRevealList() {
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    refs.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // Returns a callback ref setter for a given index
  return (i) => (el) => { refs.current[i] = el; };
}