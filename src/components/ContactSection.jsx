import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-3xl">
        {/* Section Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900"
          data-aos="fade-up"
        >
          Contact Us
        </h2>

        {/* Contact Form */}
        <form
          className="bg-gray-100 p-8 rounded-lg shadow-lg space-y-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
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
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
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
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Your Message"
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

        {/* Contact Information */}
        <div
          className="mt-12 text-center text-gray-700 space-y-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-blue-900" /> TIET Expertise Limited, Accra, Ghana
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-blue-900" /> info@tietexpertise.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="text-blue-900" /> +233 530 535 993
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
