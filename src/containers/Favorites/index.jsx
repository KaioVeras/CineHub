import { useEffect, useState } from 'react';
import "./favorites.css";
import "../../components/HeroContent/heroContent.css"

import { Heart, Trash2, Clock } from 'lucide-react';
import { FaStar } from "react-icons/fa6";

import { Link } from 'react-router-dom';
import { useMenuStore } from '../../store/menuStore';

import PrimaryButton from '../../components/PrimaryButton';

function Favorites() {
    const [movie, setMovie] = useState([]);
    const { movieLocal, setMovieLocal } = useMenuStore();

    useEffect(() => {
        const myList = JSON.parse(localStorage.getItem("@cinehub"));
        setMovie(myList || []);

        if (!myList || myList.length < 1) {
            setMovieLocal(false);
        } else {
            setMovieLocal(true);
        }

    }, [setMovieLocal]);

    function cleanMovies() {
        localStorage.removeItem("@cinehub");
        setMovie([]);
        setMovieLocal(false);
    }

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
        <div className='container-favorites-page'>
            {movieLocal ? (
                <div className='container-favorites'>
                    <div className='header-movies'>
                        <div className='container-header-title'>
                            <div className='header-title'>
                                <Heart size={window.innerWidth < 700 ? 50 : 60} color='#fbd650' />
                                <h1>Quero Assistir</h1>
                            </div>
                            <p>
                                {movie.length} {movie.length === 1 ? 'filme' : 'filmes'} na sua lista
                            </p>
                        </div>

                        <button onClick={cleanMovies}>
                            <Trash2 size={17} color='#ffeeb3' />
                            Limpar Lista
                        </button>
                    </div>

                    <div className='container-movies-favorites'>
                        {movie.map((movie) => {
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
                                                    return <span key={genre.id} className='card-genre'>{genre.name}</span>
                                                }).slice(0, 2)}
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
                </div>
            ) : (
                <div className='container-favorites'>
                    <div className='header-favorites'>
                        <Heart size={60} color='#fbd650' />
                        <h1>Quero Assitir</h1>
                        <p>Sua lista pessoal de filmes está vazia</p>
                    </div>

                    <div className='content-favorites'>
                        <div className='card-content'>
                            <Heart size={100} color='#606268' />
                            <h1>Nenhum filme na sua lista</h1>
                            <p>Explore nosso catálogo e adicione filmes que você quer assistir mais tarde. É fácil e rápido!</p>
                            <PrimaryButton label="Explorar Catálogo" link="/" singleWidth="200px" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Favorites;