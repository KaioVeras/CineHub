import { useEffect, useState } from 'react';
import './heroContent.css'

import { Clock } from 'lucide-react';
import { FaStar } from "react-icons/fa6";

import { Link } from 'react-router-dom'

import api from '../../services/api';
import Loader from '../Loader';

function HeroContent() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '9b3e56022302e7fd35df05ba0bb010d3',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            // console.log(response.data.results.slice(0, 1));
            let moviesList = response.data.results;

            const moviesDetails = await Promise.all(
                moviesList.map(async (objeto) => {
                    const detailsResponse = await api.get(`movie/${objeto.id}`, {
                        params: {
                            api_key: '9b3e56022302e7fd35df05ba0bb010d3',
                            language: 'pt-BR',
                        }
                    });

                    return {
                        ...objeto,
                        runtime: detailsResponse.data.runtime,
                        genres: detailsResponse.data.genres.map((genre) => genre.name).slice(0, 2)
                    }

                })
            )


            setMovies(moviesDetails);
            setLoading(false);
        }

        loadMovies();
    }, [])

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

    const formatText = (text, maxLength) => {
        if (!text || text.length <= maxLength) {
            return text;
        }

        return text.substring(0, maxLength) + "...";
    }

    return (
        <section className="content-container">
            <div className='content-header'>
                <h1>Filmes em Destaque</h1>
                <p>Descubra nossa seleção especial de filmes aclamados pela crítica e adorados pelo público</p>
            </div>

            {loading ? (
                <Loader styleContent='container-loader' />
            ) : (
                <div className='content-movies'>
                    {movies.map((movie) => {
                        return (
                            <Link to={`/movie/${movie.id}`} key={movie.id}>
                                <div className='card-movie'>
                                    <div className='card-rating'>
                                        <FaStar color='yellow' />
                                        {movie.vote_average.toFixed(1)}
                                    </div>

                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className='card-movie-image' />

                                    <div className='card-movie-info'>
                                        <h3>{movie.title}</h3>

                                        <div className='card-movie-details'>
                                            <p>{movie.release_date?.split('-')[0]}</p>
                                            <p><Clock size={14} /> {formatRuntime(movie.runtime)}</p>
                                        </div>

                                        <div className='container-genres'>
                                            {movie.genres.map((genre) => {
                                                return <span key={genre} className='card-genre'>{genre}</span>
                                            })}
                                        </div>

                                        <div className='card-overview'>
                                            <p>{movie.overview === '' ? 'Não há sinopse para este filme no momento.' : formatText(movie.overview, 80)}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </section>
    );
}


export default HeroContent;