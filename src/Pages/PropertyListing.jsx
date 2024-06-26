
import React from 'react'
import PropListHeroSection from '../Components/PropListHeroSection.jsx'
import Navbar from '../Components/Navbar'
import PropListBan from '../Components/PropListBan.jsx' 
import ConUsBanThree from '../Components/ConUsBanThree'
import Nsl from '../Components/Nsl'
import Footer from '../Components/Footer.jsx'

const PropertyListing = () => {
    return (
        <>
            <Navbar />
            <PropListHeroSection />
            <PropListBan />
            <Nsl />
            <Footer />
        </>
    )
}

export default PropertyListing
