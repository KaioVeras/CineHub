import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';

import Home from '../containers/Home';
import MovieDetails from '../containers/MovieDetails';
import NavBarOpen from '../components/NavBarOpen'; // Assuming this is a new component for the open navbar

function AppRoutes() {
    return (
        <BrowserRouter>
            <NavBar />
            <NavBarOpen />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;