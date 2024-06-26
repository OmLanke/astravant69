import React from "react";

const Card = ({ img, title, url }) => {
  return (
    <div
      className="flex items-center justify-center w-full aspect-[4/3]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="p-2 border-2 hover:bg-white hover:text-black transition duration-500 hover:font-medium hover:cursor-pointer border-white text-white bg-transparent">
        <a href={url} className="px-4 md:px-9">
          {title}
        </a>
      </div>
    </div>
  );
};

const ApartmentListing = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      <Card img="/ast8.png" title="2 BHK" url="/search" />
      <Card img="/ast9.png" title="3 BHK" url="/search" />
      <Card img="/ast10.png" title="Penthouse" url="/search" />
      <Card img="/ast11.png" title="Andheri, Mum" url="/search" />
      <Card img="/ast12.png" title="Juhu, Mum" url="/search" />
      <Card img="/ast13.png" title="SoBo, Mum" url="/search" />
    </div>
  );
};

export default ApartmentListing;
