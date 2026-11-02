// src/components/ScrollTop.jsx — back-to-top button; its ring fills with scroll progress
import { useEffect, useRef, useState } from "react";
import Ico from "./Icon.jsx";
import { scrollToTop } from "../smoothScroll.js";

const R = 25;
const C = 2 * Math.PI * R;

export default function ScrollTop() {
  const [shown, setShown] = useState(false);
  const ring = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      setShown(window.scrollY > 600);
      ring.current?.style.setProperty("stroke-dashoffset", (C * (1 - p)).toFixed(1));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      className={`to-top${shown ? " is-shown" : ""}`}
      onClick={() => { scrollToTop(); document.getElementById("main")?.focus({ preventScroll: true }); }}
      aria-label="Scroll to top"
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
    >
      <svg className="to-top-ring" viewBox="0 0 56 56" aria-hidden="true">
        <circle cx="28" cy="28" r={R} />
        <circle ref={ring} cx="28" cy="28" r={R} strokeDasharray={C} strokeDashoffset={C} />
      </svg>
      <Ico n="up" s={22} />
    </button>
  );
}
