import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero / Banner Section */}
      <section
        className="bg-blue-900 text-white py-24"
        data-aos="fade-down"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Have questions or want to enroll in our programs? Reach out to us using the form below or via our contact information.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="py-20 bg-gray-100 text-gray-900"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-3xl">
          <form
            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 hover:scale-105 transition transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section
        className="py-12 bg-white text-gray-900"
        data-aos="fade-up"
        data-aos-delay={400}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
            Our Contact Info
          </h2>
          <p className="text-lg md:text-xl flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-blue-900" /> TIET Expertise Limited, Accra, Ghana
          </p>
          <p className="text-lg md:text-xl flex items-center justify-center gap-2">
            <FaEnvelope className="text-blue-900" /> info@tietexpertise.com
          </p>
          <p className="text-lg md:text-xl flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-blue-900" /> +233 123 456 789
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
