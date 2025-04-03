import React, { useState } from "react";
import Footer from "../components/Footer";
import cake1 from "../assets/cake1.jpg";
import cake2 from "../assets/cake2.jpg";
import cake3 from "../assets/cake3.jpg";
import cake4 from "../assets/cake4.jpg";
import cake5 from "../assets/cake5.jpg";
import cake6 from "../assets/cake6.jpg";
import cake7 from "../assets/cake7.jpg";
import cake8 from "../assets/cake8.jpg";
import cake9 from "../assets/cake9.jpg";
import cake10 from "../assets/cake10.jpg";
import cake11 from "../assets/cake11.jpg";
import cake12 from "../assets/cake12.jpg";
import cake13 from "../assets/cake13.jpg";
import cake14 from "../assets/cake14.jpg";
import cake15 from "../assets/cake15.jpg";
import cake16 from "../assets/cake16.jpg";
import cake17 from "../assets/cake17.jpg";
import cake18 from "../assets/cake18.jpg";
import cake19 from "../assets/cake19.jpg";
import cake20 from "../assets/cake20.jpg";
import cake21 from "../assets/cake21.jpg";
import cake22 from "../assets/cake22.jpg";
import cake23 from "../assets/cake23.jpg";
import cake24 from "../assets/cake24.jpg";
import cake25 from "../assets/cake25.jpg";
import cake26 from "../assets/cake26.jpg";
import cake27 from "../assets/cake27.jpg";
import cake28 from "../assets/cake28.jpg";
import cake29 from "../assets/cake29.jpg";
import cake30 from "../assets/cake30.jpg";
import cake31 from "../assets/cake31.jpg";
import cake32 from "../assets/cake32.jpg";
import cake33 from "../assets/cake33.jpg";
import cake34 from "../assets/cake34.jpg";
import cake35 from "../assets/cake35.jpg";
import cake37 from "../assets/cake37.jpg";
import cake38 from "../assets/cake38.jpg";
import cake39 from "../assets/cake39.jpg";
import cake40 from "../assets/cake40.jpg";
import cake41 from "../assets/cake41.jpg";
import cake42 from "../assets/cake42.jpg";
import cake43 from "../assets/cake43.jpg";
import cake44 from "../assets/cake44.jpg";
import cake45 from "../assets/cake45.jpg";
import cake46 from "../assets/cake46.jpg";
import cake47 from "../assets/cake47.jpg";
import cake48 from "../assets/cake48.jpg";
import cake49 from "../assets/cake49.jpg";
import cake50 from "../assets/cake50.jpg";

const cakes = [
  {
    flavor: "Chocolate-mint",
    images: [cake1, cake2, cake8, cake30, cake31, cake32],
  },
  { flavor: "Vanilla", images: [cake7, cake24, cake25, cake26] },
  { flavor: "Pina colada", images: [cake6, cake9] },
  {
    flavor: "Orange",
    images: [
      cake3,
      cake4,
      cake5,
      cake10,
      cake11,
      cake12,
      cake13,
      cake14,
      cake15,
      cake16,
      cake17,
      cake18,
      cake19,
      cake20,
      cake21,
      cake22,
      cake23,
      cake27,
      cake28,
      cake29,
      cake33,
      cake34,
      cake35,
    ],
  },
  { flavor: "White forest", images: [cake37, cake38, cake39] },
  { flavor: "Mixed flavor", images: [cake42, cake43, cake44, cake45, cake46] },
  { flavor: "Blueberry", images: [cake40, cake41] },
  { flavor: "Corporate", images: [cake47, cake48, cake49, cake50] },
];

function Gallery() {
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(
    cakes.reduce((acc, cake) => {
      acc[cake.flavor] = 0;
      return acc;
    }, {})
  );

  const filteredCakes = selectedFlavor
    ? cakes.filter((cake) => cake.flavor === selectedFlavor)
    : cakes;

  const handleNext = (flavor, maxIndex) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [flavor]: prev[flavor] < maxIndex ? prev[flavor] + 1 : 0,
    }));
  };

  const handlePrev = (flavor, maxIndex) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [flavor]: prev[flavor] > 0 ? prev[flavor] - 1 : maxIndex,
    }));
  };

  return (
    <div className="pt-24 text-center bg-pink-100 min-h-screen">
      {/* Title removed */}

      {/* Flavor Filter */}
      <div className="mb-6">
        <label className="text-lg font-semibold text-gray-800 mr-2">
          Filter by Flavor:
        </label>
        <select
          onChange={(e) => setSelectedFlavor(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          <option value="">All</option>
          {cakes.map((cake) => (
            <option key={cake.flavor} value={cake.flavor}>
              {cake.flavor}
            </option>
          ))}
        </select>
      </div>

      {/* Cake Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {filteredCakes.map((cake) => {
          const maxIndex = cake.images.length - 1;
          const currentImage = cake.images[carouselIndex[cake.flavor]];

          return (
            <div
              key={cake.flavor}
              className="relative bg-white shadow-md p-4 rounded-lg"
            >
              {/* Image Display (Full Container) */}
              <img
                src={currentImage}
                alt={cake.flavor}
                className="w-full h-96 object-cover rounded-md"
              />

              {/* Navigation Buttons */}
              {cake.images.length > 1 && (
                <>
                  <button
                    onClick={() => handlePrev(cake.flavor, maxIndex)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 
                    bg-gray-900 text-white p-3 rounded-full text-2xl shadow-md 
                    hover:bg-gray-700 transition focus:outline-none focus:ring-2 
                    focus:ring-gray-500"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={() => handleNext(cake.flavor, maxIndex)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 
                    bg-gray-900 text-white p-3 rounded-full text-2xl shadow-md 
                    hover:bg-gray-700 transition focus:outline-none focus:ring-2 
                    focus:ring-gray-500"
                  >
                    &#8594;
                  </button>
                </>
              )}
              <p className="mt-2 text-lg font-semibold text-gray-700">
                {cake.flavor} Cakes
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Gallery;
