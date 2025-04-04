import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import OrderForm from "./components/OrderForm"; // Import OrderForm component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<OrderForm />} /> {/* Update path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
