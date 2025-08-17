import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import NavBarOpen from '../components/NavBarOpen';
import Home from '../containers/Home';
import MovieDetails from '../containers/MovieDetails';
import Error from '../containers/Error';

function AppRoutes() {
    return (
        <BrowserRouter>
            <NavBar />
            <NavBarOpen />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<MovieDetails />} />

                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;