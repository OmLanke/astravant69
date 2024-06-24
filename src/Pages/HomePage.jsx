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
import Ban2 from '../Components/BannerTwo'
import Grid from '../Components/Grid'
const HomePage = () => {
    return (
        <div className='px-4 w-screen'>
            <Navbar2 />
            {/* <HomeBannerOne /> */}
            <Banner />
            <div className='p-4'>
                <Ban2/>
            </div>
            <div className="p-9">
            <Grid/>
            </div>
            {/* <ApartmentListing /> */}
            <HeroIndie />
            <Thrust />
            <Nsl />
        </div>
    )
}

export default HomePage
