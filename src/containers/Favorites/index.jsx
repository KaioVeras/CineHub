import React from 'react';
import "./favorites.css";

import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

import PrimaryButton from '../../components/PrimaryButton';

function Favorites() {
    return (
        <div className='container-favorites'>
            <div className='header-favorites'>
                <Heart size={60} color='#fbd650' />
                <h1>Quero Assitir</h1>
                <p>Sua lista pessoal de filmes está vazia</p>
            </div>

            <div className='content-favorites'>
                <div className='card-content'>
                    <Heart size={100} color='#606268'/>
                    <h1>Nenhum filme na sua lista</h1>
                    <p>Explore nosso catálogo e adicione filmes que você quer assistir mais tarde. É fácil e rápido!</p>
                    <PrimaryButton label="Explorar Catálogo" link="/"/>
                </div>
            </div>
        </div>
    );
}

export default Favorites;