import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Traction", href: "#traction" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Left: Logo */}
        <Logo color={scrolled ? "text-purple-700" : "text-white"} />

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 hover:text-primary ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Get Started and Mobile Menu */}
        <div className="flex items-center">
          {/* Desktop button */}
          <div className="hidden md:block">
            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none ml-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <FiX
                className={`w-6 h-6 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            ) : (
              <FiMenu
                className={`w-6 h-6 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 font-medium hover:text-primary py-2"
                onClick={closeMobileMenu}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary w-full text-center"
              onClick={closeMobileMenu}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
