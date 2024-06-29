import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import Search from './Pages/Search';
import ContactUs from './Pages/ContactUs';
import PropertyPage from './Pages/PropertyPage';
import RentalProp from './Pages/RentalProp';
import PropertyListing from './Pages/PropertyListing.jsx'
import OurService from './Pages/OurService.jsx'

import Navbar from './Components/Navbar.jsx';
import Nsl from './Components/Nsl.jsx';
import Footer from './Components/Footer.jsx';

const AppRouter = () => {
    return (
        <div className='px-4 font-helmet'>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/search" element={<Search />} />
                <Route path="/propertypage/:id" element={<PropertyPage />} />
                <Route path="/rentalprop" element={<RentalProp />} />
                <Route path="/propertylisting" element={<PropertyListing />} />
                <Route path="/services" element={<OurService />} />
            </Routes>
            <Nsl />
            <Footer />
        </div>
    );
};

export default AppRouter;    
