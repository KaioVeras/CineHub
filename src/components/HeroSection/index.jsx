import React from 'react';
import './heroSection.css'

import PrimaryButton from '../PrimaryButton';

import { Play, Heart } from 'lucide-react';

function HeroSection() {
    return (
        <section className='hero-section'>
            <div className='hero-bg'></div>

            <div className='hero-content'>
                <div className='hero-title'>
                    <h1>Descubra o</h1>
                    <h1 className='highlight'>Cinema</h1>
                </div>

                <p>
                    Explore um universo de filmes incríveis. Crie sua lista personalizada, assista trailers e mergulhe nas melhores histórias do cinema mundial.
                </p>

                <div className='hero-buttons'>
                    <PrimaryButton label="Assistir Destaques" icon={<Play size={16} />} />

                    <button className='secondary-button'>
                        <Heart size={16} />
                        Minha Lista
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;