import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="#">Brand</a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gray-200">
            About
          </a>
          <a href="#services" className="text-white hover:text-gray-200">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-gray-200">
            Contact
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
