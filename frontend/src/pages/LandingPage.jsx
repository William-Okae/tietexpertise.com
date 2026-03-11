import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero section already has typewriter + fade-in animations */}
      <Hero />

      {/* About Section with fade-right animation */}
      <div data-aos="fade-right" data-aos-duration="1000">
        <AboutSection />
      </div>

      {/* Services Section with fade-up and staggered animation */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <ServicesSection />
      </div>

      {/* Contact Section with fade-left animation */}
      <div data-aos="fade-left" data-aos-duration="1000">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
