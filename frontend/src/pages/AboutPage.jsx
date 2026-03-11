import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const coreValues = [
  { title: "Integrity", desc: "We uphold honesty and strong moral principles in all operations." },
  { title: "Innovation", desc: "We embrace creativity and modern solutions in teaching and learning." },
  { title: "Excellence", desc: "We deliver top-tier results through quality training and service." },
  { title: "Collaboration", desc: "We work closely with learners and partners to achieve success." },
  { title: "Lifelong Learning", desc: "We promote continuous growth and knowledge advancement." },
];

const whyChooseUs = [
  "Practical, hands-on training approach",
  "Qualified trainers with industry experience",
  "Flexible learning modes — in-person & virtual",
  "Job readiness & business support ecosystem",
];

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      {/* Banner Section */}
      <section className="bg-blue-900 text-white py-28" data-aos="fade-down">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Building a vibrant learning community driven by innovation, employability, and business development skills.
          </p>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Who We Are</h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              TIET Expertise Ltd was established to build a vibrant learning community driven by 
              innovation, employability and business development skills. We provide industry-aligned 
              training that empowers individuals and organizations to thrive in today’s competitive world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-16">

          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              To develop capacity through practical, industry-aligned training that enhances entrepreneurship,
              workforce productivity and digital competence.
            </p>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              To become a leading hub for skills advancement and professional growth across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12" data-aos="fade-up">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h4>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8" data-aos="fade-up">
            Why Choose TIET Expertise?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg shadow hover:bg-gray-100 transition"
                data-aos="fade-right"
                data-aos-delay={index * 150}
              >
                <span className="text-blue-900 text-3xl font-bold">✔</span>
                <p className="text-lg md:text-xl text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
