import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/cakebg.jpg";
import Footer from "../components/Footer";

function Home() {
  return (
    <div
      className="pt-20 min-h-screen flex flex-col items-center text-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 pb-20">
        {/* Order Now Button */}
        <Link to="/order">
          <button className="mt-40 px-6 py-3 bg-white text-black text-lg font-bold rounded-full shadow-md border-2 border-black hover:bg-gray-100 transition transform hover:scale-110 ml-96">
            Order Now
          </button>
        </Link>

        {/* Main Heading */}
        <h1 className="mt-8 text-5xl font-extrabold text-gray-800 leading-tight tracking-tight ml-96">
          <span className="text-brown-700">Freshly Baked,</span>
          <br />
          <span className="text-black-600">Just for You</span>
        </h1>

        {/* Short Description */}
        <p className="mt-4 text-lg text-black-600 max-w-lg mx-auto ml-96">
          <span className="block font-semibold text-xl">
            An abundance in taste.
          </span>
          Discover the finest artisanal bread and pastries, made fresh daily
          with love and the best ingredients.
        </p>

        {/* View Our Creations Button */}
        <Link to="/gallery">
          <button className="mt-6 px-6 py-3 bg-gray-100 text-black text-lg font-bold rounded-full shadow-md border-2 border-black hover:bg-white transition transform hover:scale-110 ml-96">
            View Our Creations
          </button>
        </Link>

        {/* View Pricelist Button */}
        <a href="/pricelist.jpg" target="_blank" rel="noopener noreferrer">
          <button className="mt-4 px-6 py-3 bg-white text-black text-lg font-bold rounded-full shadow-md border-2 border-black hover:bg-gray-100 transition transform hover:scale-110 ml-96">
            View Our Pricelist
          </button>
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
