"use client";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-6 relative">
      <p>© 2025 3rafique Communication</p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://facebook.com/3rafiquecommunication" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://twitter.com/3rafiquecommunication" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://instagram.com/3rafiquecommunication" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://linkedin.com/company/3rafiquecommunication" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary"
        >
          <FaLinkedin size={30} />
        </a>
      </div>

      {/* Back to Top Button */}
      <button
        className="absolute right-6 bottom-6 bg-primary p-3 rounded-full"
        onClick={() => scroll.scrollToTop()}
      >
        ⬆️
      </button>
    </footer>
  );
}
