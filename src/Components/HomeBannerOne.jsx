import React from "react";

const HomeBannerOne = () => {
  return (
    <div>
      <div
        className="relative bg-cover flex flex-col bg-center w-full h-screen bg-[url('/hpbg.png')]"
      >
        <div className="flex flex-col my-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl ml-20 md:ml-24 lg:ml-64    text-white font-light justify-between">
          <h2 className="font-medio" >
            Where Dreams
          </h2>
          <h2 className="mx-auto font-medio" >
            Meet Realty
          </h2>
        </div>

        <div className="p-6 hover:bg-white transition duration-500 hover:text-black hover:cursor-pointer font-medium flex flex-col items-center justify-center text-white text-center border-[4px] mb-20 border-white mx-auto">
          <a href="/RentalProp">
            <p>Find Your</p>
            <p>Dream Home</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerOne;
