import React, { useState } from 'react';
import SearchByAddress from '../Components/SearchByAddress.jsx';
import { FaStar, FaStarHalf } from "react-icons/fa";
import "../Pages/Search.css"
import db from '../assets/db.json'
import { Link } from 'react-router-dom'

const RentalProp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [propertyRequirements, setPropertyRequirements] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstName,
      lastName,
      phoneNumber,
      propertyRequirements,
      budgetRange,
    };

    setLoading(true); // Set loading state to true while submitting

    try {
      const response = await fetch('https://nodemail-4m16.onrender.com/property-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setPropertyRequirements('');
        setBudgetRange('');
        setSubmitted(true);
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending message. Please try again.');
    } finally {
      setLoading(false); // Set loading state back to false after submission
    }
  };

  return (
    <div>
      <div
        className="relative text-white bg-cover flex flex-col bg-center w-full h-screen mb-44"
        style={{ backgroundImage: "url('/rentalproppic.png')" }}
      >
        <div className="mx-auto my-auto">
          <div className="text-7xl flex justify-center items-center text-center">
            <p className="font-medio">Rental Properties</p>
          </div>
        </div>
      </div>
      <SearchByAddress database={db} />
      <div className="p-10">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
        >
          {db.map((prop, index) => (
            <li
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200"
            >
              <Link to={`/propertypage/${index}`}>
                <div className="flex flex-col gap-4">
                  <div
                    className="flex items-center justify-center h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${prop.imgurl})` }}
                  ></div>

                  <div>
                    <div className="flex justify-between p-4">
                      <p>{prop.name}</p>
                      <p>
                        {prop.bhk}, {prop.area}
                      </p>
                    </div>
                    <div className="flex flex-col p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p>Address :-</p>
                          <p>{prop.address}</p>
                        </div>
                        <div className="flex items-center space-x-1 mt-2 md:mt-0">
                          <FaStarHalf />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="pb-8">
        <div className="flex flex-col justify-between bg-[#E79700] w-full p-4 sm:p-6 md:p-10 lg:p-20">
          <div className="text-3xl sm:text-4xl lg:text-7xl text-[#04236D]">
            <p>Want to find your ideal house?</p>
          </div>
          <div className="flex flex-col lg:flex-row mt-6 lg:mt-10">
            <div className="text-[#04236D] text-md w-full lg:w-1/2 mb-6 lg:mb-0">
              <p className="w-full lg:w-[70%] font-bold pt-4 lg:pt-6 tracking-wide sm:tracking-widest">
                Contact us and we will provide you our expert guidance and
                assistance in finding your dream house.
              </p>
              <div className="pt-6 font-bold">
                <p>Connect with us</p>
                <div className="py-2">
                  <p className="text-white pb-4">
                    <a href="mailto:info@astravantrealty.com">info@astravantrealty.com</a>
                  </p>
                  <p className="text-white">+91 9136114754</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-1/2">
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 w-full max-w-2xl">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    className="flex-1 p-2 border-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold mb-4"
                    disabled={submitted} // Disable input fields after submission
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    className="flex-1 p-2 border-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold mb-4"
                    disabled={submitted} // Disable input fields after submission
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  className="w-full p-2 border-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold mb-4"
                  disabled={submitted} // Disable input fields after submission
                />
                <input
                  type="text"
                  placeholder="Property Requirements"
                  value={propertyRequirements}
                  onChange={(event) => setPropertyRequirements(event.target.value)}
                  className="w-full p-2 border-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold mb-4"
                  disabled={submitted} // Disable input fields after submission
                />
                <input
                  type="text"
                  placeholder="Your Budget Range"
                  value={budgetRange}
                  onChange={(event) => setBudgetRange(event.target.value)}
                  className="w-full p-2 border-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold mb-4"
                  disabled={submitted} // Disable input fields after submission
                />
                <button
                  type="submit"
                  className={`w-full sm:w-auto p-2 px-8 border-2 hover:bg-[#04236D] hover:text-black transition duration-500 hover:cursor-pointer border-[#04236D] text-white bg-transparent font-bold placeholder-bold mb-4 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading || submitted} // Disable button during loading or after submission
                >
                  {loading ? 'Submitting...' : submitted ? 'Submitted' : 'Submit'}
                </button>
              </form>
              {submitted && (
                <div className="text-green-600 font-bold text-lg mt-2">
                  Thank you for your inquiry!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentalProp;
