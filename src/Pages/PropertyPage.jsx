import React from 'react'
import Navbar from '../Components/Navbar'
import PP_one from '../Components/PP_one'
import Footer from '../Components/Footer.jsx'
const PropertyPage = () => {
    return (
        <>
            <div className="bg-[#9CABB4] pt-10 pl-10 pr-10 pb-40 m-4">
                <Navbar />
            </div>
            <PP_one />
            <Footer />
        </>
    )
}

export default PropertyPage
