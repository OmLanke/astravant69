import React from 'react'
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
<>                 <div className="flex flex-col justify-between bg-[rgb(0,0,0)] w-full p-20 mt-1 mb-4">
                <div className=" lg:text-4xl text-[white] font-bold">
                    <p>Contact Us</p>
                </div>

                <div className='flex'>
                    <div className='text-[white] text-md'>
                        <p className='w-[70%]  pt-6 tracking-widest font-medium'>
                              <a href="info@astravant.com" className='pl-8'>info@astravant.com</a>
                              <p className='pt-4'>Chicago, Hinsdale, Lake Forest Western Springs & Winnetka, IL, Lake Geneva, WI, New Buffalo, MI, Naples, FL & Park City, UT</p>

                        </p>
                        <div className='pt-6 font-bold'>
                            <div className='py-2'>
                                <p className='text-white pb-4'>
                                    <a href="info@astravant.com">
                                        Our Socials
                                    </a>
                                </p>
                                <p className='text-white flex gap-2 text-3xl'>
                                      <FaInstagram />
                                      <FaFacebookSquare />
                                      <FaLinkedin />
                                      <FaTwitter />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-8 pt-8">
                        <div className="flex gap-8 w-full max-w-2xl">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="flex-1 p-2  border-b-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="flex-1 p-2 border-b-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                            />
                        </div>

                        <div className="flex gap-8 w-full max-w-2xl">
                            <input
                                type="text"
                                placeholder="Email"
                                className="flex-1 p-2  border-b-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="flex-1 p-2 border-b-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                            />
                        </div>


                        <div className="w-full max-w-2xl">
                            <input
                                type="text"
                                placeholder="Your Message Here"
                                className="w-full p-2  border-b-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                            />
                        </div>
                        <div className="w-full max-w-2xl">
                            <button className=" p-2 pl-8 pr-8 border border-2 hover:bg-[#04236D] hover:text-black transition duration-500  hover:cursor-pointer border-[#04236D] text-white bg-transparent font-bold placeholder-bold"
                            >
                                Submit
                            </button>
                        </div>


                    </div>
                </div>
                </div>

                </>     )
}

export default Footer
