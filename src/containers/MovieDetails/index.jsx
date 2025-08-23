import { useEffect, useState } from 'react';
import './movieInfo.css';

import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar, Clock, Users } from 'lucide-react';
import { FaStar, FaHeart } from "react-icons/fa6";
import { toast } from 'react-toastify';

import Loader from '../../components/Loader';
import api from '../../services/api';

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [movies, setMovies] = useState({});
    const [movieLocal, setMovieLocal] = useState(false);
    const [trailer, setTrailer] = useState(null);
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);

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
                .catch(() => {
                    console.log("Filme não encontrado");
                    navigate("/", { replace: false });
                    return;
                })

            await api.get(`movie/${id}/videos`, {
                params: {
                    api_key: '9b3e56022302e7fd35df05ba0bb010d3',
                    language: 'pt-BR'
                }
            })
                .then((response) => {
                    if (response.data.results && response.data.results.length > 0) {
                        setTrailer(response.data.results[0]);
                    } else {
                        setTrailer(null);
                    }
                })

            await api.get(`movie/${id}/credits`, {
                params: {
                    api_key: '9b3e56022302e7fd35df05ba0bb010d3',
                    language: 'pt-BR'
                }
            })
                .then((response) => {
                    setCast(response.data.cast.slice(0, 4));
                })

                .catch(() => {
                    console.log("Filme não encontrado");
                })

                .finally(() => {
                    setLoading(false);
                })

        }

        loadDetailsMovies();

        const myList = JSON.parse(localStorage.getItem("@cinehub"));

        const hasMovie = Array.isArray(myList) && myList.some((item) => item.id === movies.id);
        setMovieLocal(hasMovie);

    }, [navigate, id, movies]);

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

    function saveMovies() {
        const myListMovies = localStorage.getItem("@cinehub");
        let savedMovies = JSON.parse(myListMovies) || []; // O localStorage só armazena strings, aqui estamos convertendo a string de volta em um array ou objeto

        const hasMovie = savedMovies.some((item) => item.id === movies.id);

        if (hasMovie) {
            alert("Filme já adicionado à lista!");
            return;
        }

        savedMovies.push(movies);
        localStorage.setItem("@cinehub", JSON.stringify(savedMovies));
        setMovieLocal(true);

        if (window.innerWidth > 500) {
            toast.success("Filme adicionado com sucesso!");
        } else {
            alert("Filme adicionado com sucesso!");
        }
    }

    function removeMovie(id) {
        const myListMovie = localStorage.getItem("@cinehub");
        let savedMovies = JSON.parse(myListMovie) || [];

        const removeMovie = savedMovies.filter((movie) => {
            return movie.id !== id
        })

        localStorage.setItem("@cinehub", JSON.stringify(removeMovie));
        setMovieLocal(false);

        if (window.innerWidth > 500) {
            toast.success("Filme removido com sucesso!");
        } else {
            alert("Filme removido com sucesso!");
        }
    }

    return (
        <section className='movie-info'>
            <div className='container-movie-info'>
                <Link to='/' className='button-back'>
                    <ArrowLeft size={16} />
                    <p>Voltar ao Catálogo</p>
                </Link>

                <div className='content-movie-details'>
                    <div className='movie-poster '>
                        <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt={movies.title} className='movie-poster-image' />
                        {movieLocal ? (
                            <button className='secondary-button-saved' onClick={() => removeMovie(movies.id)}>
                                <FaHeart size={16} />
                                Remover da Lista
                            </button>
                        ) : (
                            <button className='primary-button-info' onClick={saveMovies}>
                                <Heart size={16} />
                                Quero Assistir
                            </button>
                        )}
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

                                {loading ? (
                                    <Loader styleTrailer='container-loader-trailer' />
                                ) : (
                                    <div className='movie-trailer'>
                                        <h3>Trailer</h3>
                                        {trailer && trailer.key ? (
                                            <iframe
                                                width="600"
                                                height="315"
                                                className='trailer'
                                                frameBorder="0"
                                                src={`https://www.youtube.com/embed/${trailer.key}?rel=0&modestbranding=1&showinfo=0&controls=1`}
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen>
                                            </iframe>
                                        ) : (
                                            <div className='no-trailer'>
                                                <p className='no-trailer-text'>Trailer não disponível</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className='movie-synopsis'>
                                    <h3>Sinopse</h3>

                                    <p className='text-sinopse'>{movies.overview ? movies.overview : 'Sinopse não disponível'}</p>
                                </div>

                                <div className='movie-cast'>
                                    <div className='movie-director'>
                                        <h3>Direção</h3>
                                        <div>
                                            {movies.production_companies.map((company) => {
                                                return <p>{company.name}</p>
                                            })}
                                        </div>
                                    </div>

                                    <div className='movie-director'>
                                        <h3><Users size={18} /> Elenco Principal</h3>
                                        <div>
                                            {cast.map((actor) => {
                                                return <p>{actor.name}</p>
                                            })}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails;