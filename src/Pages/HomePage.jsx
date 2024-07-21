import React from 'react'
import HomeBannerOne from '../Components/HomeBannerOne'
import HomeBannerTwo from '../Components/HomeBannerTwo'
import ApartmentListing from '../Components/ApartmentListing'
import HeroIndie from '../Components/HeroIndie'
import Thrust from '../Components/Thrust'
import { Helmet } from 'react-helmet'
const HomePage = () => {
    return (
        <>
        <div>
            <HomeBannerOne />
            <HomeBannerTwo />
            <ApartmentListing />
            <HeroIndie />
            <Thrust />
            <Helmet>
                <meta property="og:title" content="Astravant Realty: Where dreams find realty"/>
                <meta property="og:description" content="Discover Mumbai's premier real estate agency, Astravant Realty. We specialize in luxury property sales, purchases, and listings from Juhu to South Bombay."/>
                <meta property="og:image" content="/logo.png"/>
                <meta property="og:url" content="https://astravantrealty.com"/>
                <meta property="og:type" content="website"/>
            </Helmet>
    </div>
        </>
    )
}

export default HomePage
