// components/FadeSection.jsx
import { useFadeIn } from "../hooks";

/**
 * Wraps children in a div that fades + slides up into view
 * when it enters the viewport (uses the .fade-in CSS class).
 */
export default function FadeSection({ children, className = "", style = {} }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${className}`} style={style}>
      {children}
    </div>
  );
}
