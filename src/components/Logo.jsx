import React from "react";
import logo from "../assets/logo.png"; // Adjust path if needed

const Logo = ({ color = "text-purple-700" }) => {
  return (
    <a href="#home" className={`flex items-center text-2xl font-bold ${color}`}>
      <img src={logo} alt="OnioNet Logo" className="w-8 h-8 mr-2" />
      Onio<span className="text-amber-600">Net</span>
    </a>
  );
};

export default Logo;
