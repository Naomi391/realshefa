import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social icons

function Footer() {
  return (
    <footer className="w-full bg-black text-white text-center py-4">
      <div className="flex justify-center space-x-6 mb-2">
        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} className="hover:text-gray-400 transition" />
        </a>
        <a
          href="https://instagram.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} className="hover:text-gray-400 transition" />
        </a>
        <a
          href="https://twitter.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} className="hover:text-gray-400 transition" />
        </a>
      </div>

      <p className="text-sm">&copy; 2024 | Shefa Bakery | Abundance in Taste</p>
    </footer>
  );
}

export default Footer;
