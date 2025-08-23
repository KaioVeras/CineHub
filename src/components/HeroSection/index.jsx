import { useEffect, useState } from 'react';
import './heroSection.css'

import { Link, useNavigate } from 'react-router-dom';
import { Play, Heart } from 'lucide-react';

import PrimaryButton from '../PrimaryButton';
import api from '../../services/api';

function HeroSection() {
    const [idMovie, setIdMovie] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadId() {
            await api.get("movie/now_playing", {
                params: {
                    api_key: '9b3e56022302e7fd35df05ba0bb010d3',
                    language: 'pt-BR'
                }
            })
                .then((response) => {
                    setIdMovie(response.data.results.map((movie) => movie.id));
                })
        }

        loadId();
    }, [])

    function randomNumber() {
        if (idMovie.length > 0) {
            const randomIndex = Math.floor(Math.random() * idMovie.length);
            const randomId = idMovie[randomIndex];
            navigate(`/movie/${randomId}`);
        }
    }

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
                    <Link onClick={randomNumber}>
                        <PrimaryButton label="Assistir Destaques" icon={<Play size={16} />} />
                    </Link>

                    <Link to='/favorites' className='secondary-button'>
                        <Heart size={16} />
                        Minha Lista
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;