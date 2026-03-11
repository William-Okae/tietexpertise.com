import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-blue-900" : "text-white"
          }`}
        >
          TIET Expertise Ltd.
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 font-medium transition-colors duration-300 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
          <li><Link to="/training" className="hover:text-blue-500">Training</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={28} className={scrolled ? "text-blue-900" : "text-white"} />
          ) : (
            <Menu size={28} className={scrolled ? "text-blue-900" : "text-white"} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 animate-fade-down">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link to="/training" onClick={() => setOpen(false)}>Training</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
