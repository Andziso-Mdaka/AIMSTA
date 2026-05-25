// src/App.jsx — root component, wires everything together
import { useState } from "react";
import { CSS }       from "./styles.jsx";
import Navbar        from "./components/Navbar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ServicesPage from "./Pages/ServicesPage.jsx";
import CoursesPage from "./Pages/CoursesPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

const PAGES = {
  Home:     HomePage,
  About:    AboutPage,
  Services: ServicesPage,
  Courses:  CoursesPage,
  Contact:  ContactPage,
};

export default function App() {
  const [page, setPage] = useState("Home");

  const go = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Page = PAGES[page] || HomePage;

  return (
    <>
      {/* Inject all global styles once */}
      <style>{CSS}</style>

      <Navbar page={page} go={go} />

      <div className="page">
        <Page go={go} />
      </div>
    </>
  );
}