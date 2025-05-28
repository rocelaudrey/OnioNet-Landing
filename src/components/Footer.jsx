import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Press', href: '#' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Tagging System', href: '#' },
        { name: 'Tracking Software', href: '#' },
        { name: 'Analytics Dashboard', href: '#' },
        { name: 'Storage Optimization', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'API', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Compliance', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <FiTwitter size={20} />, href: '#' },
    { name: 'LinkedIn', icon: <FiLinkedin size={20} />, href: '#' },
    { name: 'Facebook', icon: <FiFacebook size={20} />, href: '#' },
    { name: 'GitHub', icon: <FiGithub size={20} />, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Logo color="text-white" />
            <p className="mt-4 text-gray-400 max-w-xs">
              Revolutionizing onion storage management with cutting-edge tagging and tracking technology.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-purple-700 transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} OnioNet. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;