import React from 'react'
import Navbar from '../Components/Navbar2'
import ConBanOne from '../Components/ConBanOne'
import ConBanTwo from '../Components/ConBanTwo'
import Newsletter from '../Components/Newsletter'
import AboutCta from '../Components/AboutCta'
import AboutBan from '../Components/AboutBan'
const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='px-4 pb-4'>
                <AboutBan/>
                {/* <ConBanOne /> */}
                <div className='p-6'><AboutCta/></div>
                
                {/* <ConBanTwo /> */}
                <Newsletter />
            </div>
        </div>
    )
}

export default Contact
