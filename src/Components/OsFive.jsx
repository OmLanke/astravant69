import React from 'react'

const OsFive = () => {
    return (
        <>
            <div className="bg-[#72383D] mt-1 flex lg:flex-row md:flex-col sm:flex-col justify-between text-white ">
                <div className="flex flex-col p-8 text-left gap-2">
                    <p className='text-4xl'>Market Analysis Services for Mumbai Real Estate</p>
                    <div className="flex flex-col gap-1">
                        <p className='leading-tight'>Make informed decisions in Mumbai's dynamic property market with our expert market analysis services. [Your Agency Name] provides crucial insights to help you navigate Mumbai's real estate landscape.</p>
                        <p>Our Expertise:</p>
                        <ul className="list-disc pl-5">
                            <li>
                                Mumbai property price trends
                            </li>
                            <li>
                                Neighborhood value comparisons
                            </li>
                            <li>
                                Investment potential in emerging Mumbai areas
                            </li>
                            <li>
                                Luxury real estate market forecasts
                            </li>
                            <li>
                                Commercial property sector analysis
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Whether you're considering a Bandra apartment or a Worli penthouse, our data-driven approach ensures you understand the market.
                        </p>
                        <p>Key Benefits:                        </p>
                        <ol className="list-decimal pl-5">
                            <li>Up-to-date Mumbai real estate trends                            </li>
                            <li>Informed investment decisions
                            </li>
                            <li>Identification of high-potential areas
                            </li>
                            <li>Customized reports for your property goals
                            </li>
                            <li>Expert interpretation of market data
                            </li>
                        </ol>
                        <p>From South Mumbai to the Western Suburbs, let our analysis guide your property journey.</p>

                    </div>
                    <button className='bg-transparent border-[2px] border-white w-1/4 p-1 pl-4 pr-4 mt-3 hover:bg-white hover:text-[#72383D] transition duration-500 outline-none'>connect with our experts</button>
                </div>
                <div className="">
                    <img src="grw.png" className='lg:h-[600px] lg:w-[465px] lg:mb-0 lg:mt-0 md:h-1/2 md:mx-auto md:mt-5 md:border md:border-l-white sm:border-l-white md:mb-10 sm:h-1/2 sm:mx-auto sm:mt-5 sm:border sm:border-white sm:mb-10' alt="" />
                </div>
            </div>
        </>
    )
}

export default OsFive
