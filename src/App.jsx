// src/App.jsx — root component, wires everything together
import { useState } from "react";
import { CSS }       from "./styles.jsx";
import Navbar        from "./components/Navbar.jsx";
import HomePage      from "./pages/HomePage.jsx";
import AboutPage     from "./pages/AboutPage.jsx";
import ServicesPage  from "./pages/ServicesPage.jsx";
import CoursesPage   from "./pages/CoursesPage.jsx";
import ContactPage   from "./pages/ContactPage.jsx";

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