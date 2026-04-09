import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Code,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Sparkles,
  Star,
} from "lucide-react";

// Your phone number for WhatsApp instant booking
const WHATSAPP_NUMBER = "233530535993";

// Programme data
const programmes = [
  {
    title: "Entrepreneurship Skill Development",
    icon: Briefcase,
    items: [
      "Startup Development Training",
      "Business Planning & Financial Literacy",
      "SME Growth & Management Support",
      "Access to Mentorship & Market Insights",
    ],
  },
  {
    title: "Human Resource Training",
    icon: Users,
    items: [
      "Leadership & Team Development",
      "Workplace Ethics, Productivity & Communication",
      "Recruitment, Onboarding & Performance Management",
      "Soft Skills & Professional Behaviour Training",
    ],
  },
  {
    title: "Information Technology (IT) Training Services",
    icon: Code,
    items: [
      "Basic to Advanced Computer Literacy",
      "Data Management & Office Applications",
      "Digital Skills, Web Basics & Cloud Tools",
      "ICT for Business & Workplace Efficiency",
    ],
  },
];

// Pricing Plans
const pricingPlans = [
  {
    name: "Starter",
    price: "₵299",
    icon: Sparkles,
    features: [
      "1 Training Module",
      "Beginner-friendly sessions",
      "Digital Study Resources",
      "Certificate of Participation",
    ],
  },
  {
    name: "Professional",
    price: "₵599",
    icon: Star,
    recommended: true,
    features: [
      "3 Training Modules",
      "Hands-on Practical Exercises",
      "Mentorship Support",
      "Career or Business Guidance",
      "Certificate of Completion",
    ],
  },
  {
    name: "Executive",
    price: "₵999",
    icon: CheckCircle,
    features: [
      "Unlimited Access to All Modules",
      "1-on-1 Coaching Sessions",
      "Live Project Workshops",
      "Premium Learning Materials",
      "Professional Certification",
    ],
  },
];

// Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const TrainingPage = () => {
  const [open, setOpen] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState(null);

  const toggleSection = (idx) => {
    setOpen(open === idx ? null : idx);
  };

  const handleBooking = (programme) => {
    setSelectedProgramme(programme);
    setOpenForm(true);
  };

  const openWhatsAppBooking = (programmeTitle) => {
    const message = encodeURIComponent(
      `Hello TIET Expertise Limited, I want to book a training session for: ${programmeTitle}. Please assist me with the next steps.`
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="container mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Training & Programmes
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Industry-aligned programmes designed to build capacity in
            entrepreneurship, human resources, and digital skills.
          </p>
        </motion.div>
      </section>

      {/* PROGRAMMES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Our Training Categories
          </h2>

          <div className="space-y-8">
            {programmes.map((program, idx) => {
              const Icon = program.icon;

              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-blue-700 p-6"
                >
                  <div
                    onClick={() => toggleSection(idx)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-10 h-10 text-blue-700" />
                      <h3 className="text-xl md:text-2xl font-bold text-blue-900">
                        {program.title}
                      </h3>
                    </div>

                    {open === idx ? (
                      <ChevronUp className="w-6 h-6 text-blue-700" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-blue-700" />
                    )}
                  </div>

                  {open === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 pl-1"
                    >
                      <ul className="space-y-2">
                        {program.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-700 text-lg flex items-start"
                          >
                            <span className="text-blue-700 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-4 mt-6">
                        <button
                          onClick={() => handleBooking(program)}
                          className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                        >
                          Book Session
                        </button>

                        <button
                          onClick={() => openWhatsAppBooking(program.title)}
                          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
                        >
                          WhatsApp Booking
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Pricing Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => {
              const Icon = plan.icon;

              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-8 rounded-xl shadow-lg border ${
                    plan.recommended
                      ? "border-blue-700 bg-blue-50 scale-105"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {plan.recommended && (
                    <div className="text-center mb-3">
                      <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm">
                        Recommended
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <Icon className="w-12 h-12 mx-auto text-blue-700" />
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-center text-4xl font-bold text-blue-900 mb-6">
                    {plan.price}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-700" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() =>
                      openWhatsAppBooking(`${plan.name} Pricing Plan`)
                    }
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      plan.recommended
                        ? "bg-blue-900 text-white hover:bg-blue-700"
                        : "bg-gray-900 text-white hover:bg-gray-700"
                    }`}
                  >
                    Contact to Enroll
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />

      {/* BOOKING FORM MODAL */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-lg rounded-lg p-8 shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setOpenForm(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-5 text-blue-900">
              Book a Training Session
            </h3>

            <p className="font-semibold mb-2">
              Programme:{" "}
              <span className="text-blue-700">
                {selectedProgramme?.title}
              </span>
            </p>

            <form className="grid gap-4">
              <input
                type="text"
                className="border p-3 rounded"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                className="border p-3 rounded"
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                className="border p-3 rounded"
                placeholder="Phone Number"
              />
              <textarea
                rows="4"
                className="border p-3 rounded"
                placeholder="Additional Information (optional)"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Submit Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingPage;
