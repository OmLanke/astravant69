import React from "react";

const Mobile = () => {
  return (
    <div className="block xl:hidden mt-1">
      <div className="flex flex-col w-full justify-start text-white text-center bg-[#001F66] p-4 gap-4">
        <div className="text-4xl font-medio">
          <p>Astravant Realty group:</p>
          <p>Mumbai's #1 real estate</p>
          <p>agency.</p>
        </div>
        <img src="charman.png" className="mx-auto h-[70vh]" alt="" />
        <div className="md:px-28">
          <p>
          Welcome to the epitome of luxury living in Mumbai - our No.1 real estate destination. Here, we redefine opulence with our exclusive collection of properties, each crafted to perfection with meticulous attention to detail. From breathtaking skyline views to lush green landscapes, our portfolio boasts the pinnacle of architectural marvels. But it's not just about the properties; it's about the experience. Our esteemed clientele receives nothing short of premier and sophisticated service, tailored to their every need. Step into a realm where luxury knows no bounds, and indulge in a lifestyle beyond compare with us.          </p>
        </div>
        <button className="border-[2px] p-2 hover:bg-white transition duration-500 hover:text-[#001F66] border-white w-1/4 mx-auto">
          <a href="/aboutus">Learn More</a>
        </button>
      </div>
    </div>
  );
};

const Computer = () => {
  return (
    <div className="hidden xl:block mt-1">
      <div className="flex flex-row w-full justify-between text-white bg-[#001F66] h-screen">
        <div className="flex flex-col pl-20 pb-20 pt-20 gap-10">
          <div className="text-5xl font-medio">
            <p>Astravant Realty group:</p>
            <p>India's #1 real estate</p>
            <p>agency.</p>
          </div>
          <div className="w-3/5 mt-10 font-medio">
            <p>
            Welcome to the epitome of luxury living in Mumbai - our No.1 real estate destination. Here, we redefine opulence with our exclusive collection of properties, each crafted to perfection with meticulous attention to detail. From breathtaking skyline views to lush green landscapes, our portfolio boasts the pinnacle of architectural marvels. But it's not just about the properties; it's about the experience. Our esteemed clientele receives nothing short of premier and sophisticated service, tailored to their every need. Step into a realm where luxury knows no bounds, and indulge in a lifestyle beyond compare with us.            </p>
          </div>
          <button className="border-[2px] p-2 hover:bg-white transition duration-500 hover:text-[#001F66] border-white w-1/4">
            <a href="/aboutus">Learn More</a>
          </button>
        </div>
        <img src="charman.png" className="h-full" alt="" />
      </div>
    </div>
  );
};

const HeroIndie = () => {
  return (
    <>
      <Computer />
      <Mobile />
    </>
  );
};

export default HeroIndie;
