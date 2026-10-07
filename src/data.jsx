// src/data.jsx — shared site content
// Stats, testimonials and prices were removed: none are confirmed yet (see PRODUCT.md).

export const CONTACT = {
  email: "info@aimsta.com",
  phone: "+27 82 489 3294",
  phoneHref: "tel:+27824893294",
  location: "Pretoria, Gauteng",
};

export const AREAS = [
  { id: "technical",  icon: "code",   title: "Technical Training",       desc: "Software engineering, AI, cloud platforms and data science, taught hands-on by working professionals." },
  { id: "analytics",  icon: "chart",  title: "Business Analytics",       desc: "Turn raw data into decisions with Power BI, Python and SQL, using your team's own kind of data." },
  { id: "marketing",  icon: "signal", title: "Digital Marketing",        desc: "SEO, paid media, content strategy and conversion optimisation, practised on live campaign work." },
  { id: "leadership", icon: "lead",   title: "Soft Skills & Leadership", desc: "Communication, negotiation, emotional intelligence and executive presence for every level of your organisation." },
  { id: "projects",   icon: "plan",   title: "Project Management",       desc: "Agile, Scrum, PMP exam preparation and risk management, so your teams deliver complex work with confidence." },
  { id: "language",   icon: "globe",  title: "Language Training",        desc: "Business-focused language courses that help your people communicate clearly with clients and colleagues." },
];

export const PROGRAMMES = [
  {
    area: "technical",
    title: "Full-Stack Web Development",
    desc: "From HTML fundamentals to deploying React and Node.js applications in the cloud.",
    topics: ["HTML, CSS & JavaScript", "React", "Node.js & APIs", "Cloud deployment"],
  },
  {
    area: "technical",
    title: "Data Science & Machine Learning",
    desc: "Python, pandas, scikit-learn and neural networks, applied to realistic business problems.",
    topics: ["Python & pandas", "Statistics", "scikit-learn", "Neural networks"],
  },
  {
    area: "marketing",
    title: "Digital Marketing Mastery",
    desc: "Hands-on SEO, Google Ads, email automation and analytics, worked through on real campaigns.",
    topics: ["SEO", "Google Ads", "Email automation", "Analytics"],
  },
];

export const INCLUDED = [
  { icon: "mentor",  title: "Personal mentorship",  desc: "Participants work one-on-one with an assigned industry mentor throughout the programme." },
  { icon: "folder",  title: "Real project work",    desc: "Teams build deliverables they can use at work, not toy exercises." },
  { icon: "live",    title: "Live sessions",        desc: "Interactive classes with practitioner trainers. Real questions, answered in real time." },
  { icon: "cert",    title: "Certificate of completion", desc: "Participants who complete a programme receive a certificate of completion." },
  { icon: "network", title: "Peer community",       desc: "Participants learn alongside motivated peers, with study groups and accountability." },
  { icon: "support", title: "Support after training", desc: "Continued access to materials and advice once the programme ends." },
];

export const STEPS = [
  { title: "Tell us what your team needs", desc: "Share the skills gap, the people involved and your timeline. An advisor gets back to you." },
  { title: "Get a recommended programme",  desc: "An advisor recommends the right programme for your goals, your people's background and your budget." },
  { title: "Train with practitioners",     desc: "Your team learns from trainers who do this work in industry, through live sessions and real projects." },
  { title: "Keep the momentum",            desc: "Mentorship and post-training support help new skills stick once people are back at their desks." },
];

export const TEAM_SIZES = ["1–5 people", "6–15 people", "16–50 people", "50+ people"];

// Hash URL for a page id, so every page can be linked and shared.
export const href = (id) => (id === "home" ? "#/" : `#/${id}`);
