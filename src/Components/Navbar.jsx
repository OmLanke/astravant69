import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image-2-2.png";

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  useEffect(() => {
    setIsSideNavOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {show && (
        <nav
          className={`fixed top-0 left-0 w-full ${isScrolled
            ? "bg-gray-200 bg-opacity-90 text-gray-900"
            : "bg-transparent text-white"
            } flex border-t-[16px] border-white justify-between items-center p-4 pl-8 pr-8 z-10 transition-colors duration-300`}
        >
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20 " />
          </Link>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-4">
              <Link to="/aboutus" className="hover:underline font-bold">
                About us
              </Link>
              <Link to="/services" className="hover:underline font-bold">
                Our services
              </Link>
              <Link to="/search" className="hover:underline font-bold">
                Search by Area
              </Link>
              <Link to="/contactus" className="hover:underline font-bold">
                Contact Us
              </Link>
            </div>
            <button
              onClick={toggleSideNav}
              className="px-4 rounded-md"
              style={{
                marginLeft: "auto",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
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
        </nav>
      )}
      {!show && (
        <div
          className={`fixed top-0 left-0 w-full flex flex-row justify-between p-4 pl-8 pr-8 z-10 transition-colors duration-300 ${
            isScrolled
              ? "bg-gray-200 bg-opacity-90 text-gray-900"
              : "bg-transparent text-white"
          }`}
        >
          <img src={logo} className="h-14" alt="" />
          {!isSideNavOpen && (
            <button
              onClick={toggleSideNav}
              className="flex transition duration-500 flex-row bg-transparent"
            >
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
          )}
        </div>
      )}
      <div
        className={`bg-gray-300 opacity-80 ease-in-out duration-300 ${
          isSideNavOpen ? "translate-x-0 " : "translate-x-full"
        }`}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "300px",
          height: "100%",
          boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.5)",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          onClick={toggleSideNav}
          style={{
            padding: "16px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            alignSelf: "flex-end",
          }}
        >
          <svg
            className="px-5  h-9"
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
        <div style={{ padding: "16px", width: "100%" }}>
          <Link
            to="/"
            style={{
              display: "block",
              textDecoration: "none",
              color: "#04236D",
            }}
            className="hover:bg-gray-200 font-bold text-center"
          >
            Home
          </Link>
          <hr className="my-2 border-indigo-600 border-b-2" />
          <Link
            to="/services"
            style={{
              display: "block",
              padding: "8px 16px",
              textDecoration: "none",
              color: "#04236D",
            }}
            className="hover:bg-gray-200 font-bold text-center"
          >
            Our services
          </Link>
          <hr className="my-2 border-indigo-600 border-b-2" />
          <Link
            to="/search"
            style={{
              display: "block",
              padding: "8px 16px",
              textDecoration: "none",
              color: "#04236D",
            }}
            className="hover:bg-gray-200 font-bold text-center"
          >
            Search for properties
          </Link>
          <hr className="my-2 border-indigo-600 border-b-2" />
          <Link
            to="/propertylisting"
            style={{
              display: "block",
              padding: "8px 16px",
              textDecoration: "none",
              color: "#04236D",
            }}
            className="hover:bg-gray-200 font-bold text-center"
          >
            Want to get your property listed?
          </Link>
          <hr className="my-2 border-indigo-600 border-b-2" />
          <Link
            to="/RentalProp"
            style={{
              display: "block",
              padding: "8px 16px",
              textDecoration: "none",
              color: "#04236D",
            }}
            className="hover:bg-gray-200 font-bold text-center"
          >
            Rental Properties
          </Link>
          <hr className="my-2 border-indigo-600 border-b-2" />
          <Link
            to="/contactus"
            style={{
              display: "block",
              padding: "8px 16px",
              textDecoration: "none",
              color: "#04236D",
            }}
            className="hover:bg-gray-200 font-bold text-center"
          >
            Contact Us
          </Link>
          <hr className="my-2 border-indigo-600 border-b-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
