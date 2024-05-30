import React from 'react'
import Navbar from '../Components/Navbar'
import ConBanTwo from '../Components/ConBanTwo'
import Nsl from '../Components/Nsl'
import SearchByAddress from '../Components/SearchByAddress.jsx'
import ApartmentListing from '../Components/ApartmentListing.jsx'

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
            <SearchByAddress/>

            <ApartmentListing />


        </>
    )
}

export default Contact
