import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="mb-3">
        <a
          href="https://twitter.com"
          className="text-white mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://facebook.com"
          className="text-white mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          className="text-white mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      <p className="mb-0">
        &copy; 2024-2025 Movie bookings . All rights reserved.
      </p>
      <hr className="mb-3" />
    </footer>
  );
};

export default Footer;
