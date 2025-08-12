import React from 'react';
import './navBar.css'

import { Link, useLocation } from 'react-router-dom';
import { Film, Heart } from 'lucide-react';

function NavBar() {
    const location = useLocation();

    return (
        <header>
            <h1 className='title-logo'>
                <Link to='/'>
                    <Film />
                    CineHub
                </Link>
            </h1>

            <div className='nav-links'>
                <Link to='/' className={`nav-link ${location.pathname == "/" ? "active" : ""}`}>
                    <Film size={16}/>
                    Início
                </Link>

                <Link to='/favorites' className={`nav-link ${location.pathname == "/Favorites" ? "active" : ""}`}>
                    <Heart size={16}/>
                    Quero Assistir
                </Link>
            </div>
        </header>
    );
}

export default NavBar;