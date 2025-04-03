import React, { useState } from "react";
import Footer from "../components/Footer";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    // You can implement the form submission functionality here later
    setFormStatus("Form submitted successfully!");
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20 text-center bg-pink-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-brown-700">Contact Us</h1>

      {/* Contact Information */}
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="text-lg font-semibold text-gray-800">
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="text-blue-600">
              0742 776 111
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@shefabakery.com" className="text-blue-600">
              naomimogiskitchen@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="space-x-4">
          <a
            href="https://www.facebook.com/ShefaBakery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/ShefaBakery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/ShefaBakery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Twitter
          </a>
        </div>

        {/* Contact Form */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Send Us an Inquiry
          </h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
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
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>

          {formStatus && (
            <div className="mt-4 text-lg font-semibold text-gray-700">
              {formStatus}
            </div>
          )}
        </div>

        {/* Google Map */}
        <div className="mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15791.736297460267!2d36.91941974768772!3d-1.3620643289353332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f295179b9a0ad%3A0x4f9fd5c6d1778b24!2sKitengela!5e0!3m2!1sen!2ske!4v1678171062722!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map of Shefa Bakery in Kitengela"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
