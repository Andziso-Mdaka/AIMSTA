// src/styles.js — all global CSS, injected once by App.jsx
export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  --ink:    #0a0f0d;
  --forest: #0d3320;
  --moss:   #1a5c38;
  --jade:   #2d9e63;
  --mint:   #5ccb8e;
  --gold:   #3dba72;
  --gold2:  #72e0a0;
  --cream:  #f5f0e8;
  --fog:    #e8ede9;
  --white:  #ffffff;
  --nav:    72px;
}

html{scroll-behavior:smooth}
body{
  font-family:'DM Sans',sans-serif;
  background:var(--ink);
  color:var(--cream);
  overflow-x:hidden;
  line-height:1.6;
}
img{display:block;max-width:100%}
button{cursor:pointer;font-family:'DM Sans',sans-serif}

/* ── SCROLLBAR ── */
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:var(--ink)}
::-webkit-scrollbar-thumb{background:var(--moss);border-radius:3px}

/* ── NOISE TEXTURE ── */
body::before{
  content:'';
  position:fixed;inset:0;z-index:0;
  pointer-events:none;
  opacity:.04;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size:200px;
}

/* ── NAV ── */
.nav{
  position:fixed;top:0;left:0;right:0;z-index:900;
  height:var(--nav);
  display:flex;align-items:center;
  padding:0 3rem;
  justify-content:space-between;
  transition:background .4s,box-shadow .4s;
}
.nav.solid{
  background:rgba(10,15,13,.92);
  backdrop-filter:blur(20px);
  box-shadow:0 1px 0 rgba(61,186,114,.15);
}
.nav-logo{display:flex;align-items:center;gap:.75rem;cursor:pointer;text-decoration:none;}
.nav-emblem{
  width:44px;height:44px;
  background:var(--forest);
  border-radius:10px;
  display:flex;align-items:center;justify-content:center;
  font-family:'Cormorant Garamond',serif;
  font-size:1.3rem;font-weight:700;color:var(--ink);
  box-shadow:0 4px 20px rgba(61,186,114,.25);
  flex-shrink:0;
}
.nav-wordmark{display:flex;flex-direction:column;line-height:1}
.nav-name{font-family:'Bebas Neue',sans-serif;font-size:1.5rem;letter-spacing:3px;color:var(--cream);}
.nav-tagline{font-size:.58rem;letter-spacing:4px;color:var(--gold);text-transform:uppercase;font-weight:500}

.nav-links{display:flex;gap:.25rem;list-style:none}
.nav-links button{
  background:none;border:none;
  font-family:'DM Sans',sans-serif;font-size:.88rem;font-weight:500;
  color:rgba(245,240,232,.65);
  padding:.5rem 1rem;border-radius:8px;
  transition:color .2s,background .2s;
  position:relative;
}
.nav-links button::after{
  content:'';position:absolute;bottom:4px;left:50%;transform:translateX(-50%);
  width:0;height:1.5px;background:var(--gold);transition:width .3s;border-radius:1px;
}
.nav-links button:hover{color:var(--cream)}
.nav-links button:hover::after,.nav-links button.act::after{width:55%}
.nav-links button.act{color:var(--gold)}

.nav-cta{
  background:linear-gradient(135deg,var(--gold),var(--gold2));
  color:#fff;border:none;
  font-family:'DM Sans',sans-serif;font-weight:700;font-size:.85rem;
  padding:.6rem 1.5rem;border-radius:50px;
  box-shadow:0 4px 20px rgba(61,186,114,.3);
  transition:transform .2s,box-shadow .2s;
  letter-spacing:.3px;
}
.nav-cta:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(61,186,114,.45)}

