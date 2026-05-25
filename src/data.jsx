// src/data.js — all shared content arrays

export const SERVICES = [
  { icon: "💻", title: "Technical Training",       desc: "Hands-on programs in software engineering, AI, cloud platforms, and data science led by working professionals." },
  { icon: "📊", title: "Business Analytics",       desc: "Learn to transform raw data into strategic insight with tools like Power BI, Python, and SQL." },
  { icon: "📣", title: "Digital Marketing",        desc: "Master SEO, paid media, content strategy, and conversion optimisation with live campaign work." },
  { icon: "🤝", title: "Soft Skills & Leadership", desc: "Communication, negotiation, emotional intelligence, and executive presence for every stage of your career." },
  { icon: "🗂️", title: "Project Management",      desc: "Agile, Scrum, PMP exam prep, and risk management — everything to lead complex projects with confidence." },
  { icon: "🌍", title: "Language Training",        desc: "Business-focused language courses that prepare you to communicate globally with clarity and confidence." },
];

export const COURSES = [
  {
    badge: "Bestseller",
    title: "Full-Stack Web Development",
    weeks: 12, students: "2.5k",
    price: "$499", orig: "$899",
    desc: "From HTML fundamentals to deploying React + Node.js apps on the cloud — a career-changing deep dive.",
  },
  {
    badge: "New Intake",
    title: "Data Science & Machine Learning",
    weeks: 10, students: "1.8k",
    price: "$599", orig: "$999",
    desc: "Python, pandas, scikit-learn, and neural networks. Build a portfolio that impresses top employers.",
  },
  {
    badge: "Popular",
    title: "Digital Marketing Mastery",
    weeks: 6, students: "3.2k",
    price: "$349", orig: "$649",
    desc: "Hands-on SEO, Google Ads, email automation, and analytics with real client campaigns.",
  },
];

export const TESTIMONIALS = [
  {
    initials: "SK", name: "Sarah Kumar", role: "Software Engineer, Google",
    text: "AIMSTA completely changed my trajectory. The curriculum was rigorous, the mentors were exceptional, and within three months I had a role at Google.",
  },
  {
    initials: "MR", name: "Michael Rodriguez", role: "Data Analyst, Microsoft",
    text: "What sets AIMSTA apart is the hands-on depth. I worked on real data sets from day one. By graduation I had a portfolio I was genuinely proud of.",
  },
  {
    initials: "EP", name: "Emily Parker", role: "Marketing Director, Amazon",
    text: "The return on investment was immediate. My salary increased by 60% within six months of completing the digital marketing programme.",
  },
];

export const STATS = [
  ["15K+", "Students Trained"],
  ["98%",  "Success Rate"],
  ["50+",  "Expert Trainers"],
  ["10+",  "Years of Excellence"],
];