import React, { useState, useEffect } from "react";
import "./stylecon.css"; 
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const PropListBan = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-[#000000] text-white p-4 sm:p-8 mt-1 mx-auto flex flex-col w-full min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('proplistban.png')" }}
      ></div>
      <div className="relative z-10">
        {show && (
          <div className="mt-14 text-center lg:text-left text-4xl lg:text-7xl font-medio">
            <p>Want your property to get</p>
            <p>listed by us?</p>
          </div>
        )}
        <div className="flex flex-col lg:flex-row lg:pt-24 pt-10 gap-10 lg:gap-56">
          <div className="flex flex-col gap-4 text-xl lg:text-3xl text-center lg:text-left">
            <p>Just fill up the form and sit back and relax.</p>
            <p>We will be in touch with you shortly.</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                className="w-full p-3 outline-none border-2 border-white bg-transparent placeholder-white"
                placeholder="First Name"
              />
              <input
                type="text"
                className="w-full p-3 outline-none border-2 border-white bg-transparent placeholder-white"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              className="p-3 outline-none border-2 border-white bg-transparent placeholder-white"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="p-3 outline-none border-2 border-white bg-transparent placeholder-white"
              placeholder="Your Query is regarding?"
            />
            <textarea
              name=""
              id=""
              rows="8"
              placeholder="Description"
              className="p-3 outline-none border-2 text-white border-white bg-transparent resize-none placeholder-white"
            ></textarea>
            <button
              className="border-2 border-[#E79700] p-3 w-full sm:w-32 font-semibold self-center lg:self-start"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropListBan;
