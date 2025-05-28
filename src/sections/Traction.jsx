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

        {/* Project Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            Project Timeline
          </h3>

          <div className="relative bg-gray-100 rounded-2xl p-6 overflow-hidden">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-6 right-6 h-1 bg-purple-700 z-0 transform -translate-y-1/2"></div>

            {/* Larger Floating Map Pin */}
            <div className="absolute top-[calc(60%-60px)] left-[25%] transform -translate-x-1/2 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 fill-black drop-shadow-lg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" />
              </svg>
            </div>

            {/* Milestones */}
            <div className="relative z-10 flex justify-between items-center text-center">
              {/* Dev */}
              <div className="flex flex-col items-center w-1/5">
                <div className="w-4 h-4 bg-black rounded-full border-2 border-white mb-2"></div>
                <span className="text-sm font-semibold">Dev</span>
              </div>

              {/* Launch */}
              <div className="flex flex-col items-center w-1/5">
                <div className="w-4 h-4 bg-purple-600 rounded-full mb-2"></div>
                <span className="text-sm font-semibold">Launch</span>
              </div>

              {/* Year 1 */}
              <div className="flex flex-col items-center w-1/5">
                <div className="w-4 h-4 bg-purple-700 rounded-full mb-2"></div>
                <div className="bg-purple-700 text-white px-3 py-1 text-xs rounded-md shadow-md mb-2">
                  <strong>Year 1</strong>
                  <br />1 Cold Storage
                </div>
              </div>

              {/* Year 2 */}
              <div className="flex flex-col items-center w-1/5">
                <div className="w-4 h-4 bg-purple-800 rounded-full mb-2"></div>
                <div className="bg-purple-800 text-white px-3 py-1 text-xs rounded-md shadow-md mb-2">
                  <strong>Year 2</strong>
                  <br />
                  3–5 Cold Storages
                </div>
              </div>

              {/* Year 3 */}
              <div className="flex flex-col items-center w-1/5">
                <div className="w-4 h-4 bg-black rounded-full mb-2"></div>
                <div className="bg-black text-white px-3 py-1 text-xs rounded-md shadow-md mb-2">
                  <strong>Year 3</strong>
                  <br />
                  Expand to other region
                </div>
              </div>
            </div>
          </div>
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
        {/* 
        Testimonials
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
        </div> */}
      </div>
    </section>
  );
};

export default Traction;
