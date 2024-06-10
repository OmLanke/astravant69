import React from 'react';
import { Route, Routes } from 'react-router';

import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import Search from './Pages/Search';
import ContactUs from './Pages/ContactUs';
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />        
            <Route path="/contact" element={<Contact />} />   
            <Route path="/contactus" element={<ContactUs />} />   

            <Route path="/search" element={<Search />} />     

        </Routes>
    );
};

export default AppRouter;