import React from 'react'
import HomeBannerOne from '../Components/HomeBannerOne'
import HomeBannerTwo from '../Components/HomeBannerTwo'
import Navbar from '../Components/Navbar'
import ApartmentListing from '../Components/ApartmentListing'
import HeroIndie from '../Components/HeroIndie'
import Thrust from '../Components/Thrust'
import Nsl from '../Components/Nsl'
import Banner from '../Components/homebanner'
import Navbar2 from '../Components/Navbar2'
const HomePage = () => {
    return (
        <>
            <Navbar2 />
            {/* <HomeBannerOne /> */}
            <Banner />
            <HomeBannerTwo />
            <ApartmentListing />
            <HeroIndie />
            <Thrust />
            <Nsl />
        </>
    )
}

export default HomePage