.hamburger{display:none;background:none;border:none;color:var(--cream);padding:.25rem;}
.mob-drawer{
  position:fixed;top:var(--nav);left:0;right:0;z-index:850;
  background:rgba(10,15,13,.97);
  backdrop-filter:blur(24px);
  border-bottom:1px solid rgba(61,186,114,.15);
  padding:1.25rem 2rem 2rem;
  display:flex;flex-direction:column;gap:.25rem;
  animation:slideDown .22s ease;
}
@keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}
.mob-drawer button{
  background:none;border:none;
  font-family:'DM Sans',sans-serif;font-weight:500;font-size:1.05rem;
  color:rgba(245,240,232,.8);text-align:left;
  padding:.8rem 1rem;border-radius:10px;
  transition:background .2s,color .2s;
}
.mob-drawer button:hover{background:rgba(61,186,114,.08);color:var(--gold)}
.mob-drawer .mcta{
  margin-top:.75rem;
  background:linear-gradient(135deg,var(--gold),var(--gold2));
  color:#fff;border-radius:50px;
  font-weight:700;font-size:.95rem;text-align:center;padding:.9rem;
}
@media(max-width:860px){
  .nav-links,.nav-cta{display:none!important}
  .hamburger{display:block}
  .nav{padding:0 1.5rem}
}

/* ── PAGE WRAPPER ── */
.page{padding-top:var(--nav)}

/* ═══════════════════════════════════ HERO ═══ */
.hero{
  position:relative;min-height:calc(100vh - var(--nav));
  display:flex;align-items:center;
  overflow:hidden;background:var(--ink);
}
.hero::before{
  content:'';position:absolute;
  top:-15%;right:-5%;width:58%;height:130%;
  background:linear-gradient(160deg,var(--forest) 0%,var(--moss) 60%,var(--jade) 100%);
  clip-path:polygon(18% 0%,100% 0%,100% 100%,0% 100%);
  z-index:0;
}
.hero::after{
  content:'';position:absolute;
  top:0;left:41.5%;width:2px;height:100%;
  background:linear-gradient(to bottom,transparent,var(--gold) 30%,var(--gold) 70%,transparent);
  z-index:1;opacity:.6;
}
.hero-inner{
  position:relative;z-index:2;
  max-width:1320px;margin:0 auto;width:100%;
  padding:5rem 3rem;
  display:grid;grid-template-columns:1fr 1fr;
  gap:4rem;align-items:center;
}
.hero-eyebrow{
  display:inline-flex;align-items:center;gap:.6rem;
  border:1px solid rgba(61,186,114,.4);
  padding:.38rem 1rem;border-radius:50px;
  font-size:.75rem;font-weight:600;letter-spacing:2px;
  text-transform:uppercase;color:var(--gold);
  margin-bottom:1.75rem;background:rgba(61,186,114,.06);
}
.hero-eyebrow-dot{
  width:6px;height:6px;background:var(--gold);border-radius:50%;
  animation:pulse 2s infinite;
}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}
.hero-h1{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(3rem,5.5vw,5.2rem);
  font-weight:600;line-height:1.05;color:var(--cream);margin-bottom:1.5rem;
}
.hero-h1 em{font-style:italic;color:var(--mint)}
.hero-sub{
  font-size:1.05rem;color:rgba(245,240,232,.65);
  line-height:1.8;max-width:440px;margin-bottom:2.5rem;font-weight:300;
}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:3.5rem}
.hero-metrics{display:flex;gap:2.5rem;flex-wrap:wrap}
.metric-num{
  font-family:'Cormorant Garamond',serif;
  font-size:2.6rem;font-weight:700;color:var(--gold);line-height:1;
}
.metric-lbl{font-size:.75rem;letter-spacing:1.5px;color:rgba(245,240,232,.5);text-transform:uppercase;margin-top:.2rem}

