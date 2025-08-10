import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';

import Home from '../containers/Home';
import MovieDetails from '../containers/MovieDetails';

function AppRoutes() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;