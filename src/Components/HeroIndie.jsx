import React from 'react'

const HeroIndie = () => {
    return (
        <>
            <div className="flex flex-row w-full justify-between text-white bg-[#001F66] h-[100vh]">
                <div className="flex flex-col pl-20 pb-20 pt-20 gap-10">
                    <div className="lg:text-5xl">
                        <p>AstraVant Realty group:</p>
                        <p>India's #1 real estate</p>
                        <p>agency.</p>
                    </div>
                    <div className="w-3/5 mt-10 ">
                        <p>Welcome to the epitome of luxury living In India-
                            our No.1 real estate destination. Here, we redefine.
                            opulence with our exclusive collection of
                            properties, each crafted to perfoction with
                            meticulous attention to detail. From breathtaking
                            skyline views to lush green landscapes, our
                            portfolio boasts tho pinnacle of architectural
                            marvels. But ts not ust about the properties; is
                            about the experience. our esteemed cliente
                            racoivos nothing short of premior and
                            sophisticated service, tailored to thelr every ned:
                            Step into a realm where luxury knows no bounds,
                            and indulge in a lifestyle beyond comparo with us
                        </p>
                    </div>
                    <button className='border-[2px] p-2 hover:bg-white transition duration-500 hover:text-[#001F66] border-white w-1/4'>Learn More</button>
                </div>
                    <img src="charman.png" className='h-full' alt="" />
            </div>
        </>
    )
}

export default HeroIndie