.hero-panel{position:relative;display:flex;flex-direction:column;gap:1.25rem;}
.hero-card-main{
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.12);
  backdrop-filter:blur(16px);border-radius:24px;padding:2.5rem;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:1.25rem;text-align:center;
  animation:cardIn .9s ease .2s both;min-height:240px;
  box-shadow:0 24px 64px rgba(0,0,0,.4);
}
@keyframes cardIn{from{opacity:0;transform:scale(.94) translateY(20px)}to{opacity:1;transform:none}}
.hero-card-icon{
  width:80px;height:80px;
  background:linear-gradient(135deg,var(--forest),var(--jade));
  border-radius:20px;display:flex;align-items:center;justify-content:center;
  box-shadow:0 8px 32px rgba(45,158,99,.4);
}
.hero-card-main h3{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:600;color:var(--cream);}
.hero-card-main p{font-size:.88rem;color:rgba(245,240,232,.6);font-weight:300}
.hero-badges-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.hero-mini-card{
  background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);
  border-radius:16px;padding:1.25rem;
  display:flex;flex-direction:column;gap:.5rem;
  animation:cardIn .8s ease both;
  transition:background .2s,border-color .2s;
}
.hero-mini-card:hover{background:rgba(61,186,114,.08);border-color:rgba(61,186,114,.25)}
.hmc-icon{
  width:36px;height:36px;background:rgba(61,186,114,.12);border-radius:10px;
  display:flex;align-items:center;justify-content:center;color:var(--gold);
}
.hmc-label{font-size:.82rem;font-weight:600;color:var(--cream)}
.hmc-sub{font-size:.72rem;color:rgba(245,240,232,.5)}

@media(max-width:960px){
  .hero::before,.hero::after{display:none}
  .hero-inner{grid-template-columns:1fr;text-align:center;gap:3rem;padding:3rem 1.5rem}
  .hero-sub,.hero-h1{max-width:100%}
  .hero-btns,.hero-metrics{justify-content:center}
  .hero-panel{order:-1}
  .hero-card-main{min-height:auto}
}
@media(max-width:540px){
  .hero-inner{padding:2rem 1rem 3rem}
  .hero-btns{flex-direction:column;align-items:center}
  .hero-btns button{width:100%;max-width:300px;justify-content:center}
  .hero-h1{font-size:2.6rem}
  .hero-badges-row{grid-template-columns:1fr}
}

/* ═══════════════════════════════════ SHARED SECTIONS ═══ */
.sec{padding:6rem 3rem}
.sec-inner{max-width:1320px;margin:0 auto;width:100%}
.sec-light{background:var(--cream);color:var(--ink)}
.sec-forest{background:var(--forest)}
.sec-mid{background:#111814}

.eyebrow{
  display:inline-flex;align-items:center;gap:.5rem;
  font-size:.7rem;font-weight:700;letter-spacing:3px;
  text-transform:uppercase;margin-bottom:1rem;
}
.eyebrow::before{content:'';display:block;width:24px;height:1.5px;background:currentColor;border-radius:1px;}
.eyebrow-dark{color:var(--jade)}
.eyebrow-gold{color:var(--gold)}
.eyebrow-cream{color:rgba(245,240,232,.5)}

.sec-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2.2rem,4vw,3.6rem);
  font-weight:600;line-height:1.1;margin-bottom:.75rem;
}
.sec-title .ital{font-style:italic}
.sec-sub{font-size:1rem;line-height:1.8;max-width:520px;font-weight:300}
.sec-sub-dark{color:#666}
.sec-sub-light{color:rgba(245,240,232,.6)}
.sec-hd{margin-bottom:3.5rem}

@media(max-width:680px){.sec{padding:4rem 1.25rem}}

/* ═══════════════════════════════════ BUTTONS ═══ */
.btn-gold{
  background:linear-gradient(135deg,var(--gold),var(--gold2));
  color:#fff;border:none;
  font-weight:700;font-size:.95rem;
  padding:.85rem 2.2rem;border-radius:50px;
  box-shadow:0 6px 28px rgba(61,186,114,.35);
  transition:transform .2s,box-shadow .2s;
  display:inline-flex;align-items:center;gap:.5rem;letter-spacing:.2px;
}
.btn-gold:hover{transform:translateY(-2px);box-shadow:0 12px 36px rgba(61,186,114,.5)}
.btn-outline{
  background:transparent;border:1.5px solid rgba(245,240,232,.3);
  color:var(--cream);font-weight:500;font-size:.95rem;
  padding:.85rem 2.2rem;border-radius:50px;
  transition:all .2s;display:inline-flex;align-items:center;gap:.5rem;
}
.btn-outline:hover{border-color:var(--gold);color:var(--gold);background:rgba(61,186,114,.06)}
.btn-forest{
  background:linear-gradient(135deg,var(--forest),var(--moss));
  color:#fff;border:none;font-weight:600;font-size:.95rem;
  padding:.85rem 2.2rem;border-radius:50px;
  box-shadow:0 6px 24px rgba(13,51,32,.35);
  transition:transform .2s,box-shadow .2s;
  display:inline-flex;align-items:center;gap:.5rem;
}
.btn-forest:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(13,51,32,.45)}
.btn-cream{
  background:var(--cream);color:var(--ink);border:none;
  font-weight:700;font-size:.95rem;
  padding:1rem 2.75rem;border-radius:50px;
  box-shadow:0 8px 32px rgba(0,0,0,.25);
  transition:transform .2s,box-shadow .2s;
  display:inline-flex;align-items:center;gap:.5rem;letter-spacing:.2px;
}
.btn-cream:hover{transform:translateY(-3px);box-shadow:0 16px 44px rgba(0,0,0,.35)}

