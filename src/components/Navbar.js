import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Shefa Bakery LOGO.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Shefa Bakery Logo" className="h-12 w-auto" />
            <span className="text-lg sm:text-xl font-bold text-gray-800">
              Shefa Bakery
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-800 hover:text-pink-600">
              Home
            </Link>
            <a href="/services" className="text-gray-800 hover:text-pink-600">
              Our Services
            </a>
            <Link to="/about" className="text-gray-800 hover:text-pink-600">
              About
            </Link>
            <Link to="/gallery" className="text-gray-800 hover:text-pink-600">
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-pink-600">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-pink-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-3 rounded-b-md shadow-md">
            <div className="px-4 space-y-2">
              <Link
                to="/"
                className="block text-gray-800 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href="/services"
                className="block text-gray-800 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </a>
              <Link
                to="/about"
                className="block text-gray-800 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/gallery"
                className="block text-gray-800 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="block text-gray-800 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
