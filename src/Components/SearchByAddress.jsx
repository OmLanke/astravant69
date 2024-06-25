import React from 'react';
import db from '../assets/db.json';

const search = (event) => {
  const text = event.target.value;
  return db.filter((item) => {
    return item.name.toLowerCase().includes(text.toLowerCase());
  }
  );
};

const SearchByAddress = () => {
  return (
    
    <div>
      <div className="mx-auto max-w-2xl sm:px-6 lg:px-8 h-10 ">
        {/* <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900">
          Quick search
        </label> */}
      <div className=" flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          onChange={search}
          className="w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
          placeholder='Search for specific address or project'
        />
      </div>
    </div>
  </div>
  );
};

export default SearchByAddress;