/* ═══════════════════════════════════ SERVICE CARDS ═══ */
.serv-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;}
.serv-card{
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.08);
  border-radius:20px;padding:2rem;
  transition:transform .3s,border-color .3s,background .3s;
  position:relative;overflow:hidden;
}
.serv-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,var(--gold),transparent);
  opacity:0;transition:opacity .3s;
}
.serv-card:hover{transform:translateY(-6px);border-color:rgba(61,186,114,.25);background:rgba(61,186,114,.05)}
.serv-card:hover::before{opacity:1}
.serv-ico{
  width:52px;height:52px;border-radius:14px;
  display:flex;align-items:center;justify-content:center;
  margin-bottom:1.5rem;
  background:linear-gradient(135deg,var(--forest),var(--moss));
  box-shadow:0 6px 20px rgba(0,0,0,.3);
}
.serv-card h3{font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:600;color:var(--cream);margin-bottom:.6rem;}
.serv-card p{font-size:.88rem;color:rgba(245,240,232,.55);line-height:1.75}

/* ═══════════════════════════════════ ABOUT ═══ */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;}
@media(max-width:860px){.about-grid{grid-template-columns:1fr;gap:3rem}}
.about-visual{position:relative}
.about-main-box{
  background:linear-gradient(160deg,var(--forest) 0%,var(--jade) 100%);
  border-radius:28px;aspect-ratio:4/3;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:1rem;color:#fff;box-shadow:0 24px 64px rgba(13,51,32,.4);
  position:relative;overflow:hidden;
}
.about-main-box::before{
  content:'';position:absolute;bottom:-30%;right:-20%;
  width:280px;height:280px;border-radius:50%;background:rgba(255,255,255,.06);
}
.about-stat-float{
  position:absolute;bottom:-1.5rem;left:-1.5rem;
  background:#fff;border-radius:20px;
  padding:1.25rem 1.75rem;text-align:center;
  box-shadow:0 12px 40px rgba(0,0,0,.15);
}
.asf-num{font-family:'Cormorant Garamond',serif;font-size:2.4rem;font-weight:700;color:var(--jade);display:block;line-height:1;}
.asf-lbl{font-size:.68rem;letter-spacing:2px;text-transform:uppercase;color:#777;font-weight:600}
.about-text h2{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2rem,3.5vw,2.8rem);font-weight:600;
  color:var(--ink);line-height:1.15;margin-bottom:1rem;
}
.about-text h2 em{font-style:italic;color:var(--jade)}
.about-text p{color:#555;line-height:1.85;margin-bottom:1rem;font-size:.975rem;font-weight:300}
.feat-list{display:flex;flex-direction:column;gap:.6rem;margin:1.75rem 0 2.25rem}
.feat{display:flex;align-items:center;gap:.85rem;font-size:.93rem;font-weight:500;color:var(--ink)}
.feat-tick{
  width:24px;height:24px;flex-shrink:0;border-radius:50%;
  background:linear-gradient(135deg,var(--jade),var(--mint));
  display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;
  box-shadow:0 3px 10px rgba(45,158,99,.35);
}

/* ═══════════════════════════════════ COURSES ═══ */
.courses-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:1.75rem;}
.course-card{
  background:#fff;border-radius:22px;overflow:hidden;
  box-shadow:0 4px 24px rgba(0,0,0,.07);
  border:1px solid rgba(0,0,0,.06);
  transition:transform .3s,box-shadow .3s;
  display:flex;flex-direction:column;
}
.course-card:hover{transform:translateY(-8px);box-shadow:0 20px 56px rgba(0,0,0,.13)}
.course-thumb{
  height:160px;position:relative;overflow:hidden;
  background:linear-gradient(160deg,var(--forest) 0%,var(--jade) 100%);
  display:flex;align-items:flex-end;padding:1.25rem;
}
.course-thumb::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(to bottom,transparent 40%,rgba(0,0,0,.35));
}
.course-badge{
  position:relative;z-index:1;
  background:var(--gold);color:#fff;
  font-size:.68rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;
  padding:.3rem .85rem;border-radius:50px;
}
.course-body{padding:1.75rem;flex:1;display:flex;flex-direction:column}
.course-meta{display:flex;gap:1.25rem;margin-bottom:1rem}
.course-meta span{font-size:.78rem;color:#888;display:flex;align-items:center;gap:.35rem;}
.course-card h3{
  font-family:'Cormorant Garamond',serif;
  font-size:1.3rem;font-weight:600;color:var(--ink);margin-bottom:.6rem;line-height:1.25;
}
.course-card p{font-size:.88rem;color:#666;line-height:1.65;margin-bottom:1.5rem;flex:1}
.course-footer{display:flex;align-items:center;justify-content:space-between;margin-top:auto}
.course-price{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:700;color:var(--jade);}
.course-price s{font-size:.85rem;color:#aaa;font-family:'DM Sans',sans-serif;font-weight:400;margin-left:.4rem}
.course-enroll{
  background:linear-gradient(135deg,var(--forest),var(--jade));
  color:#fff;border:none;font-size:.82rem;font-weight:600;
  padding:.55rem 1.3rem;border-radius:50px;transition:all .2s;
}
.course-enroll:hover{box-shadow:0 6px 18px rgba(45,158,99,.35);transform:translateY(-1px)}

/* ═══════════════════════════════════ STATS STRIP ═══ */
.stats-strip{background:linear-gradient(135deg,var(--moss) 0%,var(--jade) 100%);padding:3.5rem 3rem;}
.stats-row{max-width:1320px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center;}
@media(max-width:700px){.stats-row{grid-template-columns:repeat(2,1fr)}}
.stat-big{font-family:'Bebas Neue',sans-serif;font-size:3.5rem;color:#fff;line-height:1;letter-spacing:1px;}
.stat-label{font-size:.78rem;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.7);margin-top:.25rem}

/* ═══════════════════════════════════ TESTIMONIALS ═══ */
.test-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-top:3.5rem;}
.test-card{
  background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);
  border-radius:20px;padding:2rem;
  transition:background .25s,transform .25s,border-color .25s;
  position:relative;
}
.test-card::before{
  content:'"';position:absolute;top:1.5rem;right:1.75rem;
  font-family:'Cormorant Garamond',serif;
  font-size:4rem;line-height:1;color:var(--gold);opacity:.25;
}
.test-card:hover{background:rgba(255,255,255,.07);transform:translateY(-4px);border-color:rgba(61,186,114,.2)}
.stars{color:var(--gold);font-size:.88rem;letter-spacing:2px;margin-bottom:.75rem}
.test-txt{font-size:.93rem;line-height:1.8;color:rgba(245,240,232,.75);font-style:italic;font-weight:300;margin-bottom:1.5rem;}
.test-author{display:flex;align-items:center;gap:.85rem}
.test-av{
  width:46px;height:46px;flex-shrink:0;border-radius:50%;
  background:linear-gradient(135deg,var(--gold),var(--gold2));
  display:flex;align-items:center;justify-content:center;
  font-weight:700;color:#fff;font-size:.88rem;
  font-family:'Cormorant Garamond',serif;
}
.test-name{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:600;color:var(--cream);margin-bottom:.1rem}
.test-role{font-size:.75rem;color:rgba(245,240,232,.45)}

/* ═══════════════════════════════════ CTA BAND ═══ */
.cta-band{
  position:relative;overflow:hidden;
  padding:7rem 3rem;text-align:center;background:var(--forest);
}
.cta-band::before{
  content:'';position:absolute;top:-50%;left:-20%;
  width:600px;height:600px;border-radius:50%;
  background:radial-gradient(circle,rgba(61,186,114,.12),transparent 70%);pointer-events:none;
}
.cta-band::after{
  content:'';position:absolute;bottom:-40%;right:-10%;
  width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(92,203,142,.08),transparent 70%);pointer-events:none;
}
.cta-inner{position:relative;z-index:1;max-width:680px;margin:0 auto}
.cta-inner h2{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2.2rem,5vw,3.8rem);font-weight:600;
  color:var(--cream);line-height:1.1;margin-bottom:1rem;
}
.cta-inner h2 em{font-style:italic;color:var(--gold)}
.cta-inner p{font-size:1rem;color:rgba(245,240,232,.7);line-height:1.8;margin-bottom:2.75rem;font-weight:300}
@media(max-width:680px){.cta-band{padding:4.5rem 1.25rem}}

