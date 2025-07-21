import React from "react";
import {
  FaBirthdayCake,
  FaCookieBite,
  FaChalkboardTeacher,
} from "react-icons/fa";
import Footer from "../components/Footer"; // Update this path if needed

function OurServices() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Section */}
      <section
        className="bg-pink-50 pt-32 pb-16 px-4 text-center flex-grow"
        id="services"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-10">
          Our Services
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Custom Cakes */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaBirthdayCake size={40} className="text-pink-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Custom Cakes</h3>
            <p className="text-gray-700">
              Delicious cakes for birthdays, weddings, and special occasions —
              tailored to your theme.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaCookieBite size={40} className="text-pink-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Pastries & Treats</h3>
            <p className="text-gray-700">
              Freshly baked cookies, cupcakes, sausage rolls, cakesickles and
              desserts made with love.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaChalkboardTeacher
              size={40}
              className="text-pink-600 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Baking Classes</h3>
            <p className="text-gray-700">
              Join our hands-on baking classes and learn to create beautiful and
              tasty treats like a pro!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OurServices;
