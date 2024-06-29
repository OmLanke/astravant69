import React from 'react'

const OsThree = () => {
    return (
        <>
            <div className="bg-[#72383D] flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between text-white">
                <div className="flex flex-col p-8 text-left gap-2">
                    <p className='text-4xl'>Luxury Property Consultation in Mumbai</p>
                    <div className="flex flex-col gap-1">
                        <p className='leading-tight'>Discover Mumbai's finest real estate with our expert consultation service. At [Your Agency Name], we connect global clients with prestigious properties in India's financial capital.</p>
                        <p>Our Expertise:</p>
                        <ul className="list-disc pl-5">
                            <li>Ultra-luxury properties in prime Mumbai locations</li>
                            <li>Exclusive listings, including off-market opportunities</li>
                            <li>Tailored solutions for international buyers</li>
                            <li>Expert knowledge of Mumbai's high-end real estate market</li>
                            <li>Investment guidance for Mumbai's luxury market</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Whether you're seeking a sleek high-rise apartment, a spacious penthouse, or a historic bungalow, we'll find your perfect Mumbai home.</p>
                        <p>Our Process:</p>
                        <ol className="list-decimal pl-5">
                            <li>Understand your needs and investment goals</li>
                            <li>Curate exclusive Mumbai listings</li>
                            <li>Provide virtual tours for overseas clients</li>
                            <li>Offer insights on Mumbai real estate trends</li>
                            <li>Manage negotiations and transactions</li>
                        </ol>
                    </div>
                    <button className='bg-transparent border-[2px] border-white w-1/4 p-1 pl-4 pr-4 mt-3 hover:bg-white hover:text-[#72383D] transition duration-500 outline-none'>connect with our experts</button>
                </div>
                <div className="">
                    <img src="sofa.png" className='lg:h-[550px] lg:w-[400px] lg:mb-0 lg:mt-0 md:h-1/2 md:mx-auto md:mt-5 md:border md:border-white md:mb-10 md:border-l-white sm:border-l-white sm:h-1/2 sm:mx-auto sm:mt-5 sm:h-1/3 sm:border sm:border-white sm:mb-10' alt="" />
                </div>
            </div>

        </>
    )
}

export default OsThree
