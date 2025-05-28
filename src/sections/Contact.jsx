import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiPhone, FiMapPin, FiCheck } from "react-icons/fi";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FiMail size={20} />,
      title: "Email",
      info: "onionetnv@gmail.com",
      action: "mailto:onionetnv@gmail.com",
    },
    {
      icon: <FiPhone size={20} />,
      title: "Phone",
      info: "+63 998 951 5175",
      action: "tel:+639989515175",
    },
    {
      icon: <FiMapPin size={20} />,
      title: "Office",
      info: "Isabela State University Cauayan Campus, San Fermin, Cauayan City, Isabela",
      action: "#",
    },
  ];

  return (
    <section id="contact" ref={ref} className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Get in <span className="text-purple-700">Touch</span>
          </h2>
          <p className="section-subtitle">
            Interested in smarter cold storage? OnioNet is already helping
            farmers and co-ops reduce waste and regain trust. Reach out for a
            quick walkthrough or to explore partnership opportunities.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-purple-100 text-purple-700 p-3 rounded-full mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <a
                        href={item.action}
                        className="text-gray-600 hover:text-purple-700"
                      >
                        {item.info}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-semibold mt-6">Find Us</h3>
              <div className="mt-2 rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.7651248015773!2d121.76212317471484!3d16.936874215628038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385515a297d2421%3A0xe175be2e1e169714!2sBIRD%20C!5e0!3m2!1sen!2sph!4v1748443164438!5m2!1sen!2sph"
                  width="100%"
                  height="205"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OnioNet Office Map"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-8">Founders</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-items-center">
                {/* Founder Card */}
                <div className="relative w-[180px]">
                  <img
                    src="/src/assets/ken.jpg"
                    alt="Ken Quiambao"
                    className="rounded-xl shadow-md w-full"
                  />
                  <span className="absolute right-0 bottom-12 bg-white text-sm text-gray-800 px-2 py-1 rounded-l font-medium shadow">
                    Project Lead
                  </span>
                  <p className="mt-6 text-center font-semibold">Ken Quiambao</p>
                </div>

                <div className="relative w-[180px]">
                  <img
                    src="/src/assets/jericho.png"
                    alt="Jericho Pineda"
                    className="rounded-xl shadow-md w-full"
                  />
                  <span className="absolute right-0 bottom-12 bg-white text-sm text-gray-800 px-2 py-1 rounded-l font-medium shadow">
                    Developer
                  </span>
                  <p className="mt-4 text-center font-semibold">
                    Jericho Pineda
                  </p>
                </div>

                <div className="relative w-[180px]">
                  <img
                    src="/src/assets/mc.png"
                    alt="MC Osmund Espejo"
                    className="rounded-xl shadow-md w-full"
                  />
                  <span className="absolute right-0 bottom-10 bg-white text-sm text-gray-800 px-2 py-1 rounded-l font-medium shadow">
                    Developer
                  </span>
                  <p className="mt-4 text-center font-semibold">
                    MC Osmund Espejo
                  </p>
                </div>

                <div className="relative w-[180px]">
                  <img
                    src="/src/assets/rocel.png"
                    alt="Rocel Batara"
                    className="rounded-xl shadow-md w-full"
                  />
                  <span className="absolute right-0 bottom-10 bg-white text-sm text-gray-800 px-2 py-1 rounded-l font-medium shadow">
                    Adviser
                  </span>
                  <p className="mt-4 text-center font-semibold">Rocel Batara</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
