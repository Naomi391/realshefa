import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    eventDetails: "",
    customEvent: "",
    cakeWeight: "",
    cakeDesign: "",
    cakeFlavour: "",
    customFlavour: "",
    phoneNumber: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event =
      formData.eventDetails === "Other"
        ? formData.customEvent
        : formData.eventDetails;
    const flavour =
      formData.cakeFlavour === "Other"
        ? formData.customFlavour
        : formData.cakeFlavour;

    const templateParams = {
      name: formData.name,
      eventDetails: event,
      cakeWeight: formData.cakeWeight,
      cakeDesign: formData.cakeDesign,
      cakeFlavour: flavour,
      phoneNumber: formData.phoneNumber,
    };

    emailjs
      .send(
        "service_jrm6dqd", // Replace with your Service ID
        "template_8u66yjb", // Replace with your Template ID
        templateParams,
        "5Xzlt1-MPMejY-PeT" // Replace with your Public Key
      )
      .then(
        () => {
          setFormStatus("Your order has been placed successfully!");
          setFormData({
            name: "",
            eventDetails: "",
            customEvent: "",
            cakeWeight: "",
            cakeDesign: "",
            cakeFlavour: "",
            customFlavour: "",
            phoneNumber: "",
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setFormStatus("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="pt-20 min-h-screen bg-pink-100 text-center flex flex-col">
      <h1 className="text-4xl font-bold mb-4 text-brown-700">
        Place Your Cake Order
      </h1>

      <p className="text-lg text-gray-600 mb-4">
        For more inquiry, visit our{" "}
        <Link
          to="/contact"
          className="text-pink-600 underline hover:text-pink-800 font-semibold"
        >
          Contact Us
        </Link>{" "}
        page.
      </p>

      <p className="text-lg text-gray-600 mb-12">
        Fill out the form below to place your order. We'll get back to you
        shortly!
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto px-4 space-y-6 mb-16"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />

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

        {formData.eventDetails === "Other" && (
          <input
            type="text"
            name="customEvent"
            value={formData.customEvent}
            onChange={handleChange}
            placeholder="Specify your event"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        )}

        <input
          type="number"
          name="cakeWeight"
          value={formData.cakeWeight}
          onChange={handleChange}
          placeholder="Cake Weight (in kg)"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />

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

        {formData.cakeFlavour === "Other" && (
          <input
            type="text"
            name="customFlavour"
            value={formData.customFlavour}
            onChange={handleChange}
            placeholder="Specify your flavour"
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        )}

        <textarea
          name="cakeDesign"
          value={formData.cakeDesign}
          onChange={handleChange}
          placeholder="Cake Design in Mind (Optional)"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />

        <button
          type="submit"
          className="bg-brown-600 text-black px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-black border-4 border-black"
        >
          Submit Order
        </button>
      </form>

      {formStatus && (
        <div className="mt-6 text-lg font-semibold text-gray-700">
          {formStatus}
        </div>
      )}

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
}

export default OrderForm;
