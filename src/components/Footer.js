import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si"; // TikTok icon

function Footer() {
  return (
    <footer className="w-full bg-black text-white text-center py-4">
      <div className="flex justify-center space-x-6 mb-2">
        <a
          href="https://www.facebook.com/profile.php?id=61574552080433"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} className="hover:text-gray-400 transition" />
        </a>
        <a
          href="https://www.instagram.com/the_shefa_bakery/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} className="hover:text-gray-400 transition" />
        </a>
        <a
          href="https://www.tiktok.com/@shefa_bakery" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTiktok size={24} className="hover:text-gray-400 transition" />
        </a>
      </div>

      <p className="text-sm">&copy; 2024 | Shefa Bakery | Abundance in Taste</p>
    </footer>
  );
}

export default Footer;
