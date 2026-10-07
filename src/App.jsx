// src/App.jsx — root component: hash routing so every page has a shareable URL
import { useEffect, useState } from "react";
import Navbar       from "./components/Navbar.jsx";
import Footer       from "./components/Footer.jsx";
import HomePage     from "./Pages/HomePage.jsx";
import AboutPage    from "./Pages/AboutPage.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import CoursesPage  from "./Pages/CoursesPage.jsx";
import ContactPage  from "./Pages/ContactPage.jsx";

const PAGES = [
  { id: "home",       label: "Home",       Component: HomePage,     title: "AIMSTA | Professional training for South African teams" },
  { id: "about",      label: "About",      Component: AboutPage,    title: "About | AIMSTA" },
  { id: "services",   label: "Services",   Component: ServicesPage, title: "Training areas | AIMSTA" },
  { id: "programmes", label: "Programmes", Component: CoursesPage,  title: "Programmes | AIMSTA" },
  { id: "contact",    label: "Contact",    Component: ContactPage,  title: "Request a proposal | AIMSTA" },
];

const fromHash = () => {
  const id = window.location.hash.replace(/^#\/?/, "");
  return PAGES.some((p) => p.id === id) ? id : "home";
};

export default function App() {
  const [page, setPage]   = useState(fromHash);
  const [brief, setBrief] = useState(null); // carried from the home planner into the contact form

  useEffect(() => {
    const onHash = () => setPage(fromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.title = PAGES.find((p) => p.id === page).title;
    window.scrollTo({ top: 0 });
  }, [page]);

  const go = (id, data) => {
    if (data) setBrief(data);
    if (id === page) window.scrollTo({ top: 0, behavior: "smooth" });
    else window.location.hash = id === "home" ? "/" : `/${id}`;
  };

  const { Component } = PAGES.find((p) => p.id === page);

  return (
    <>
      <a
        className="skip" href="#main"
        onClick={(e) => { e.preventDefault(); document.getElementById("main").focus(); }}
      >
        Skip to content
      </a>
      <Navbar page={page} go={go} />
      <main id="main" tabIndex={-1}>
        <Component go={go} brief={brief} />
      </main>
      <Footer go={go} showClose={page !== "contact"} />
    </>
  );
}
