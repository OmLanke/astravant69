import React from 'react';

const OsMain = ({ backgroundColor, title, description, expertiseTitle, expertiseList, processTitle, processList, buttonText, imageUrl, imageAlt }) => {
    return (
        <div className={`${backgroundColor} flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between text-white mt-1`}>
            <div className="flex flex-col p-8 text-left gap-2">
                <p className='text-4xl'>{title}</p>
                <div className="flex flex-col gap-1">
                    <p className='leading-tight'>{description}</p>
                    <p>{expertiseTitle}</p>
                    <ul className="list-disc pl-5">
                        {expertiseList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <p>{processTitle}</p>
                    <ol className="list-decimal pl-5">
                        {processList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>
                <button className='bg-transparent border-2 border-white w-full sm:w-2/3 md:w-1/2 lg:w-1/4 p-2 mt-3 mx-auto hover:bg-white hover:text-[#72383D] transition duration-500 outline-none'>
                    {buttonText}
                </button>
            </div>
            <div>
                <img src={imageUrl} className='lg:h-[550px] lg:w-[400px] lg:mb-0 lg:mt-0 md:h-1/2 md:mx-auto md:mt-5 md:border md:border-white md:mb-10 sm:border sm:h-1/2 sm:mx-auto sm:mt-5 sm:border sm:border-white sm:mb-10' alt={imageAlt} />
            </div>
        </div>
    );
};

export default OsMain;
