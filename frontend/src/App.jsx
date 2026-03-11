import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import TrainingPage from "./pages/TrainingPage";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once on scroll
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/training" element={<TrainingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
