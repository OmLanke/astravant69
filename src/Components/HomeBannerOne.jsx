import React from 'react'

const HomeBannerOne = () => {
    return (
        <>
            <div className="relative bg-cover flex flex-col bg-center w-full h-screen" style={{ backgroundImage: "url('/hpbg.png')" }}>
                <div className='flex flex-col my-auto text-4xl md:text-6xl lg:text-7xl lg:ml-64 md:ml-24 sm:ml-10 sm:text-5xl  text-white font-light justify-between font-medio'>

                    <h2 className=''>Where Dreams</h2>
                    <h2 className='mx-auto'>Where Dreams</h2>

                </div>
                <div className="lg:p-6 hover:bg-white transition duration-500 hover:text-black hover:cursor-pointer font-medium flex flex-col items-center justify-center text-white border border-[4px] mb-20 border-white mx-auto">
                    <p>Find Your</p>
                    <p>Dream Home</p>
                </div>
            </div>
        </>
    )
}

export default HomeBannerOne
