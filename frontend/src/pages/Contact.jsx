// src/pages/Contact.jsx
import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import carImg from "../assets/carcontact.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-200 pt-24 flex items-center justify-center px-4">
      
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div
          className="relative p-10 flex flex-col justify-end bg-cover bg-center"
          style={{ backgroundImage: `url(${carImg})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0f172a]/80"></div>

          {/* CONTENT */}
          <div className="relative z-10 space-y-4">
            
            {/* TITLE */}
            <h2 className="text-3xl font-semibold text-cyan-400">
              More Methods
            </h2>

            {/* EMAIL LABEL */}
            <p className="text-white text-sm">Your Email</p>

            {/* EMAIL */}
            <div className="flex items-center text-gray-300">
              <FaEnvelope className="mr-3 text-gray-400" />
              <span>youssraouzahra@gmail.com</span>
            </div>

            {/* CONNECT */}
            <p className="text-white font-medium mt-4">
              Connect
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-4 text-gray-300 text-xl">
              <a href="#" className="hover:text-white transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaLinkedin />
              </a>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 bg-white">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Feedback
          </h2>

          <form className="space-y-5">
            
            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-gray-100 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="you@gmail.com"
                className="w-full bg-gray-100 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Email Message
              </label>
              <textarea
                placeholder="Write anything ..."
                className="w-full bg-gray-100 border border-gray-200 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition w-full"
            >
              Send Email
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}