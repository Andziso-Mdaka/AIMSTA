// src/smoothScroll.js — eased page scrolling (Lenis) with a native fallback.
// Lenis drives the real window scroll, so scroll listeners and IntersectionObserver keep working.
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis = null;

export function startSmoothScroll() {
  if (lenis || matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });
  let raf = requestAnimationFrame(function loop(time) {
    lenis.raf(time);
    raf = requestAnimationFrame(loop);
  });
  return () => {
    cancelAnimationFrame(raf);
    lenis.destroy();
    lenis = null;
  };
}

// Pause while a modal surface (the mobile menu) owns the screen.
export const lockScroll = (locked) => (locked ? lenis?.stop() : lenis?.start());

export function scrollToTop({ immediate = false } = {}) {
  if (lenis) lenis.scrollTo(0, { immediate, duration: 1.4 });
  else window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
}
