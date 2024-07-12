import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { IoFilterSharp } from "react-icons/io5";

const SearchByAddress = ({ database }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: "",
    bhk: "",
    amenities: []
  });
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const newFilters = {
      priceRange: params.get('priceRange') || '',
      bhk: params.get('bhk') || '',
      amenities: params.get('amenities') ? params.get('amenities').split(',') : [],
    };
    const newSearchText = params.get('search') || '';
    setFilters(newFilters);
    setSearchText(newSearchText);
  }, [location.search]);

  useEffect(() => {
    const filterResults = () => {
      const filteredResults = database.filter((item) => {
        const meetsPriceRange = !filters.priceRange || (item.price && item.price <= parseInt(filters.priceRange));
        const meetsBhk = !filters.bhk || (item.bhk && item.bhk.includes(filters.bhk));
        const meetsAmenities = !filters.amenities.length || (item.amenities && filters.amenities.every(amenity => item.amenities.includes(amenity)));
        return meetsPriceRange && meetsBhk && meetsAmenities;
      });

      if (searchText) {
        const filteredBySearch = filteredResults.filter(
          (item) =>
            (item.name && item.name.toLowerCase().includes(searchText)) ||
            (item.address && item.address.toLowerCase().includes(searchText)) ||
            (item.description && item.description.toLowerCase().includes(searchText)) ||
            (item.bhk && item.bhk.toLowerCase().includes(searchText)) ||
            (item.area && item.area.toLowerCase().includes(searchText)) ||
            (item.price && item.price.toString().toLowerCase().includes(searchText))
        );
        setSearchResults(filteredBySearch);
      } else {
        setSearchResults(filteredResults);
      }
    };

    filterResults();
  }, [filters, searchText, database]);

  const search = (event) => {
    const newSearchText = event.target.value.toLowerCase();
    setSearchText(newSearchText);
    const params = new URLSearchParams(location.search);
    if (newSearchText) {
      params.set('search', newSearchText);
    } else {
      params.delete('search');
    }
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const applyFilters = () => {
    setIsModalOpen(false);
    const params = new URLSearchParams(location.search);
    if (filters.priceRange) params.set('priceRange', filters.priceRange);
    else params.delete('priceRange');
    if (filters.bhk) params.set('bhk', filters.bhk);
    else params.delete('bhk');
    if (filters.amenities.length > 0) params.set('amenities', filters.amenities.join(','));
    else params.delete('amenities');
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const handleAmenitiesChange = (event) => {
    const value = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      amenities: prevFilters.amenities.includes(value)
        ? prevFilters.amenities.filter((amenity) => amenity !== value)
        : [...prevFilters.amenities, value]
    }));
  };

  return (
    <div>
      <div className="mx-auto max-w-2xl sm:px-6 lg:px-8 h-20">
        <div className="flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            onChange={search}
            value={searchText}
            className="w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search for specific address or project"
          />
          <button onClick={() => setIsModalOpen(true)} className="ml-4 px-4 py-2 text-3xl">
            <IoFilterSharp />
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="bg-white p-4 rounded-md max-w-lg mx-auto">
        <h2 className="text-2xl mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block mb-2">Price Range</label>
          <input
            type="number"
            value={filters.priceRange}
            onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter maximum price"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">BHK</label>
          <select
            value={filters.bhk}
            onChange={(e) => setFilters({ ...filters, bhk: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">Any</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
            <option value="5 BHK">5 BHK</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Amenities</label>
          <div>
            {["Swimming pool", "Gym", "Jacuzzi", "Cricket Pitch", "Mini Theatre"].map((amenity) => (
              <label key={amenity} className="block">
                <input
                  type="checkbox"
                  value={amenity}
                  checked={filters.amenities.includes(amenity)}
                  onChange={handleAmenitiesChange}
                  className="mr-2"
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>
        <button onClick={applyFilters} className="px-4 py-2 bg-green-600 text-white rounded-md">
          Apply Filters
        </button>
      </Modal>

      {(searchText || filters.priceRange || filters.bhk || filters.amenities.length > 0) && (
        <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
          {searchResults.length > 0 ? (
            searchResults.map((item, index) => (
              <Link to={`/propertypage/${index}`} key={index}>
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
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchByAddress;
