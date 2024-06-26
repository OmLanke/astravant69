import React, { useState, useEffect } from 'react';
import './stylecon.css'; // Ensure the path is correct based on your project structure
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const PropListBan = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-[url('proplistban.png')] text-white bg-cover p-8 mx-auto flex flex-col bg-center w-full h-screen">
            {show && (
                <div className="mt-14 text-center lg:text-left text-4xl lg:text-7xl font-medio">
                    <p>Want your property to get</p>
                    <p>listed by us?</p>
                </div>
            )}
            <div className="flex flex-col lg:flex-row lg:pt-24 pt-10 gap-10 lg:gap-56">
                <div className="flex flex-col gap-4 text-xl lg:text-3xl text-center lg:text-left">
                    <p>Just fill up the form and sit back and relax.</p>
                    <p>We will be in touch with you shortly.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-6">
                        <input
                            type="text"
                            className="w-full p-3 outline-none border-2 border-white bg-transparent placeholder-white"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className="w-full p-3 outline-none border-2 border-white bg-transparent placeholder-white"
                            placeholder="Last Name"
                        />
                    </div>
                    <input
                        type="email"
                        className="p-3 outline-none border-2 border-white bg-transparent placeholder-white"
                        placeholder="Email Address"
                    />
                    <input
                        type="text"
                        className="p-3 outline-none border-2 border-white bg-transparent placeholder-white"
                        placeholder="Your Query is regarding?"
                    />
                    <textarea
                        name=""
                        id=""
                        rows="8"
                        placeholder="Description"
                        className="p-3 outline-none border-2 text-white border-white bg-transparent resize-none placeholder-white"
                    ></textarea>
                    <button className="border-2 border-[#E79700] p-3 w-32 self-center lg:self-start" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PropListBan;
