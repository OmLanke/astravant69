import React, { useState } from 'react';

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-transparent text-white flex justify-between items-center p-4 z-10">
        <img src="your-logo-url.png" alt="Logo" className="h-10" />

        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Search by Area</a>
            <a href="#" className="hover:underline">Find Your Dream Home</a>
            <a href="#" className="hover:underline">Our Services</a>
            <a href="#" className="hover:underline">About Us</a>
          </div>
          <button onClick={toggleSideNav} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isSideNavOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="fixed top-0 right-0 w-64 bg-white h-full shadow-lg z-50">
            <button onClick={toggleSideNav} className="p-4 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="p-4">
              <a href="#" className="block py-2 px-4 hover:bg-gray-200">Want to get your property listed?</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-200">Contact Us</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-200">Rental Properties</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-200">Search for properties</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
