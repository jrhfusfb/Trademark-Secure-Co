import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-gray-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <a href="#top" className="flex items-center gap-2 transition hover:opacity-95">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 80" className="h-10 w-auto md:h-12">
                {/* Left Box */}
                <rect x="0" y="0" width="80" height="80" fill="#0f2247" />
                <rect x="0" y="0" width="80" height="10" fill="#c5a059" />
                <rect x="0" y="70" width="80" height="10" fill="#c5a059" />
                <text x="40" y="54" fontFamily="'Playfair Display', serif" fontSize="42" fontWeight="700" fill="#ffffff" textAnchor="middle">TS</text>
                
                {/* Right Text */}
                <text x="95" y="40" fontFamily="'Playfair Display', serif" fontSize="36" fontWeight="800" fill="#0f2247" letterSpacing="1">TRADEMARK</text>
                <line x1="95" y1="48" x2="390" y2="48" stroke="#c5a059" strokeWidth="2.5" />
                <text x="155" y="70" fontFamily="'Playfair Display', serif" fontSize="18" fill="#0f2247" letterSpacing="4">SECURE CO.</text>
              </svg>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-secondary font-medium transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300">Services</a>
            <a href="#pricing" className="text-gray-600 hover:text-secondary font-medium transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300">Pricing</a>
            <a href="#difference" className="text-gray-600 hover:text-secondary font-medium transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300">Why Us</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/91890576656" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-green-600 font-semibold transition duration-300 hover:scale-105">
              <i className="fa-brands fa-whatsapp text-xl text-green-500"></i> 890576656
            </a>
            <a href="#contact" className="bg-primary hover:bg-secondary hover:scale-105 active:scale-95 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg shadow-primary/20 hover:shadow-secondary/20">
              Get Started
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg p-1 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-lg animate-fadeIn duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a
              href="#services"
              onClick={toggleMenu}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50 transition"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={toggleMenu}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50 transition"
            >
              Pricing
            </a>
            <a
              href="#difference"
              onClick={toggleMenu}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50 transition"
            >
              Why Us
            </a>
            <div className="border-t border-gray-100 my-2 pt-2 px-3 flex flex-col gap-3">
              <a
                href="https://wa.me/91890576656"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 font-semibold transition"
              >
                <i className="fa-brands fa-whatsapp text-xl text-green-500"></i> +91 890576656
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block text-center bg-primary hover:bg-secondary text-white px-4 py-2.5 rounded-full font-medium shadow-md transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
