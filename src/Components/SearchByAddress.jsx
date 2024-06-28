import React, { useState } from "react";
import db from "../assets/db.json";
import { Link } from "react-router-dom";

const SearchByAddress = () => {
  const [searchResults, setSearchResults] = useState([]);

  const search = (event) => {
    const text = event.target.value.toLowerCase();
    const filteredResults = db.filter(
      (item) =>
        item.name.toLowerCase().includes(text) ||
        item.address.toLowerCase().includes(text) ||
        item.description.toLowerCase().includes(text) ||
        item.bhk.toLowerCase().includes(text) ||
        item.area.toLowerCase().includes(text) ||
        item.price.toLowerCase().includes(text)
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl sm:px-6 lg:px-8 h-20 ">
        <div className="flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            onChange={search}
            className="w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search for specific address or project"
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
                style={{ transform: "translateX(10px)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              style={{ transform: "translateX(20px)" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Display search results */}
      <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
        {searchResults.map((item) => (
          <Link to="/details" key={item.id || item.name}>
            <div className="border-b py-4 flex">
              <div className="flex-shrink-0 mr-4">
                <img
                  src={item.imgurl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
              </div>
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.address}</p>
                <p>
                  {item.bhk} | {item.area} | ₹{item.price}
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchByAddress;
