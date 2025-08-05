import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';

import Home from '../containers/Home';

function AppRoutes() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;