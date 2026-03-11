import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const programmes = [
  {
    title: "Entrepreneurship Skill Development",
    description: `Training designed for aspiring entrepreneurs, start-ups, and small business owners.`,
    modules: [
      "Business Start-Up & Innovation",
      "Business Planning & Proposal Writing",
      "Financial Literacy & Bookkeeping",
      "Marketing & Sales Strategy",
      "Customer Service for SMEs",
      "Mentorship, Coaching & Business Clinics",
    ],
    outcome: "Participants acquire the skills to start, manage and scale sustainable businesses.",
  },
  {
    title: "Human Resource & Workforce Training",
    description: `Professional development programs tailored for organizations, corporate teams, institutions and individuals.`,
    modules: [
      "Leadership & Team Building",
      "Workplace Communication & Ethics",
      "Customer Relations & Service Excellence",
      "Performance Management Systems",
      "Recruitment & Talent Development",
      "Workplace Productivity Enhancement",
    ],
    outcome: "Organizations achieve better performance, culture improvement, and employee readiness.",
  },
  {
    title: "Information Technology (IT) Training",
    description: `Digital literacy and technical training for individuals and institutions.`,
    modules: [
      "Basic & Advanced Computer Literacy",
      "Office Applications (Excel, Word, PowerPoint)",
      "Data Management & Reporting Tools",
      "Digital Skills for Business",
      "Internet & Cyber Safety",
      "Web Basics & Online Productivity Tools",
    ],
    outcome: "Learners gain digital competence for career or business growth.",
  },
];

const TrainingProgramsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    programme: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const openModal = (programme) => {
    setSelectedProgramme(programme);
    setFormData({ ...formData, programme });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", programme: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://127.0.0.1:8000/api/training-booking", formData);
      alert("Booking submitted successfully!");
      closeModal();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 text-center" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Training & Programs</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We offer structured, practical programmes designed for job readiness, productivity improvement and business development. Our learning approach blends theory with hands-on application for real-world results.
        </p>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid gap-12">
          {programmes.map((prog, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition"
              data-aos="fade-up"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">{prog.title}</h2>
              <p className="text-gray-700 mb-4">{prog.description}</p>
              <h3 className="font-semibold mb-2">Modules Include:</h3>
              <ul className="list-disc list-inside mb-2">
                {prog.modules.map((mod, i) => (
                  <li key={i}>{mod}</li>
                ))}
              </ul>
              <p className="font-semibold mb-4">Outcome: {prog.outcome}</p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => openModal(prog.title)}
                  className="bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded hover:bg-yellow-400 transition"
                >
                  Book a Session
                </button>
                <a
                  href="https://calendly.com/your-calendly-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition"
                >
                  Schedule via Calendly
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative" data-aos="zoom-in">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Book: {selectedProgramme}</h2>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="programme"
                value={formData.programme}
                readOnly
                className="w-full p-3 border border-gray-300 rounded bg-gray-100 cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded font-bold text-white ${
                  loading ? "bg-gray-400" : "bg-blue-900 hover:bg-blue-800"
                } transition`}
              >
                {loading ? "Submitting..." : "Submit Booking"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingProgramsPage;
