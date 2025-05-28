import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialCard from "../components/TestimonialCard";

const Traction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      value: "30+",
      label: "Storage Facilities",
      description: "Using OnioNet across the country",
    },
    {
      value: "5M+",
      label: "Tons of Onions",
      description: "Tracked and managed annually",
    },
    {
      value: "32%",
      label: "Less Waste",
      description: "Average reduction reported by clients",
    },
    {
      value: "99.8%",
      label: "Accuracy",
      description: "In inventory tracking and management",
    },
  ];

  const testimonials = [
    {
      quote:
        "OnioNet has transformed how we manage our cold storage. The real-time tracking and environmental monitoring have reduced our waste by nearly 40%.",
      author: "Sarah Johnson",
      role: "Operations Manager",
      company: "FreshField Farms",
      rating: 5,
    },
    {
      quote:
        "The ROI we've seen with OnioNet has been remarkable. Installation was smooth, and we saw results within the first month of implementation.",
      author: "Michael Chen",
      role: "Director of Supply Chain",
      company: "Global Produce Inc.",
      rating: 5,
    },
    {
      quote:
        "As one of the early adopters of OnioNet, I can confidently say it's the best investment we've made for our storage operations in the last decade.",
      author: "Robert Martinez",
      role: "CEO",
      company: "Martinez Onion Farms",
      rating: 5,
    },
  ];

  return (
    <section id="traction" ref={ref} className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Our <span className="text-purple-700">Traction</span>
          </h2>
          <p className="section-subtitle">
            OnioNet is trusted by leading storage facilities and agricultural
            businesses across the country. See the difference we're making in
            the industry.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl font-bold text-purple-700 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-600 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Supported By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-700 to-purple-900 text-white rounded-2xl p-8 mb-20"
        >
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <span className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              In Partnership With
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              We are supported by organizations that believe in digital
              agriculture
            </h3>
            <p className="mb-10 text-purple-100">
              These partners help us bring transparency and technology into
              onion cold storage across the Philippines.
            </p>

            {/* Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img
                src="/src/assets/birdc.jpg"
                alt="BIRD-C Logo"
                className="w-[150px] h-[150px] object-contain border border-white rounded-xl"
              />
              <img
                src="/src/assets/ttbdo.jpg"
                alt="TTBDO Logo"
                className="w-[150px] h-[150px] object-contain border border-white rounded-xl"
              />
              <img
                src="/src/assets/yfc.jpg"
                alt="Young Farmers Challenge Logo"
                className="w-[150px] h-[150px] object-contain border border-white rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <h3 className="text-2xl font-bold text-center mb-8">
          What Our Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Traction;
