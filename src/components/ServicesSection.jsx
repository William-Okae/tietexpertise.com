import React from "react";

const services = [
    {
    title: "Entrepreneurship Skill Development",
    description:
      "Develop business ideas, financial literacy, and entrepreneurial mindset.",
  },
  {
    title: "Human Resource & Workplace Training",
    description:
      "Build skills in HR, performance management, and organizational development.",
  },
  {
    title: "Information Technology (IT) Training Services",
    description:
      "Learn programming, IT management, and digital skills for the modern world.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900"
          data-aos="fade-up"
        >
          Our Services
        </h2>

        {/* Services cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 200} // stagger animation
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-900">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
