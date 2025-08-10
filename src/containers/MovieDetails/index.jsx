import { useEffect, useState } from 'react';
import './movieInfo.css';

import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar, Clock } from 'lucide-react';
import { FaStar } from "react-icons/fa6";

import PrimaryButton from '../../components/PrimaryButton';
import api from '../../services/api';

function MovieDetails() {
    const { id } = useParams();
    const [movies, setMovies] = useState({});

    useEffect(() => {
        async function loadDetailsMovies() {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: '9b3e56022302e7fd35df05ba0bb010d3',
                    language: 'pt-BR'
                }
            })
                .then((response) => {
                    setMovies(response.data)
                })
                .catch((err) => {
                    console.log(`Erro: ${err}`);
                })
        }

        loadDetailsMovies();
    }, [id]);

    const formatRuntime = (runtime) => {
        const hours = Math.floor(runtime / 60); // Deixa sempre em número inteiro e divide por 60min para retornar as horas
        const minutes = runtime % 60; // Resto da divisão para retornar os minutos

        if (hours === 0) {
            return `${minutes}min`;
        } else if (minutes === 0) {
            return `${hours}h`;
        } else {
            return `${hours}h ${minutes}min`
        }

    }

    return (
        <section className='movie-info'>
            <Link to='/' className='button-back'>
                <ArrowLeft size={16} />
                <p>Voltar ao Catálogo</p>
            </Link>

            <div className='content-movie-details'>
                <div className='movie-poster '>
                    <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt={movies.title} className='movie-poster-image' />
                    <PrimaryButton label="Quero Assitir" icon={<Heart size={16} />} singleWidth='300px' />
                </div>

                <div className='movie-info-details'>
                    <h2>{movies.title}</h2>

                    {movies.title && (
                        <div>
                            <div className='movie-topics'>
                                <p><Calendar size={16} /> {movies.release_date?.split('-')[0]}</p>
                                <p><Clock size={16} /> {formatRuntime(movies.runtime)}</p>
                                <p><FaStar color="#FFD700" /> {movies.vote_average.toFixed(1)}/10</p>
                            </div>

                            <div className='movie-genres'>
                                {movies.genres.map((genre) => {
                                    return <span className='card-genre-details'>{genre.name}</span>
                                })}
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default MovieDetails;