import React from 'react'
import SearchByAddress from '../Components/SearchByAddress.jsx'
import { FaStar, FaStarHalf } from "react-icons/fa";
import "../Pages/Search.css"
import db from '../assets/db.json'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div
        className="relative text-white bg-cover flex flex-col bg-center w-full h-screen mb-44"
        style={{ backgroundImage: "url('/rentalproppic.png')" }}
      >
        <div className="mx-auto my-auto">
          <div className="text-7xl flex justify-center items-center text-center">
            <p className="font-medio">Rental Properties</p>
          </div>
        </div>
      </div>
      <SearchByAddress />
      <div className="p-10">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
        >
          {db.map((prop, index) => (
            <li
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200"
            >
              <Link to={`/propertypage/${index}`}>
                <div className="flex flex-col gap-4">
                  <div
                    className="flex items-center justify-center h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${prop.imgurl})` }}
                  ></div>

                  <div>
                    <div className="flex justify-between p-4">
                      <p>{prop.name}</p>
                      <p>
                        {prop.bhk}, {prop.area}
                      </p>
                    </div>
                    <div className="flex justify-between p-4">
                      <p>Address :-</p>
                      <br></br>
                      <p>{prop.address}</p>
                      <p className="flex">
                        <FaStarHalf />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="pb-8">
        <div className="flex flex-col justify-between bg-[#E79700] w-full p-4 sm:p-6 md:p-10 lg:p-20">
          <div className="text-3xl sm:text-4xl lg:text-7xl text-[#04236D]">
            <p>Want to find your ideal house?</p>
          </div>
          <div className="flex flex-col lg:flex-row mt-6 lg:mt-10">
            <div className="text-[#04236D] text-md w-full lg:w-1/2 mb-6 lg:mb-0">
              <p className="w-full lg:w-[70%] font-bold pt-4 lg:pt-6 tracking-wide sm:tracking-widest">
                Contact us and we will provide you our expert guidance and
                assistance in finding your dream house.
              </p>
              <div className="pt-6 font-bold">
                <p>Connect with us</p>
                <div className="py-2">
                  <p className="text-white pb-4">
                    <a href="mailto:info@astravant.com">info@astravant.com</a>
                  </p>
                  <p className="text-white">+91 8329 109 390</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 p-2 border-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 p-2 border-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                />
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 border-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
              />
              <input
                type="text"
                placeholder="Property Requirements"
                className="w-full p-2 border-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
              />
              <input
                type="text"
                placeholder="Your Budget Range"
                className="w-full p-2 border-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
              />
              <button className="w-full sm:w-auto p-2 px-8 border-2 hover:bg-[#04236D] hover:text-black transition duration-500 hover:cursor-pointer border-[#04236D] text-white bg-transparent font-bold placeholder-bold">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
