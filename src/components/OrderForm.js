import React, { useState } from "react";
import Footer from "../components/Footer"; // Import Footer component

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    eventDetails: "",
    cakeWeight: "",
    cakeDesign: "",
    cakeFlavour: "",
    phoneNumber: "", // New field for phone number
  });

  const [formStatus, setFormStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ideally, you would connect this form to an API or email service
    setFormStatus(
      "Your order has been received. We will get in touch with you soon!"
    );
    setFormData({
      name: "",
      eventDetails: "",
      cakeWeight: "",
      cakeDesign: "",
      cakeFlavour: "",
      phoneNumber: "", // Reset phone number field
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-pink-100 text-center">
      <h1 className="text-4xl font-bold mb-8 text-brown-700">
        Place Your Cake Order
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        Fill out the form below to place your order. We'll get back to you
        shortly!
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        {/* Name Field */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Event Details Field */}
        <div>
          <select
            name="eventDetails"
            value={formData.eventDetails}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Event</option>
            <option value="Birthday">Birthday</option>
            <option value="Wedding">Wedding</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Cake Weight Field */}
        <div>
          <input
            type="number"
            name="cakeWeight"
            value={formData.cakeWeight}
            onChange={handleChange}
            placeholder="Cake Weight (in kg)"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Cake Flavour Field */}
        <div>
          <select
            name="cakeFlavour"
            value={formData.cakeFlavour}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Cake Flavour</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Red Velvet">Red Velvet</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Carrot">Carrot</option>
            <option value="Lemon">Lemon</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Cake Design Field */}
        <div>
          <textarea
            name="cakeDesign"
            value={formData.cakeDesign}
            onChange={handleChange}
            placeholder="Cake Design in Mind (Optional)"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-brown-600 text-black px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-black border-4 border-black"
          >
            Submit Order
          </button>
        </div>
      </form>

      {/* Form Status Message */}
      {formStatus && (
        <div className="mt-6 text-lg font-semibold text-gray-700">
          {formStatus}
        </div>
      )}

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

export default OrderForm;
