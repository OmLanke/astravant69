import React from "react";

const HomeBannerOne = () => {
  return (
    <div>
      <div
        className="relative bg-cover flex flex-col bg-center w-full h-screen bg-[url('/hpbg.png')]"
      >
        <div className="flex flex-col gap-3 sm:gap-0 justify-between items-center my-auto text-3xl lg:text-7xl text-white font-light">
          <div className="flex flex-col md:flex-row items-center  justify-start gap-3 md:mr-56">
            <h2 className="font-medio" >
              Where
            </h2>
            <h2 className="font-medio" >
              Dreams
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-end gap-3 md:ml-56">
            <h2 className="font-medio" >
              Find
            </h2>
            <h2 className="font-medio" >
              Realty
            </h2>
          </div>
        </div>

        <div className="p-6 hover:bg-white transition duration-500 hover:text-black hover:cursor-pointer font-medium flex flex-col items-center justify-center text-white text-center border-[4px] mb-12 border-white mx-auto">
          <a href="/search">
            <p>Find Your</p>
            <p>Dream Home</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerOne;
