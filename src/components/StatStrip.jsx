// src/components/StatStrip.jsx
import { STATS } from "../data";

export default function StatStrip() {
  return (
    <div className="stats-strip">
      <div className="stats-row">
        {STATS.map(([n, l]) => (
          <div key={l}>
            <div className="stat-big">{n}</div>
            <div className="stat-label">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}