// src/components/Icon.jsx — one line-icon family: 24px grid, 1.6 stroke, round joins
const PATHS = {
  arrow:   <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  check:   <path d="m5 12.5 4.5 4.5L19 7.5" />,
  menu:    <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  close:   <><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>,
  mail:    <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></>,
  phone:   <path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />,
  pin:     <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  success: <><circle cx="12" cy="12" r="9" /><path d="m8 12.5 3 3 5-6" /></>,
  // training areas
  code:    <><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m13.5 5-3 14" /></>,
  chart:   <><path d="M4 20V4" /><path d="M4 20h16" /><path d="M8 16v-4" /><path d="M12 16V8" /><path d="M16 16v-6" /></>,
  signal:  <><path d="M4 10v4h3l6 4V6L7 10H4z" /><path d="M17 9a4 4 0 0 1 0 6" /><path d="M19.5 6.5a7.5 7.5 0 0 1 0 11" /></>,
  lead:    <><circle cx="12" cy="7" r="3" /><path d="M6 20v-1.5A4.5 4.5 0 0 1 10.5 14h3a4.5 4.5 0 0 1 4.5 4.5V20" /><path d="M12 14v3" /></>,
  plan:    <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3h6v1" /><path d="m8.5 11 1.5 1.5 3-3" /><path d="M8.5 16.5h7" /></>,
  globe:   <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></>,
  // what's included
  mentor:  <><circle cx="9" cy="8" r="3" /><path d="M3.5 20v-1A4.5 4.5 0 0 1 8 14.5h2" /><path d="m14 15 2.5 2.5L21 13" /></>,
  folder:  <><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" /></>,
  network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M11 6.8 6 16.2" /><path d="m13 6.8 5 9.4" /><path d="M7 18h10" /></>,
  support: <><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /></>,
  live:    <><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /><path d="m10.5 9 3.5 2-3.5 2z" /></>,
  cert:    <><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M7 8.5h10" /><path d="M7 12h5" /><circle cx="16" cy="15" r="2.5" /><path d="m14.8 17.2-.8 3.8 2-1 2 1-.8-3.8" /></>,
};

export default function Ico({ n, s = 20, className }) {
  const p = PATHS[n];
  if (!p) return null;
  return (
    <svg
      width={s} height={s} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" className={className}
    >
      {p}
    </svg>
  );
}
