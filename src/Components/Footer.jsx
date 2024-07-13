import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    try {
      const response = await fetch('https://nodemail-4m16.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setLoading(false);
      } else {
        alert('Error sending message. Please try again.');
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert('Error sending message. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-between bg-[rgb(0,0,0)] w-full p-20 mt-1 mb-4">
        <div className="lg:text-4xl text-[white] font-bold font-medio">
          <p>Contact Us</p>
        </div>

        <div className='flex flex-col md:flex-row'>
          <div className='text-[white] text-md'>
            <p className='w-[70%] pt-6 tracking-widest font-medium'>
              <a href="mailto: info@astravantrealty.com" className='pl-2'>info@astravantrealty.com</a>
              <p className='pt-4'>E - Wing - 309, Crystal Plaza, Opposite Infiniti Mall, Andheri Link Road, Andheri West, Mumbai - 400 053</p>
            </p>
            <div className='pt-6 font-bold'>
              <div className='py-2'>
                <p className='text-white pb-4'>
                  <a href="info@astravantrealty.com">
                    Our Socials
                  </a>
                </p>
                <p className='text-white flex gap-2 text-3xl'>
                  <a href="https://www.instagram.com/astravant.realty?igsh=MTRlOHhlN2pzYXdyeg=="><FaInstagram /></a>
                  <a href="https://www.facebook.com/profile.php?id=61561193497934&mibextid=LQQJ4d"><FaFacebookSquare /></a>
                  <a href="https://www.linkedin.com/company/espire-realtors/"><FaLinkedin /></a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 pt-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className="flex-1 p-2 border-b-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                  disabled={submitted}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className="flex-1 p-2 border-b-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                  disabled={submitted}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="flex-1 p-2 border-b-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                  disabled={submitted}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  className="flex-1 p-2 border-b-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                  disabled={submitted}
                />
              </div>

              <div className="w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="Your Message Here"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full p-2 border-b-2 hover:bg-white hover:text-black transition duration-500 hover:cursor-pointer border-white text-white bg-transparent font-bold placeholder-bold"
                  disabled={submitted}
                />
              </div>

              <div className="w-full max-w-2xl flex items-center">
                <button
                  type="submit"
                  className="p-2 pl-8 pr-8 border-2 hover:bg-[#04236D] hover:text-black transition duration-500 hover:cursor-pointer border-[#04236D] text-white bg-transparent font-bold placeholder-bold"
                  disabled={loading || submitted}
                >
                  {loading ? "Submitting..." : submitted ? "Submitted" : "Submit"}
                </button>
                {submitted && (
                  <span className="ml-4 text-white font-bold">Thank you for contacting us!</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
