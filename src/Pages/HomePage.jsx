import React from 'react'
import HomeBannerOne from '../Components/HomeBannerOne'
import HomeBannerTwo from '../Components/HomeBannerTwo'
import Navbar from '../Components/Navbar'
import ApartmentListing from '../Components/ApartmentListing'
import HeroIndie from '../Components/HeroIndie'
import Thrust from '../Components/Thrust'
import Nsl from '../Components/Nsl'

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
        </>
    )
}

export default HomePage
