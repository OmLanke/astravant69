import React from 'react'
import ConUsBanOne from '../Components/ConUsBanOne'
import Navbar from '../Components/Navbar'
import ConUsBanTwo from '../Components/ConUsBanTwo'
import ConUsBanThree from '../Components/ConUsBanThree'
import Nsl from '../Components/Nsl'

const ContactUs = () => {
    return (
        <div className='px-4 pb-4'>
            <Navbar />
            <ConUsBanOne />
            <ConUsBanTwo />
            <ConUsBanThree />
            <Nsl />
        </div>
    )
}

export default ContactUs