/* ═══════════════════════════════════ CONTACT ═══ */
.contact-grid{display:grid;grid-template-columns:1fr 1.6fr;gap:4.5rem;align-items:start;}
@media(max-width:860px){.contact-grid{grid-template-columns:1fr;gap:3rem}}
.contact-info h2{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2rem,3.5vw,2.8rem);font-weight:600;
  color:var(--ink);line-height:1.15;margin-bottom:1rem;
}
.contact-info h2 em{font-style:italic;color:var(--jade)}
.contact-info>p{color:#555;line-height:1.8;margin-bottom:2rem;font-weight:300}
.c-items{display:flex;flex-direction:column;gap:.9rem}
.c-item{display:flex;align-items:center;gap:1rem;padding:1rem 1.25rem;background:var(--fog);border-radius:14px;border:1px solid rgba(0,0,0,.06);}
.c-ico{
  width:42px;height:42px;flex-shrink:0;border-radius:12px;
  background:linear-gradient(135deg,var(--forest),var(--jade));
  color:#fff;display:flex;align-items:center;justify-content:center;
  box-shadow:0 4px 14px rgba(13,51,32,.25);
}
.c-lbl{font-size:.7rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#999}
.c-val{font-size:.95rem;font-weight:600;color:var(--ink);margin-top:.1rem}
.contact-form-box{background:#fff;border-radius:24px;padding:2.75rem;box-shadow:0 8px 48px rgba(0,0,0,.08);border:1px solid rgba(0,0,0,.06);}
.contact-form-box h3{font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:600;color:var(--ink);margin-bottom:1.75rem;}
.f-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
@media(max-width:540px){.f-row{grid-template-columns:1fr}}
.f-field{display:flex;flex-direction:column;gap:.4rem;margin-bottom:1rem}
.f-field label{font-size:.78rem;font-weight:600;color:var(--ink);letter-spacing:.3px}
.f-field input,.f-field textarea,.f-field select{
  border:1.5px solid #e4e4e4;border-radius:10px;
  padding:.78rem 1rem;
  font-family:'DM Sans',sans-serif;font-size:.93rem;color:var(--ink);
  outline:none;background:#fff;transition:border-color .2s,box-shadow .2s;
}
.f-field input:focus,.f-field textarea:focus,.f-field select:focus{
  border-color:var(--jade);box-shadow:0 0 0 3px rgba(45,158,99,.1);
}
.f-field textarea{resize:vertical;min-height:120px}
.form-ok{text-align:center;padding:3rem 1rem;color:var(--jade)}
.form-ok p{color:#666;font-size:.95rem;margin-top:.75rem}

/* ═══════════════════════════════════ FOOTER ═══ */
.footer{background:#060a07;color:#fff;padding:5rem 3rem 2rem}
.footer-inner{max-width:1320px;margin:0 auto}
.footer-grid{
  display:grid;grid-template-columns:2.2fr 1fr 1fr 1fr;
  gap:3.5rem;margin-bottom:3.5rem;
  padding-bottom:3.5rem;border-bottom:1px solid rgba(255,255,255,.07);
}
@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr;gap:2.5rem}}
@media(max-width:520px){.footer-grid{grid-template-columns:1fr;gap:2rem}.footer{padding:3.5rem 1.25rem 2rem}}
.footer-brand p{color:rgba(255,255,255,.45);line-height:1.8;margin:1rem 0 1.75rem;font-size:.88rem;max-width:300px;font-weight:300}
.socials{display:flex;gap:.6rem;flex-wrap:wrap}
.socials a{
  width:38px;height:38px;background:rgba(255,255,255,.06);border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  color:rgba(255,255,255,.55);text-decoration:none;
  transition:background .2s,color .2s,transform .2s;
  border:1px solid rgba(255,255,255,.08);
}
.socials a:hover{background:var(--gold);color:#fff;transform:translateY(-2px);border-color:var(--gold)}
.footer-col h4{font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-weight:600;margin-bottom:1.25rem;color:var(--cream);letter-spacing:.5px;}
.footer-col ul{list-style:none;display:flex;flex-direction:column;gap:.55rem}
.footer-col li a{color:rgba(255,255,255,.45);text-decoration:none;font-size:.86rem;transition:color .2s,padding-left .2s;cursor:pointer;display:inline-block;}
.footer-col li a:hover{color:var(--gold);padding-left:5px}
.footer-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.75rem;font-size:.8rem;color:rgba(255,255,255,.28);}
.footer-bottom a{color:var(--gold);text-decoration:none;opacity:.7}
.footer-bottom a:hover{opacity:1}

/* ═══════════════════════════════════ REVEAL ANIMATIONS ═══ */
.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease;will-change:opacity,transform}
.reveal.in{opacity:1;transform:none}
.reveal-l{opacity:0;transform:translateX(-24px);transition:opacity .65s ease,transform .65s ease;will-change:opacity,transform}
.reveal-l.in{opacity:1;transform:none}
.reveal-r{opacity:0;transform:translateX(24px);transition:opacity .65s ease,transform .65s ease;will-change:opacity,transform}
.reveal-r.in{opacity:1;transform:none}

/* Fallback: if JS hasn't fired yet, never hide content permanently */
@media (prefers-reduced-motion: reduce) {
  .reveal,.reveal-l,.reveal-r{opacity:1;transform:none;transition:none}
}

@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
`;