// src/App.jsx — root component, wires everything together
import { useState } from "react";
import { CSS } from "./styles";
import Navbar        from "./components/Navbar";
import HomePage      from "./pages/HomePage";
import AboutPage     from "./pages/AboutPage";
import ServicesPage  from "./pages/ServicesPage";
import CoursesPage   from "./pages/CoursesPage";
import ContactPage   from "./pages/ContactPage";

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