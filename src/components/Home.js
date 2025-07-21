import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/cakebg.jpg";
import Footer from "../components/Footer";

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main content with top and bottom padding */}
      <div className="flex-1 flex flex-col justify-between pt-32 pb-32">
        <div className="flex flex-1 w-full">
          {/* Left side */}
          <div className="w-1/2 hidden md:block"></div>

          {/* Right side */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12">
            <div className="text-center space-y-6">
              {/* Order Now Button */}
              <Link to="/order">
                <button className="px-6 py-3 bg-white text-black text-lg font-bold rounded-full shadow-md border-2 border-black hover:bg-gray-100 transition transform hover:scale-110">
                  Order Now
                </button>
              </Link>

              {/* Heading */}
              <h1 className="text-5xl font-extrabold text-gray-800 leading-tight tracking-tight">
                <span className="text-brown-700">Freshly Baked,</span>
                <br />
                <span className="text-black-600">Just for You</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-black-600">
                <span className="block font-semibold text-xl">
                  An abundance in taste.
                </span>
                Discover the finest artisanal bread and pastries, made fresh
                daily with love and the best ingredients.
              </p>

              {/* View Our Creations */}
              <Link to="/gallery">
                <button className="px-6 py-3 bg-gray-100 text-black text-lg font-bold rounded-full shadow-md border-2 border-black hover:bg-white transition transform hover:scale-110">
                  View Our Creations
                </button>
              </Link>

              {/* Space before pricelist */}
              <div className="mt-6" />

              {/* View Our Pricelist */}
              <a
                href="/pricelist.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-3 bg-white text-black text-lg font-bold rounded-full shadow-md border-2 border-black hover:bg-gray-100 transition transform hover:scale-110">
                  View Our Pricelist
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
