import React, { useState, useEffect } from 'react';
import './navBar.css'

import { Link, useLocation } from 'react-router-dom';
import { Film, Heart, Menu, X } from 'lucide-react';

import { useMenuStore } from '../../store/menuStore';

function NavBar() {
    const location = useLocation();

    const isMenuOpen = useMenuStore((state) => state.isMenuOpen)
    const toggleMenu = useMenuStore((state) => state.toggleMenu);
    const closeMenu = useMenuStore((state) => state.closeMenu)

    return (
        <header>
            <h1 className='title-logo'>
                <Link to='/' onClick={closeMenu}>
                    <Film />
                    CineHub
                </Link>
            </h1>

            <div className='nav-links'>
                <Link to='/' className={`nav-link ${location.pathname == "/" ? "active" : ""}`}>
                    <Film size={16} />
                    Início
                </Link>

                <Link to='/favorites' className={`nav-link ${location.pathname == "/favorites" ? "active" : ""}`}>
                    <Heart size={16} />
                    Quero Assistir
                </Link>
            </div>

            <button className='button-menu' onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </header>
    );
}

export default NavBar;