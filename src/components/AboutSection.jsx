import React from "react";
import { Users, Target, Lightbulb } from "lucide-react"; // icons

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white text-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Section Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            About TIET Expertise Limited
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We empower individuals and organizations with world-class training
            programs in Human Resource Management, Entrepreneurship, and IT innovation.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — Image */}
          <div data-aos="fade-right">
            <img
              src="/images/about.jpg"
              alt="About TIET"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right — Text */}
          <div data-aos="fade-left" className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-900">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed">
              TIET Expertise Limited is dedicated to providing industry-relevant 
              training and development programs that equip individuals and organizations 
              with the skills needed in today’s competitive world.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our programs are carefully designed to improve professional capacity, 
              foster innovation, and create opportunities for sustainable growth.
            </p>
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {/* Mission Card */}
          <div
            className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            data-aos="zoom-in"
          >
            <Target className="text-blue-900 mb-4" size={40} />
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Our Mission</h4>
            <p className="text-gray-600">
              To deliver transformational training that empowers individuals and
              institutions with the skills to thrive.
            </p>
          </div>

          {/* Vision Card */}
          <div
            className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <Lightbulb className="text-blue-900 mb-4" size={40} />
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Our Vision</h4>
            <p className="text-gray-600">
              To become the leading hub for capacity building, skills development, 
              and innovation in Africa.
            </p>
          </div>

          {/* Team Card */}
          <div
            className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Users className="text-blue-900 mb-4" size={40} />
            <h4 className="text-xl font-semibold text-blue-900 mb-2">Our Values</h4>
            <p className="text-gray-600">
              Excellence, innovation, integrity, and a commitment to continuous learning.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
