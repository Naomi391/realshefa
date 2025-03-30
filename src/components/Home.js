import React from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="pt-20">
      {" "}
      {/* Add padding-top to account for fixed navbar */}
      <Hero
        title="Artisanal Baked Goods Made Fresh Daily"
        imageUrl="https://images.pexels.com/photos/1070880/pexels-photo-1070880.jpeg"
        imageAlt="Fresh baked pastries and bread on a rustic wooden table"
      />
      {/* Add more sections as needed */}
    </div>
  );
}

export default Home;
