/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const reviewsData = [
  {
    name: " Anastasia Romero",
    review:
      "Astravant Team knows their job well , It was hard for me to get a house of my choice on Bandra West , But their expertise came in handy.",
    date: "Astravant Realty",
    stars: 4,
  },
  {
    name: "Jim Robert ",
    review: "Daanish has a very good attitude & knowledge of what he does , Highly recommend him & his team for all real estate transactions",
    date: "Astravant Realty",
    stars: 5,
  },
  {
    name: "Sofia malik",
    review: "It was a good experience dealing with them , Got exactly what I wanted ",
    date: "Astravant Realty",
    stars: 3,
  },
  {
    name: "Murtuza khan",
    review: "Daanish & his team are revolutionising the Real estate market , The service we got from their company was commendable Highly recommend",
    date: "Astravant Realty",
    stars: 3,
  }
  // More reviews can be added here
];

// eslint-disable-next-line react/prop-types
const Card = ({ stars, name, review, date  }) => {
  return (
    <div className="bg-white shadow-lg p-4 pl-8 pr-8 rounded-3xl gap-4 flex flex-col hover:shadow-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          
          <p>{name}</p>
        </div>
      </div>
      <div className="leading-tight">
        <p>{review}</p>
      </div>
      <p className="text-gray-500 text-xs">{date}</p>
      <div className="flex flex-row gap-1">
        {[...Array(stars)].map((_, i) => (
          <svg
            key={`filled-star-${i}`}
            className="text-[#001F66] w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568L24 9.751l-6 5.901 1.421 8.548L12 19.412l-7.421 4.788L6 15.652 0 9.751l8.332-1.596L12 .587z" />
          </svg>
        ))}
        {[...Array(5 - stars)].map((_, i) => (
          <svg
            key={`empty-star-${i}`}
            className="text-gray-500 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568L24 9.751l-6 5.901 1.421 8.548L12 19.412l-7.421 4.788L6 15.652 0 9.751l8.332-1.596L12 .587z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

const Highlight = ({ t1, t2 }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-6xl">{t1}</p>
      <div className="h-1 w-full bg-[#001F66]"></div>
      <p className="w-2/3 leading-none">{t2}</p>
    </div>
  );
};

const Thrust = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentReviews, setCurrentReviews] = useState([]);

  const reviewsPerPage = 2;

  useEffect(() => {
    const startIndex = currentPage * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    setCurrentReviews(reviewsData.slice(startIndex, endIndex));
  }, [currentPage]);

  const handleNext = () => {
    if ((currentPage + 1) * reviewsPerPage < reviewsData.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-between bg-[#E79700] w-full p-20 mt-1">
        <div className="mx-auto flex flex-col items-center justify-center text-2xl md:text-4xl xl:text-6xl text-[#001F66] font-medio">
          <p>Holding and taking care of more than</p>
          <p>10,000+ customers trust</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-8">
          {currentReviews.map((review, index) => (
            <Card
              key={index}
              name={review.name}
              review={review.review}
              date={review.date}
              stars={review.stars}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4 my-4">
          <button
            onClick={handlePrevious}
            className="bg-[#001F66] text-white py-2 px-4 rounded-lg disabled:bg-gray-400"
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-[#001F66] text-white py-2 px-4 rounded-lg disabled:bg-gray-400"
            disabled={(currentPage + 1) * reviewsPerPage >= reviewsData.length}
          >
            Next
          </button>
        </div>

        <div className="flex flex-col md:flex-row my-8 text-[#001F66] justify-between font-medio">
          <Highlight t1="10+" t2="Years of experience in real estate" />
          <Highlight t1="250+" t2="Real estate projects" />
          <Highlight t1="1+" t2="Million sq. ft sold." />
        </div>
      </div>
    </div>
  );
};

export default Thrust;
