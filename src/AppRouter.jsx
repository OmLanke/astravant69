import React from 'react';
import { Route, Routes } from 'react-router';

import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />        
            <Route path="/contact" element={<Contact />} />        

        </Routes>
    );
};

export default AppRouter;