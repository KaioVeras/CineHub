import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import NavBarOpen from '../components/NavBarOpen';
import Home from '../containers/Home';
import MovieDetails from '../containers/MovieDetails';
import Favorites from '../containers/Favorites';

import Error from '../containers/Error';

function AppRoutes() {
    return (
        <BrowserRouter>
            <NavBar />
            <NavBarOpen />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<MovieDetails />} />
                <Route path='/favorites' element={<Favorites />} />

                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;