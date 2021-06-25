import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {addToFavorites} from '../../store/userReducer'
import { getMovieById } from "../../store/moviesReducer.js";
import "./singleMovieContainer.css";

const SingleMovieContainer = () => {
	const favorites = useSelector((state) => state.user.favorites);
    const movie = useSelector((state) => state.search.selected);
	const [isFavorite, setIsFavorite] = useState(false);

	const dispatch = useDispatch();

	let { id } = useParams();

	useEffect(() => {
		dispatch(getMovieById(id));
        let filteredMovie = favorites.filter(
			(favorite) => favorite.imdbID === id
		);
		filteredMovie.length > 0 ? setIsFavorite(true) : setIsFavorite(false);
	}, [dispatch]);


    if (movie && movie.Title){
        return (
            <section className="singleMovie-description__container">
                <div className="singleMovie-description">
                    <div className="singleMovie-description__poster">
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className="singleMovie-description__poster-image"
                        />
                        {isFavorite ? 
                        (<button className="singleMovie-description__fav-remove" onClick={() => {dispatch(addToFavorites(movie))}} >
                            <FaTimes className="singleMovie-description__icon" /> Favoritos
                        </button>)
                        :
                        (<button className="singleMovie-description__fav " onClick={() => {dispatch(addToFavorites(movie))}} >
                            <FaPlus className="singleMovie-description__icon" /> Favoritos
                        </button>)
                        }
                    </div>
                    <div className="singleMovie-description__info">
                        <h2 className="singleMovie-description__info-title">
                            {movie.Title}
                        </h2>
                        <span className="singleMovie-description__rating">
                            Calificación:
                        </span>
                        <div className="singleMovie-description__stars-container">
                            <img
                                src="https://cuevana3.io/wp-content/plugins/wp-postratings/images/stars/rating_on.gif"
                                alt=""
                                className="singleMovie-description__star"
                            />
                            <img
                                src="https://cuevana3.io/wp-content/plugins/wp-postratings/images/stars/rating_on.gif"
                                alt=""
                                className="singleMovie-description__star"
                            />
                            <img
                                src="https://cuevana3.io/wp-content/plugins/wp-postratings/images/stars/rating_on.gif"
                                alt=""
                                className="singleMovie-description__star"
                            />
                            <img
                                src="https://cuevana3.io/wp-content/plugins/wp-postratings/images/stars/rating_on.gif"
                                alt=""
                                className="singleMovie-description__star"
                            />
                            <img
                                src="https://cuevana3.io/wp-content/plugins/wp-postratings/images/stars/rating_on.gif"
                                alt=""
                                className="singleMovie-description__star"
                            />
                        </div>
                        <div className="singleMovie-description__time">
                            <span className="singleMovie-time">{movie.Runtime}</span>
                            <span className="singleMovie-year">{movie.Year}</span>
                            <span className="singleMovie-type">{movie.Type}</span>
                        </div>
                        <div className="singleMovie-plot__desktop">
                            <p>{movie.Plot}</p>
                        </div>
                        <div className="singleMovie-data__desktop">
                            <ul className="singleMovie-data__ul">
                                <li className="singleMovie-data__li">
                                    <strong>Director:</strong>
                                    <span>{movie.Director}</span>
                                </li>
                                <li className="singleMovie-data__li">
                                    <strong>Genero:</strong>
                                    <span>{movie.Genre}</span>
                                </li>
                                <li className="singleMovie-data__li">
                                    <strong>Actores:</strong>
                                    <span>{movie.Actors}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="singleMovie-plot">
                    <p>{movie.Plot}</p>
                </div>
                <div className="singleMovie-data">
                    <ul className="singleMovie-data__ul">
                        <li className="singleMovie-data__li">
                            <strong>Director:</strong>
                            <span>{movie.Director}</span>
                        </li>
                        <li className="singleMovie-data__li">
                            <strong>Genero:</strong>
                            <span>{movie.Genre}</span>
                        </li>
                        <li className="singleMovie-data__li">
                            <strong>Actores:</strong>
                            <span>{movie.Actors}</span>
                        </li>
                    </ul>
                </div>
            </section>
        );    
    } else {
        return ( <div className="singleMovie-description__loading">Movie not found</div>)
    }
};

export default SingleMovieContainer;
