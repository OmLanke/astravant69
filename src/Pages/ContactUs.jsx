import React from 'react'
import ConUsBanOne from '../Components/ConUsBanOne'
import Navbar from '../Components/Navbar2'
import ConUsBanTwo from '../Components/ConUsBanTwo'
import ConUsBanThree from '../Components/ConUsBanThree'
import Newsletter from '../Components/Newsletter'
import AboutBan from  '../Components/AboutBan'
import Grid from '../Components/Grid'
import ContactBan2 from '../Components/ContactBan2'
const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className='px-4 pb-4'>
                <AboutBan/>
                {/* <ConUsBanOne /> */}
                <ContactBan2 />
                <div className='p-4'>
                <Grid/>
                </div>
                {/* <ConUsBanThree /> */}
                <Newsletter/>
            </div>
        </div>
    )
}

export default ContactUs
