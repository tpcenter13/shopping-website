'use client';

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Newsletter Section */}
          <div className="w-full md:w-1/4">
            <div className="p-4 rounded-lg">
              <h2 className="text-white text-lg font-semibold mb-2">GET THE LATEST UPDATES</h2>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full p-2 pr-12 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none text-sm"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-gray-800 rounded-lg hover:bg-gray-600"
                  aria-label="Submit"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
              <p className="text-gray-300 text-xs mt-2">
                By clicking you agree to our Privacy Policy term. You always have the
                choice to unsubscribe within every email you receive.
              </p>
            </div>
          </div>

          {/* Quick Links & Help Section */}
          <div className="flex flex-col md:flex-row justify-end gap-20 md:w-2/3">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#home" className="hover:text-gray-300">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-300">About</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-gray-300">Products</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-300">Contact</a>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="font-semibold mb-2">Help</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#faq" className="hover:text-gray-300">FAQ</a>
                </li>
                <li>
                  <a href="#support" className="hover:text-gray-300">Support</a>
                </li>
                <li>
                  <a href="#shipping" className="hover:text-gray-300">Shipping Info</a>
                </li>
                <li>
                  <a href="#returns" className="hover:text-gray-300">Returns & Refunds</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Shopping Website. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
