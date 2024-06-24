import React from 'react'
import ConUsBanOne from '../Components/ConUsBanOne'
import Navbar from '../Components/Navbar2'
import ConUsBanTwo from '../Components/ConUsBanTwo'
import ConUsBanThree from '../Components/ConUsBanThree'
import Newsletter from '../Components/Newsletter'

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className='px-4 pb-4'>
                <ConUsBanOne />
                <ConUsBanTwo />
                <ConUsBanThree />
                <Newsletter/>
            </div>
        </div>
    )
}

export default ContactUs
