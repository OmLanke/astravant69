import React from 'react'
import HomeBannerOne from '../Components/HomeBannerOne'
import HomeBannerTwo from '../Components/HomeBannerTwo'
import Navbar from '../Components/Navbar'
import ApartmentListing from '../Components/ApartmentListing'
import HeroIndie from '../Components/HeroIndie'
import Thrust from '../Components/Thrust'
import Nsl from '../Components/Nsl'
import Footer from '../Components/Footer.jsx'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HomeBannerOne />
            <HomeBannerTwo />
            <ApartmentListing />
            <HeroIndie />
            <Thrust />
            <Nsl />
            <Footer />
        </>
    )
}

export default HomePage
