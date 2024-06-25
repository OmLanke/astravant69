import React from 'react'

const Card = ({ name, review, date, stars }) => {
    return (
        <div className="bg-white shadow-lg p-4 pl-8 pr-8 rounded-3xl gap-4 flex flex-col hover:shadow-xl">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-3 items-center">
                    <img src="charman.png" className="rounded-full w-9 h-9" alt="" />
                    <p>{name}</p>
                </div>
                <div className="flex flex-row gap-1">
                    {[...Array(stars)].map((_, i) => <svg className="text-[#001F66] w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.751l-6 5.901 1.421 8.548L12 19.412l-7.421 4.788L6 15.652 0 9.751l8.332-1.596L12 .587z" /></svg> )}
                    {[...Array(5-stars)].map((_, i) => <svg className="text-gray-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568L24 9.751l-6 5.901 1.421 8.548L12 19.412l-7.421 4.788L6 15.652 0 9.751l8.332-1.596L12 .587z" /></svg> )}
                </div>
            </div>
            <div className="leading-tight">
                <p>{review}</p>
            </div>
            <p className="text-gray-500 text-xs">
                {date}
            </p>
        </div>
    )
}

const Highlight = ({t1, t2}) => {
    return (
        <div className="flex flex-col gap-2">
                <p className='text-6xl'>{t1}</p>
                <div className="h-1 w-full bg-[#001F66]"></div>
                <p className='w-2/3 leading-none'>{t2}</p>
            </div>
    )
}

const Thrust = () => {
    return (
        <>
            <div className="flex flex-col justify-between bg-[#E79700] w-full p-20 mt-1">
                <div className="mx-auto flex flex-col items-center justify-center text-2xl md:text-4xl xl:text-6xl text-[#001F66]">
                    <p>Holding an taking care of more than</p>
                    <p>10,000+ customers trust</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-8">
                    <Card name="Astra Vant" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem libero id exercitationem officia, maxime a laboriosam labore est ullam? Beatae aliquid odit necessitatibus, quasi quisquam quam, enim animi dolorem aperiam excepturi porro facilis." date="18th October" stars={4} />
                    <Card name="Astra Vant" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem libero id exercitationem officia, maxime a laboriosam labore est ullam? Beatae aliquid odit necessitatibus, quasi quisquam quam, enim animi dolorem aperiam excepturi porro facilis." date="18th October" stars={4} />
                    <Card name="Astra Vant" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem libero id exercitationem officia, maxime a laboriosam labore est ullam? Beatae aliquid odit necessitatibus, quasi quisquam quam, enim animi dolorem aperiam excepturi porro facilis." date="18th October" stars={4} />
                    <Card name="Astra Vant" review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem libero id exercitationem officia, maxime a laboriosam labore est ullam? Beatae aliquid odit necessitatibus, quasi quisquam quam, enim animi dolorem aperiam excepturi porro facilis." date="18th October" stars={4} />
                </div>

                <div className="flex flex-col md:flex-row my-8 text-[#001F66] justify-between">
                    <Highlight t1="12+" t2="Years of experience in real estate" />
                    <Highlight t1="800+" t2="Real estate projects" />
                    <Highlight t1="5+" t2="Million sq. ft sold." />
                </div>

            </div>
        </>
    )
}

export default Thrust
