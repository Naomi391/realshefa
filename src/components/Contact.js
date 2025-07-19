import React, { useState, useRef } from "react";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";

function ContactUs() {
  const formRef = useRef();

  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jrm6dqd",
        "template_tchb4xz",
        formRef.current,
        "5Xzlt1-MPMejY-PeT"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setFormStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Email failed:", error.text);
          setFormStatus("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="pt-20 text-center bg-pink-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-brown-700">Contact Us</h1>

      {/* Contact Information */}
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="text-lg font-semibold text-gray-800">
          <p>
            Phone:{" "}
            <a href="tel:+254742776111" className="text-blue-600">
              0742 776 111
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:naomimogiskitchen@gmail.com"
              className="text-blue-600"
            >
              naomimogiskitchen@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61574552080433"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/the_shefa_bakery/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@shefa_bakery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            TikTok
          </a>
        </div>

        {/* Contact Form */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send an Inquiry
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-400 rounded-md"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-400 rounded-md"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-400 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          {formStatus && (
            <div className="mt-4 text-md font-semibold text-gray-700">
              {formStatus}
            </div>
          )}
        </div>

        {/* Google Map */}
        <div className="mt-8"></div>
      </div>

      {/* Footer */}
      <div className="w-full mt-10">
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
