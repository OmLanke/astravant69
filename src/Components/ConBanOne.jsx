import React from 'react'
import { Link } from 'react-router-dom'

const ConBanOne = () => {
    return (
        <div>
            <div className="relative text-white bg-cover flex flex-col bg-center w-full h-screen" style={{ backgroundImage: "url('/concon.png')" }}>
                <div className="mx-auto my-auto flex flex-col gap-8 items-center text-center">
                    <div className="lg:text-7xl text-3xl font-medio">
                        <p>ASTRAVANT REALTY</p>
                    </div>
                    <div className="mx-auto">
                        <p>Phone No. <a href="tel:+919136114754">+91 9136114754</a></p>
                        <p>Email- <a href="mailto: info@astravantrealty.com">info@astravantrealty.com</a></p>
                    </div >
                    <div className="p-2 pl-4 pr-4 hover:bg-white transition duration-500 hover:text-black hover:cursor-pointer font-medium flex flex-col items-center justify-center text-white border border-[2px] mb-20 border-white mx-auto">
                        <Link to="/contactus">
                            <p>Contact Us</p>
                        </Link>
                    </div>

                </div >
            </div >
        </div >
    )
}

export default ConBanOne
