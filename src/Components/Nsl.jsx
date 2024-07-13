import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Nsl = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://nodemail-4m16.onrender.com/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                setSubmitted(true);
                setLoading(false);
            } else {
                console.error('Error submitting email:', response.status);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error submitting email:', error);
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="relative bg-cover flex flex-col pb-4 sm:pb-10 md:p-8 bg-center w-full h-screen my-auto mt-1" style={{ backgroundImage: "url('/tow.png')" }}>
                <div className="relative mx-auto my-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mx-auto">
                        <div className="relative bg-[rgba(29,89,227,0.51)] max-w-md leading-tight gap-4 mx-auto text-white p-4 py-16 flex flex-col justify-center items-center text-center">
                            <p className='w-4/5 text-3xl font-medio'>Bringing your dream home near you</p>
                            <p>
                                <meta name="description" content="Astravant Realty: Leading real estate team in Mumbai offering expert buying, selling, and renting services with local expertise and global reach." />
                                We offer the <strong>highest level of integrity, expertise, and service</strong>&nbsp;
                                in <em>Mumbai real estate</em>. <strong>Astravant Realty</strong> is the <em>leading real estate team</em>&nbsp;
                                in <em>Mumbai, Juhu, Bandra, and South Bombay</em>.&nbsp;
                                Whether <em>buying, selling or renting</em>, you can count on our <strong>Local Expertise and Global Reach</strong>.
                            </p>
                            <p>
                                <meta name="keywords" content="Mumbai real estate, Astravant Realty, dream home Mumbai, buying property Mumbai, selling property Mumbai, renting property Mumbai, local expertise, global reach"/>
                            </p>

                            <Link to="/contactus">
                                <button className='border-[2px] p-2 hover:bg-white transition duration-500 hover:text-[#001F66] border-white'>Contact us</button>
                            </Link>
                        </div>

                        <div className="max-w-sm border-t-0 md:border-t-2 border-r-2 border-b-2 border-l-2 md:border-l-0 p-3 lg:p-6 my-auto mx-4 md:mx-auto sm:gap-2 md:gap-4 mb-10 lg:mb-0  text-white text-center flex flex-col justify-end gap-6 border-white">
                            <p className='text-2xl'>NEWSLETTER</p>
                            <p className='mx-auto leading-tight'>For exclusive news and market updates, sign up for our newsletter.</p>
                            <input 
                                type="email" 
                                className='border-2 mx-auto text-center placeholder:text-center outline-none border-r-white p-3 bg-[rgba(29,89,227,0.31)]' 
                                placeholder='Your Email' 
                                value={email} 
                                onChange={(event) => setEmail(event.target.value)} 
                                disabled={submitted}
                            />
                            <div className="flex items-center justify-center gap-4">
                                <button 
                                    className='border-[2px] px-6 py-3 hover:bg-white transition duration-500 hover:text-[#001F66] border-white text-center mx-auto mb-3' 
                                    onClick={handleSubmit} 
                                    disabled={loading || submitted}
                                >
                                    {loading ? 'Submitting...' : submitted ? 'Submitted' : 'Submit'}
                                </button>
                                {submitted && (
                                    <span className="text-white font-bold">Thank you for subscribing!</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nsl;
