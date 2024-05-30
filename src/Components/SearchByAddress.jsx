import React from 'react';

const SearchByAddress = () => {
  return (
    <div className="flex items-center bg-[#04236D4D] border border-[#04236D] rounded-md mb-44 w-[44%] justify-center">
      <input
        type="text"
        placeholder="search for specific address or project"
        className="flex-grow p-2 bg-transparent outline-none text-white flex justify-center items-center"
      />
      <div className="flex items-center gap-2 ml-2">
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm9.707-3.293l-3.386-3.386A6.953 6.953 0 0016 10c0-3.866-3.134-7-7-7S2 6.134 2 10s3.134 7 7 7a6.953 6.953 0 004.321-1.321l3.386 3.386 1.414-1.414z" />
        </svg>
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 19h-1V8.157c1.144-.413 2-1.518 2-2.825 0-1.654-1.346-3-3-3-1.392 0-2.575.949-2.919 2.227L3.041 8.563C2.479 8.223 1.765 8 1 8v2c.765 0 1.479.223 2.041.563L14.081 19H3v2h18v-2zM18 4.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zM10.5 11L5 15.5V12H3v8h2v-3.5L12 21h2v-8h-2v3.5z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchByAddress;
