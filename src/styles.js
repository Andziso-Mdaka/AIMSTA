// styles.js — shared global CSS injected once by App.jsx
export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --primary-green:  #0a8a3c;
    --dark-green:     #065f2a;
    --light-green:    #10b44d;
    --accent-green:   #7dd87d;
    --pale-green:     #e8f5e9;
    --dark-gray:      #1a1a2e;
    --medium-gray:    #4a4a5a;
    --light-gray:     #f8f9fa;
    --white:          #ffffff;
    --gradient-1:     linear-gradient(135deg, #0a8a3c 0%, #10b44d 100%);
    --gradient-2:     linear-gradient(135deg, #065f2a 0%, #0a8a3c 100%);
    --radius:         16px;
    --shadow:         0 4px 32px rgba(10,138,60,0.13);
    --nav-h:          70px;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', sans-serif;
    color: var(--dark-gray);
    background: var(--white);
    overflow-x: hidden;
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    line-height: 1.15;
  }

  /* ── NAVBAR ── */
  .navbar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 900;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(10,138,60,0.07);
    padding: 0;
    transition: box-shadow .3s, padding .3s;
  }
  .navbar.scrolled {
    box-shadow: 0 2px 28px rgba(10,138,60,0.1);
  }
  .nav-container {
    max-width: 1200px; margin: 0 auto;
    padding: 0 2rem;
    height: var(--nav-h);
    display: flex; align-items: center; justify-content: space-between;
    gap: 1rem;
  }
  .nav-logo {
    display: flex; align-items: center; gap: .75rem;
    cursor: pointer; text-decoration: none; flex-shrink: 0;
  }
  .nav-logo-mark {
    width: 46px; height: 46px;
    background: var(--gradient-1);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-weight: 700; font-size: 1.25rem;
    box-shadow: 0 4px 14px rgba(10,138,60,0.28);
    position: relative; overflow: hidden;
  }
  .nav-logo-mark::before {
    content: '';
    position: absolute; top: -50%; left: -50%;
    width: 200%; height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 3s infinite;
  }
  @keyframes shimmer {
    0%   { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%)  translateY(100%)  rotate(45deg); }
  }
  .nav-logo-text { display: flex; flex-direction: column; }
  .nav-logo-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem; font-weight: 700;
    letter-spacing: 2px; color: var(--dark-gray);
  }
  .nav-logo-tag {
    font-size: .62rem; letter-spacing: 3px;
    color: var(--primary-green); text-transform: uppercase; font-weight: 600;
  }
  .nav-links {
    display: flex; gap: .2rem; list-style: none; align-items: center;
  }
  .nav-links button {
    background: none; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; font-size: .9rem;
    font-weight: 500; color: var(--medium-gray);
    padding: .5rem .9rem; border-radius: 8px;
    transition: color .2s, background .2s;
    position: relative;
  }
  .nav-links button::after {
    content: '';
    position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);
    width: 0; height: 2px;
    background: var(--primary-green);
    transition: width .25s;
    border-radius: 2px;
  }
  .nav-links button:hover, .nav-links button.active {
    color: var(--primary-green);
  }
  .nav-links button:hover::after, .nav-links button.active::after {
    width: 60%;
  }
  .nav-cta {
    background: var(--gradient-1);
    color: #fff; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; font-weight: 600; font-size: .88rem;
    padding: .65rem 1.5rem; border-radius: 50px;
    box-shadow: 0 4px 14px rgba(10,138,60,0.3);
    transition: transform .2s, box-shadow .2s;
    white-space: nowrap;
  }
  .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(10,138,60,0.38); }

  .hamburger {
    display: none; background: none; border: none; cursor: pointer;
    padding: .4rem; color: var(--dark-gray); font-size: 1.4rem;
  }
  .mobile-nav {
    position: fixed; top: var(--nav-h); left: 0; right: 0; z-index: 850;
    background: #fff;
    border-bottom: 1px solid var(--pale-green);
    box-shadow: 0 8px 32px rgba(0,0,0,.1);
    display: flex; flex-direction: column; gap: .2rem;
    padding: 1rem 1.5rem 1.5rem;
    animation: slideDown .2s ease;
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .mobile-nav button {
    background: none; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; font-weight: 500; font-size: 1rem;
    color: var(--dark-gray); text-align: left;
    padding: .75rem 1rem; border-radius: 10px;
    transition: background .2s, color .2s;
  }
  .mobile-nav button:hover { background: var(--pale-green); color: var(--primary-green); }
  .mobile-nav .mob-cta {
    margin-top: .5rem;
    background: var(--gradient-1);
    color: #fff; border-radius: 50px;
    font-weight: 600; text-align: center;
    padding: .85rem; font-size: .95rem; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif;
  }

  @media (max-width: 768px) {
    .nav-links, .nav-cta { display: none !important; }
    .hamburger { display: block; }
  }

  /* ── PAGE WRAPPER ── */
  .page { padding-top: var(--nav-h); }

  /* ── SHARED BUTTONS ── */
  .btn-primary {
    background: var(--gradient-1);
    color: #fff; border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1rem;
    padding: .9rem 2rem; border-radius: 50px;
    box-shadow: 0 6px 20px rgba(10,138,60,0.3);
    transition: transform .2s, box-shadow .2s;
    display: inline-flex; align-items: center; gap: .5rem;
    text-decoration: none;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(10,138,60,0.4); }
  .btn-ghost {
    background: none; border: 2px solid rgba(10,138,60,.28);
    color: var(--primary-green); cursor: pointer;
    font-family: 'Inter', sans-serif; font-weight: 600; font-size: 1rem;
    padding: .9rem 2rem; border-radius: 50px;
    transition: all .2s;
    display: inline-flex; align-items: center; gap: .5rem;
  }
  .btn-ghost:hover { background: var(--pale-green); border-color: var(--primary-green); }
  .btn-white {
    background: #fff; color: var(--primary-green);
    border: none; cursor: pointer;
    font-family: 'Inter', sans-serif; font-weight: 700; font-size: 1rem;
    padding: 1rem 2.5rem; border-radius: 50px;
    box-shadow: 0 10px 32px rgba(0,0,0,.2);
    transition: transform .2s, box-shadow .2s;
    display: inline-block;
  }
  .btn-white:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,0,0,.28); }

  /* ── SECTION HELPERS ── */
  .section          { padding: 5rem 1.5rem; }
  .section-tinted   { background: linear-gradient(135deg, var(--light-gray) 0%, var(--pale-green) 50%, var(--light-gray) 100%); }
  .section-dark     { background: var(--dark-gray); color: #fff; }
  .section-inner    { max-width: 1200px; margin: 0 auto; }
  .section-header   { margin-bottom: 3rem; }

  .section-tag {
    display: inline-block;
    background: rgba(10,138,60,.1); color: var(--primary-green);
    border: 1px solid rgba(10,138,60,.18);
    padding: .35rem .9rem; border-radius: 50px;
    font-size: .75rem; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; margin-bottom: 1rem;
  }
  .section-tag.light { background: rgba(255,255,255,.12); color: var(--accent-green); border-color: rgba(255,255,255,.15); }

  .section-title { font-size: clamp(1.8rem, 4vw, 2.8rem); margin-bottom: .75rem; }
  .section-title.light { color: #fff; }
  .section-sub { font-size: 1.05rem; color: var(--medium-gray); max-width: 560px; line-height: 1.75; }
  .section-sub.light { color: rgba(255,255,255,.65); }

  /* ── SERVICES GRID ── */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  .service-card {
    background: #fff; border-radius: var(--radius);
    padding: 2rem; border: 1px solid rgba(10,138,60,.1);
    transition: transform .25s, box-shadow .25s, border-color .25s;
    height: 100%;
  }
  .service-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow);
    border-color: rgba(10,138,60,.3);
  }
  .service-icon {
    width: 54px; height: 54px;
    background: var(--pale-green); border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    color: var(--primary-green); font-size: 1.35rem;
    margin-bottom: 1.25rem;
  }
  .service-card h3 { font-size: 1.1rem; margin-bottom: .6rem; color: var(--dark-gray); }
  .service-card p  { font-size: .9rem; color: var(--medium-gray); line-height: 1.7; }

  /* ── ABOUT LAYOUT ── */
  .about-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 4rem; align-items: center;
  }
  @media (max-width: 860px) { .about-grid { grid-template-columns: 1fr; gap: 2.5rem; } }

  .about-img {
    background: var(--gradient-2);
    border-radius: 28px; aspect-ratio: 4/3;
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; color: #fff; gap: 1rem;
    position: relative; overflow: hidden;
    box-shadow: 0 16px 48px rgba(10,138,60,.25);
  }
  .about-img svg { opacity: .85; }
  .about-img p { font-size: 1rem; opacity: .8; }
  .about-badge {
    position: absolute; bottom: 0; right: 0;
    background: #fff; border-radius: 20px 0 28px 0;
    padding: 1.2rem 1.6rem; text-align: center;
  }
  .about-badge-num { font-family: 'Playfair Display',serif; font-size: 2.2rem; font-weight: 700; color: var(--primary-green); display: block; }
  .about-badge-lbl { font-size: .7rem; color: var(--medium-gray); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
  .about-content h2 { font-size: clamp(1.7rem, 3.5vw, 2.4rem); margin-bottom: 1rem; }
  .about-content p { color: var(--medium-gray); line-height: 1.8; margin-bottom: 1rem; font-size: .975rem; }
  .features-list { display: flex; flex-direction: column; gap: .7rem; margin: 1.5rem 0 2rem; }
  .feat-item {
    display: flex; align-items: center; gap: .75rem;
    font-size: .95rem; font-weight: 500; color: var(--dark-gray);
  }
  .feat-check {
    width: 22px; height: 22px; flex-shrink: 0;
    background: var(--pale-green); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: var(--primary-green); font-size: .7rem;
  }

  /* ── COURSES ── */
  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.75rem;
  }
  .course-card {
    background: #fff; border-radius: var(--radius);
    border: 1px solid rgba(10,138,60,.1); overflow: hidden;
    transition: transform .25s, box-shadow .25s;
  }
  .course-card:hover { transform: translateY(-6px); box-shadow: var(--shadow); }
  .course-thumb {
    height: 148px;
    background: var(--gradient-2);
    position: relative; display: flex; align-items: flex-end; padding: 1rem;
  }
  .course-badge-pill {
    background: #fff; color: var(--primary-green);
    font-size: .72rem; font-weight: 700;
    padding: .3rem .85rem; border-radius: 50px;
    letter-spacing: .5px; font-family: 'Inter',sans-serif;
  }
  .course-body { padding: 1.5rem; }
  .course-meta { display: flex; gap: 1rem; margin-bottom: .75rem; }
  .course-meta span {
    font-size: .8rem; color: var(--medium-gray);
    display: flex; align-items: center; gap: .35rem;
  }
  .course-body h3 { font-size: 1.1rem; margin-bottom: .5rem; color: var(--dark-gray); }
  .course-body p  { font-size: .88rem; color: var(--medium-gray); line-height: 1.65; margin-bottom: 1.25rem; }
  .course-footer { display: flex; align-items: center; justify-content: space-between; }
  .course-price {
    font-family: 'Playfair Display',serif;
    font-size: 1.3rem; font-weight: 700; color: var(--primary-green);
  }
  .course-price s { font-size: .85rem; color: var(--medium-gray); margin-left: .4rem; font-weight: 400; font-family: 'Inter',sans-serif; }
  .enroll-btn {
    background: var(--pale-green); color: var(--primary-green);
    border: none; cursor: pointer;
    font-family: 'Inter',sans-serif; font-weight: 600; font-size: .85rem;
    padding: .55rem 1.25rem; border-radius: 50px;
    transition: all .2s;
  }
  .enroll-btn:hover { background: var(--primary-green); color: #fff; }

  /* ── TESTIMONIALS ── */
  .test-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem; margin-top: 3rem;
  }
  .test-card {
    background: rgba(255,255,255,.06);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: var(--radius); padding: 2rem;
    transition: background .25s, transform .25s;
  }
  .test-card:hover { background: rgba(255,255,255,.1); transform: translateY(-5px); }
  .stars { color: #ffd700; font-size: .9rem; margin-bottom: .75rem; letter-spacing: 2px; }
  .test-text {
    font-size: .95rem; line-height: 1.8;
    color: rgba(255,255,255,.85); font-style: italic; margin-bottom: 1.5rem;
  }
  .test-author { display: flex; align-items: center; gap: .85rem; }
  .test-avatar {
    width: 48px; height: 48px; flex-shrink: 0;
    background: var(--gradient-1); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; color: #fff; font-size: .88rem;
    font-family: 'Inter',sans-serif;
  }
  .test-name { font-weight: 700; font-size: .95rem; color: #fff; margin-bottom: .15rem; font-family: 'Playfair Display',serif; }
  .test-role { font-size: .8rem; color: rgba(255,255,255,.5); }

  /* ── CTA BANNER ── */
  .cta-section {
    padding: 6rem 1.5rem;
    background: var(--gradient-1);
    position: relative; overflow: hidden; text-align: center;
  }
  .cta-section::before {
    content:''; position: absolute; top: -30%; right: -10%;
    width: 500px; height: 500px;
    background: rgba(255,255,255,.08); border-radius: 50%;
  }
  .cta-section::after {
    content:''; position: absolute; bottom: -20%; left: -5%;
    width: 350px; height: 350px;
    background: rgba(255,255,255,.05); border-radius: 50%;
  }
  .cta-inner { position: relative; z-index: 1; max-width: 700px; margin: 0 auto; }
  .cta-inner h2 { font-size: clamp(2rem, 5vw, 3rem); color: #fff; margin-bottom: 1rem; }
  .cta-inner p { font-size: 1.1rem; color: rgba(255,255,255,.85); margin-bottom: 2.5rem; line-height: 1.75; }

  /* ── CONTACT ── */
  .contact-grid {
    display: grid; grid-template-columns: 1fr 1.5fr;
    gap: 4rem; align-items: start;
  }
  @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
  .contact-info h2 { font-size: clamp(1.7rem, 3.5vw, 2.4rem); margin-bottom: 1rem; }
  .contact-info > p { color: var(--medium-gray); line-height: 1.8; margin-bottom: 2rem; }
  .contact-details { display: flex; flex-direction: column; gap: 1rem; }
  .contact-item {
    display: flex; align-items: center; gap: 1rem;
    padding: 1rem 1.25rem;
    background: var(--pale-green); border-radius: 12px;
  }
  .contact-item-icon {
    width: 40px; height: 40px; flex-shrink: 0;
    background: var(--primary-green); color: #fff; border-radius: 10px;
    display: flex; align-items: center; justify-content: center; font-size: .9rem;
  }
  .contact-item-label { font-size: .73rem; color: var(--medium-gray); font-weight: 600; text-transform: uppercase; letter-spacing: .8px; }
  .contact-item-val   { font-size: .95rem; font-weight: 600; color: var(--dark-gray); margin-top: .1rem; }

  .contact-form {
    background: #fff; border-radius: 20px; padding: 2.5rem;
    box-shadow: 0 4px 40px rgba(10,138,60,0.1);
    border: 1px solid rgba(10,138,60,.1);
  }
  .contact-form h3 { font-size: 1.4rem; margin-bottom: 1.75rem; color: var(--dark-gray); }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  @media (max-width: 540px) { .form-row { grid-template-columns: 1fr; } }
  .field { display: flex; flex-direction: column; gap: .4rem; margin-bottom: 1rem; }
  .field label { font-size: .82rem; font-weight: 600; color: var(--dark-gray); }
  .field input, .field textarea, .field select {
    border: 1.5px solid #e2e8f0; border-radius: 10px;
    padding: .75rem 1rem;
    font-family: 'Inter', sans-serif; font-size: .93rem; color: var(--dark-gray);
    transition: border-color .2s, box-shadow .2s; outline: none; background: #fff;
  }
  .field input:focus, .field textarea:focus, .field select:focus {
    border-color: var(--light-green);
    box-shadow: 0 0 0 3px rgba(10,138,60,.1);
  }
  .field textarea { resize: vertical; min-height: 115px; }
  .form-success {
    text-align: center; padding: 2.5rem 1rem;
    color: var(--primary-green);
  }
  .form-success p { color: var(--medium-gray); font-size: .95rem; margin-top: .75rem; }

  /* ── FOOTER ── */
  .footer { background: var(--dark-gray); color: #fff; padding: 4rem 1.5rem 1.5rem; }
  .footer-inner { max-width: 1200px; margin: 0 auto; }
  .footer-grid {
    display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem; margin-bottom: 3rem;
  }
  @media (max-width: 860px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; } }
  @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr; gap: 1.5rem; } }
  .footer-brand p { color: rgba(255,255,255,.6); line-height: 1.8; margin: 1rem 0 1.5rem; font-size: .88rem; }
  .socials { display: flex; gap: .7rem; }
  .socials a {
    width: 38px; height: 38px;
    background: rgba(255,255,255,.08); border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,.7); font-size: .85rem; text-decoration: none;
    transition: background .2s, color .2s, transform .2s;
  }
  .socials a:hover { background: var(--primary-green); color: #fff; transform: translateY(-2px); }
  .footer-col h4 { font-family: 'Playfair Display',serif; font-size: 1.05rem; margin-bottom: 1.25rem; color: #fff; }
  .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: .6rem; }
  .footer-col a {
    color: rgba(255,255,255,.6); text-decoration: none; font-size: .88rem;
    transition: color .2s, padding-left .2s; cursor: pointer;
  }
  .footer-col a:hover { color: var(--accent-green); padding-left: 4px; }
  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,.08);
    padding-top: 1.5rem;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: .75rem;
    font-size: .82rem; color: rgba(255,255,255,.4);
  }

  /* ── FADE-IN SCROLL ANIMATION ── */
  .fade-in { opacity: 0; transform: translateY(26px); transition: opacity .65s ease, transform .65s ease; }
  .fade-in.visible { opacity: 1; transform: none; }

  /* ── HERO ANIMATIONS ── */
  @keyframes float-bg {
    0%,100% { transform: scale(1) translateY(0); }
    50%      { transform: scale(1.08) translateY(-20px); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes cardIn {
    from { opacity: 0; transform: scale(.92) translateY(20px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes floatIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: none; }
  }
  @keyframes sparkle {
    0%,100% { transform: scale(1); }
    50%     { transform: scale(1.25); }
  }

  /* ── STAT COUNTER CARD ── */
  .stat-card { text-align: center; height: 100%; }
  .stat-card .stat-num { font-family: 'Playfair Display',serif; font-size: 2.8rem; font-weight: 700; color: var(--primary-green); display: block; margin-bottom: .25rem; }
  .stat-card h3 { font-size: 1rem; margin-bottom: .4rem; }
  .stat-card p { font-size: .875rem; }
`;