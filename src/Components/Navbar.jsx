import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [show, setShow] = useState(true);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {show && (
        <nav className="fixed top-0 left-0 w-full bg-transparent text-white flex justify-between items-center p-4 pl-8 pr-8 z-10">
          <a href="/">
            <img src="your-logo-url.png" alt="Logo" className="h-10" />
          </a>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <a href="#" className="hover:underline">About us</a>
              <a href="#" className="hover:underline">Our services</a>
              <a href="#" className="hover:underline">Search by area</a>
              <a href="/contact" className="hover:underline">Contact Us</a>
            </div>

          </div>
        </nav>
      )}
      {!show && (
        <div className="fixed top-0 left-0 w-full bg-transparent text-white flex flex-row-reverse p-4 pl-8 pr-8 z-10">
          <button onClick={toggleSideNav} className="flex transition duration-500 flex-row bg-transparent">
            <svg
              className="w-9 h-9"
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
      )}
      {isSideNavOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden">
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
              <a href="/contactus" className="block py-2 px-4 hover:bg-gray-200">Contact Us</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-200">Rental Properties</a>
              <a href="#" className="block py-2 px-4 hover:bg-gray-200">Search for properties</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
