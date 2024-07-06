import React, { useState, useEffect } from 'react';
import './stylecon.css'; // Ensure the path is correct based on your project structure
import { FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const ConUsBanTwo = () => {
    const [show, setShow] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            firstName,
            lastName,
            email,
            query,
            description,
        };

        try {
            const response = await fetch('https://nodemail-4m16.onrender.com/query', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFirstName('');
                setLastName('');
                setEmail('');
                setQuery('');
                setDescription('');
                setSubmitted(true);
            } else {
                alert('Error sending message. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('Error sending message. Please try again.');
        }
    };

    return (
        <div>
            <div className="relative bg-[#04236D] text-white mt-1 bg-cover p-4 sm:p-6 md:p-8 mx-auto flex flex-col bg-center min-h-screen">
                {show &&
                    <div className="mx-auto mt-10 sm:mt-10 md:mt-14 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                        <p>Get in touch with us</p>
                    </div>
                }
                <div className="flex flex-col lg:flex-row items-center justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16 gap-8 lg:gap-16 xl:gap-24">
                    <div className="flex flex-col gap-4 w-full max-w-md">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                className="p-3 outline-none border-2 border-white bg-transparent placeholder-left-thin w-full"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                className="p-3 outline-none border-2 border-white bg-transparent placeholder-left-thin w-full"
                                placeholder="Last Name"
                            />
                        </div>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="p-3 outline-none border-2 border-white bg-transparent placeholder-left-thin"
                            placeholder="Email Address"
                        />
                        <input
                            type="text"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            className="p-3 outline-none border-2 border-white bg-transparent placeholder-left-thin"
                            placeholder="Your Query is regarding?"
                        />
                        <textarea
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            name=""
                            id=""
                            rows="6"
                            placeholder="Description"
                            className="p-3 outline-none border-2 text-white border-white bg-transparent resize-none placeholder-left-thin"
                        ></textarea>
                        <button className={`flex flex-row border-2 items-center justify-center border-[#E79700] p-2 w-full sm:w-1/2 md:w-1/3 mx-auto ${submitted? 'opacity-50 cursor-not-allowed' : ''}`} type='submit' onClick={handleSubmit}>
                            {submitted? 'Submitted' : 'Submit'}
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 text-xl sm:text-2xl md:text-3xl mt-8 lg:mt-0">
                        <p>info@astravantrealty.com</p>
                        <p>+91 9136114755</p>
                        <p>E - Wing - 309, Crystal Plaza, OppositeInfiniti Mall, Andheri Link Road, Andheri West, Mumbai - 400 053</p>
                        <div className="flex flex-row gap-4 justify-center lg:justify-start">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" >
                                <FaInstagram className="text-white h-6 w-6" />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
                                <FaFacebookF className="text-[#04236D] p-1 white bg-white h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" >
                                <FaLinkedinIn className="text-white h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConUsBanTwo;