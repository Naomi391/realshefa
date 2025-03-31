import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="pt-20 text-center bg-pink-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-brown-700">About Us</h1>

        {/* Bakery Description */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Shefa Bakery is a home of delicious, handcrafted baked goods made with
          love, passion, and the finest ingredients. Our mission is to bring an
          abundance in taste to every bite, offering a variety of cakes,
          pastries, and cupcakes that create sweet memories for every occasion.
          We specialize in cakes for birthdays, weddings, anniversaries,
          graduations, baby showers and any other celebration. Established in
          2024, we are dedicated to providing quality and excellence in every
          treat we make.
        </p>

        {/* About the Baker */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-brown-700 mb-4">
            Know the Baker
          </h2>
          <p className="text-gray-700 text-lg">
            <strong>Naomi MOGI</strong>, the heart behind Shefa Bakery, is a
            passionate baker with a deep love for creating delightful pastries
            and cakes. A civil and software engineer by profession, she fell in
            love with cake making and turned the passion into a thriving
            business. With years of experience and a commitment to quality,
            every baked item is crafted with precision, ensuring that customers
            experience true indulgence with every bite.
          </p>
        </div>

        {/* Physical Location */}
        <div className="mt-24">
          {" "}
          {/* Increased margin-top for more space */}
          <h2 className="text-2xl font-semibold text-brown-700 mb-4">
            Our Location
          </h2>
          <p className="text-gray-700 text-lg">
            We are located in Kitengela, bringing freshly baked delights to our
            community and beyond.
          </p>
        </div>
      </div>

      {/* Footer Component */}
      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default About;
