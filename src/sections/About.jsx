import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiTag,
  FiBarChart2,
  FiThermometer,
  FiTrendingUp,
} from "react-icons/fi";
import FeatureCard from "../components/FeatureCard";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FiTag size={24} />,
      title: "Smart Tagging",
      description:
        "Clip-on QR tags with unique codes track each onion bag's journey—reducing mix-ups and ensuring ownership is clear between farmers and cold storage staff.",
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: "Inventory Intelligence",
      description:
        "From bag-in to bag-out, farmers and coops receive instant data and SMS receipts—improving coordination, billing, and transparency in every transaction.",
    },
    {
      icon: <FiThermometer size={24} />,
      title: "Cold Storage Monitoring",
      description:
        "Track free space, bag counts, and temperature zones through the facility dashboard. Our system helps prevent spoilage before it starts.",
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: "Waste Reduction & ROI",
      description:
        "By preventing misplacements and optimizing usage, OnioNet helps facilities reduce waste by up to 32%—boosting both farmer profits and cooperative returns.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" ref={ref} className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="text-purple-700">OnioNet</span>
          </h2>
          <p className="section-subtitle">
            OnioNet is a smart tagging and tracking system built specifically
            for onion cold storage facilities. Designed with and for
            cooperatives, it streamlines inventory monitoring, improves
            transparency, and helps farmers and facility managers reduce
            post-harvest losses.
          </p>
        </motion.div>

        {/* Problem-Solution */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
            <p className="mb-6 text-gray-700">
              Cold storage facilities often operate with manual and outdated
              tracking methods, leading to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-red-500">●</span>
                <span>
                  Inaccurate inventory counts that disrupt sales and logistics
                </span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-red-500">●</span>
                <span>
                  Loss of onion quality due to poor monitoring of storage
                  conditions
                </span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-red-500">●</span>
                <span>
                  Up to <b>14% product waste</b>, equivalent to hundreds of
                  thousands in losses per cycle
                </span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-red-500">●</span>
                <span>
                  Farmer distrust and inefficient use of storage space
                </span>
              </li>
            </ul>
            <p className="mb-6 text-gray-700">
              These issues reduce revenue and erode trust among cooperatives and
              their members.
            </p>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
            <p className="mb-6 text-gray-700">
              OnioNet offers a locally built, farmer-centered solution:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-green-500">●</span>
                <span>QR-tag-based inventory system with 99.8% accuracy</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-green-500">●</span>
                <span>
                  Real-time tracking of bag movement, space allocation, and tag
                  ownership
                </span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-green-500">●</span>
                <span>
                  SMS alerts to farmers for incoming/outgoing updates — even for
                  non-smartphone users
                </span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-green-500">●</span>
                <span>
                  Predictive storage insights for capacity planning and loss
                  prevention
                </span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2 text-green-500">●</span>
                <span>
                  Up to 30% waste reduction and improved cooperative
                  profitability
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
