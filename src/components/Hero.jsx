import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const phrases = [
  "Changing the World Through Technology",
  "Empowering Human Resource Professionals",
  "Building Entrepreneurs and Innovators",
];

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100; // ms per character
    const deletingSpeed = 50; // ms per character
    const delayAfterTyping = 2000; // pause before deleting

    const handleTyping = () => {
      const fullText = phrases[currentPhrase];

      if (!isDeleting) {
        // Typing
        setDisplayedText(fullText.substring(0, displayedText.length + 1));

        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), delayAfterTyping);
        }
      } else {
        // Deleting
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhrase]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        poster="/hero-poster.jpg"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 h-24 relative">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fadeIn">
            TIET Expertise Ltd is a capacity-building organization dedicated to equipping individuals and institutions with practical skills for entrepreneurship, workforce excellence and digital advancement.          </p>

          <div className="space-x-4 animate-fadeIn delay-500">
            <ScrollLink
              to="services"
              smooth={true}
              duration={700}
              className="inline-block bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 cursor-pointer transition"
            >
              View Services
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={700}
              className="inline-block bg-blue-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 cursor-pointer transition"
            >
              Contact Us
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
