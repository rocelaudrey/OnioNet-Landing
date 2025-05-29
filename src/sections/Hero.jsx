import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[700px] pt-24 pb-10 md:pt-24 md:pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              A Sustainable Tagging and Tracking System for Cold Storage
              Facilities
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Tag. Track. Thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn btn-secondary">
                Get Started
              </a>
              <a
                href="#about"
                className="btn bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/assets/hero.jpg"
                alt="OnioNet Tracking Interface"
                className="w-full max-w-xl rounded-lg shadow-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
