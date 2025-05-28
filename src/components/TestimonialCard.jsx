import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiStar } from 'react-icons/fi';

const TestimonialCard = ({ quote, author, role, company, rating = 5 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
    >
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="text-amber-500 fill-current" />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-4 italic">"{quote}"</blockquote>
      <div className="mt-auto">
        <p className="font-bold">{author}</p>
        <p className="text-sm text-gray-600">{role}, {company}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;