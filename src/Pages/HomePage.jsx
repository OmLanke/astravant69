import React from 'react'

import Banner from '../Components/homebanner'
import Navbar2 from '../Components/Navbar2'
import Ban2 from '../Components/BannerTwo'
import Grid from '../Components/Grid'
import HomeCta from '../Components/HomeCta'
import Testimonials from '../Components/Testimonials'
import Newsletter from '../Components/Newsletter'

const HomePage = () => {
    return (
        <div className=''>
            <Navbar2 />
            <div className='px-4 pb-4'>
                <Banner />
                <div className='p-4'>
                    <Ban2/>
                </div>
                <div className="p-9">
                    <Grid/>
                </div>
                
                <HomeCta/>
                <Testimonials/>
                <div className='p-5'>
                    <Newsletter/>
                </div>
               
            </div>
        </div>
    )
}

export default HomePage
