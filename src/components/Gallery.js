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

const cakes = [
  {
    flavor: "Chocolate-mint",
    images: [cake1, cake2, cake8, cake30, cake31, cake32],
  },
  { flavor: "Vanilla", images: [cake3, cake4, cake7, cake24, cake25, cake26] },
  { flavor: "Pina colada", images: [cake5, cake6, cake9] },
  {
    flavor: "Orange",
    images: [
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
  { flavor: "Mixed flavor", images: [cake5] },
  { flavor: "White forest", images: [cake5] },
  { flavor: "Blueberry", images: [cake5] },
];

function Gallery() {
  const [selectedFlavor, setSelectedFlavor] = useState("");

  const filteredCakes = selectedFlavor
    ? cakes.filter((cake) => cake.flavor === selectedFlavor)
    : cakes;

  return (
    <div className="pt-20 text-center bg-pink-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-brown-700">Our Gallery</h1>

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

      {/* Cake Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {filteredCakes.map((cake) =>
          cake.images.map((image, index) => (
            <div
              key={`${cake.flavor}-${index}`}
              className="bg-white shadow-md p-4 rounded-lg"
            >
              <img
                src={image}
                alt={cake.flavor}
                className="w-full h-96 object-cover rounded-md"
              />
              <p className="mt-2 text-lg font-semibold text-gray-700">
                {cake.flavor} Cake
              </p>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default Gallery;
