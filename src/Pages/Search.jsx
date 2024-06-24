import React from 'react'
import Navbar from '../Components/Navbar'
import ConBanTwo from '../Components/ConBanTwo'
import Nsl from '../Components/Nsl'
import SearchByAddress from '../Components/SearchByAddress.jsx'
import ApartmentListing from '../Components/ApartmentListing.jsx'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import "../Pages/Search.css"
import Footer from '../Components/Footer.jsx'
import db from '../assets/db.json'
const PropertyPreview = ({name, bhk, area, photo}) => {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex items-center lg:p-[200px]" style={{ backgroundImage: `url(${photo})` }}>
                {/* <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                <p className='pl-9 pr-9'>2 BHK</p>
            </div> */}
            </div>

            <div>
                <div className='flex justify-between'>
                    <p>
                        {name}
                    </p>
                    <p>
                        {bhk} , {area}
                    </p>
                </div>
                <div className='flex justify-between'>
                    <p>
                        address
                    </p>
                    <p className='flex '>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </p>
                </div>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="relative text-white bg-cover flex flex-col bg-center w-full h-screen mb-44" style={{ backgroundImage: "url('/searchBan.png')" }}>
                <div className="mx-auto my-auto flex flex-col gap-8">
                    <div className="text-7xl">
                        <p>Search By Properties</p>
                    </div>
                    {/* <div className="p-2 pl-4 pr-4 hover:bg-white transition duration-500 hover:text-black hover:cursor-pointer font-medium flex flex-col items-center justify-center text-white border border-[2px] mb-20 border-white mx-auto">
                        <p>Contact Us</p>
                    </div> */}

                </div>

            </div>
            <SearchByAddress />


            <div className=" items-center justify-center flex flex-col gap-2">
                <div className="flex flex-row p-2 gap-2">
                    <PropertyPreview />
                    <div className='flex flex-col gap-4'>
                        <div className="flex items-center lg:p-[200px]" style={{ backgroundImage: "url('/ast9.png')" }}>
                            {/* <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='pl-9 pr-9'>2 BHK</p>
                        </div> */}
                        </div>

                        <div>
                            <div className='flex justify-between'>
                                <p>
                                    Elvis Heights
                                </p>
                                <p>
                                    1-B.H.K , 800sq ft
                                </p>
                            </div>
                            <div className='flex justify-between'>
                                <p>
                                    address
                                </p>
                                <p className='flex '>
                                    <FaStarHalf />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className="flex items-center lg:p-[200px]" style={{ backgroundImage: "url('/ast10.png')" }}>
                            {/* <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='pl-9 pr-9'>2 BHK</p>
                        </div> */}
                        </div>

                        <div>
                            <div className='flex justify-between'>
                                <p>
                                    Elvis Heights
                                </p>
                                <p>
                                    1-B.H.K , 800sq ft
                                </p>
                            </div>
                            <div className='flex justify-between'>
                                <p>
                                    address
                                </p>
                                <p className='flex '>
                                    <FaStarHalf />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-row pl-2 pr-2 pb-2 gap-2">
                    <div className='flex flex-col gap-4'>
                        <div className="flex items-center lg:p-[200px]" style={{ backgroundImage: "url('/ast11.png')" }}>
                            {/* <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='pl-9 pr-9'>2 BHK</p>
                        </div> */}
                        </div>

                        <div>
                            <div className='flex justify-between'>
                                <p>
                                    Elvis Heights
                                </p>
                                <p>
                                    1-B.H.K , 800sq ft
                                </p>
                            </div>
                            <div className='flex justify-between'>
                                <p>
                                    address
                                </p>
                                <p className='flex '>
                                    <FaStarHalf />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className="flex items-center lg:p-[200px]" style={{ backgroundImage: "url('/ast12.png')" }}>
                            {/* <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='pl-9 pr-9'>2 BHK</p>
                        </div> */}
                        </div>

                        <div >
                            <div className='flex justify-between'>
                                <p>
                                    Elvis Heights
                                </p>
                                <p>
                                    1-B.H.K , 800sq ft
                                </p>
                            </div>
                            <div className='flex justify-between'>
                                <p>
                                    address
                                </p>
                                <p className='flex '>
                                    <FaStarHalf />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className="flex items-center lg:p-[200px]" style={{ backgroundImage: "url('/ast13.png')" }}>
                            {/* <div className="p-2 border border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
                            <p className='pl-9 pr-9'>2 BHK</p>
                        </div> */}
                        </div>

                        <div >
                            <div className='flex justify-between'>
                                <p>
                                    Elvis Heights
                                </p>
                                <p>
                                    1-B.H.K , 800sq ft
                                </p>
                            </div>
                            <div className='flex justify-between'>
                                <p>
                                    address
                                </p>
                                <p className='flex '>
                                    <FaStarHalf />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </p>
                            </div>
                        </div>
                    </div>




                </div>
            </div>








            {/* ---------------------------------------- */}

            <div className='pb-8'>
            <div className="flex flex-col justify-between bg-[#E79700] w-full p-20">
                <div className=" lg:text-7xl text-[#04236D]">
                    <p>Want to find your ideal house?</p>
                </div>

                <div className='flex'>
                    <div className='text-[#04236D] text-md'>
                        <p className='w-[70%] font-bold pt-6 tracking-widest'>
                            Contact us and we will provide you our expert guidance and assistance in finding your dream house.
                        </p>
                        <div className='pt-6 font-bold'>
                            <p>
                                Connect with us
                            </p>
                            <div className='py-2'>
                                <p className='text-white pb-4'>
                                    <a href="info@astravant.com">
                                        info@astravant.com
                                    </a>
                                </p>
                                <p className='text-white'>
                                    +91 8329 109 390
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-8 pt-8">
                        <div className="flex gap-8 w-full max-w-2xl">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="flex-1 p-2 border border-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="flex-1 p-2 border border-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                            />
                        </div>

                        <div className="w-full max-w-2xl">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full p-2 border border-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                            />
                        </div>

                        <div className="w-full max-w-2xl">
                            <input
                                type="text"
                                placeholder="Property Requirements"
                                className="w-full p-2 border border-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                            />
                        </div>

                        <div className="w-full max-w-2xl">
                            <input
                                type="text"
                                placeholder="Your Budget Range"
                                className="w-full p-2 border border-2 hover:bg-white hover:text-black transition duration-500  hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
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
            </div>

            <Nsl />

            <Footer />







        </>
    )
}




export default Contact
