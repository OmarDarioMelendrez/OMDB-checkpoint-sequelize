import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import {getFavorites} from '../../store/userReducer'
import {getSearchMovies} from '../../store/moviesReducer'
import VideosImage from '../../assets/images/hero.svg';
import "./moviesContainer.css";


const MoviesContainer = () => {
	const dispatch = useDispatch()
    const movies = useSelector(state => state.search.search)
    const favMovies = useSelector(state => state.user.favorites)
	let location = useLocation()
    useEffect(() => {
		dispatch(getFavorites())
	}, [])

	const handleSearchVideos = (e) => {
		if (e.key === "Enter") {
			dispatch(getSearchMovies(e.target.value));
			e.target.value = "";
		}
	};

	if(location.pathname === "/movies"){
		return (
			<section className="movies">
				<div className="movies__wrapper">
	
				<h1 className="movies__category-title">Todas las películas</h1>
				<div className="movies__container">
					{movies && movies.Search  ? movies.Search.map(movie => <MovieCard key={movie.imdbID} movie={movie} />): (
						<div className="movies__search-container">
							<img src={VideosImage} alt="popcorn" className="movies__image" />
							<label htmlFor="movies" className="movies__input-label">
								Qué pelicula quieres buscar?
							</label>
							<input
							id="movies"
								type="text"
								className="movies__input"
								placeholder="Buscar"
								onKeyDown={(e) => {
									handleSearchVideos(e);
								}}
							/>
						</div>
					)}
				</div>
				</div>
			</section>
		);	
	} else {
		return (
			<section className="movies">
				<div className="movies__wrapper">
	
				<h1 className="movies__category-title">Mis favoritos</h1>
				<div className="movies__container">
					{favMovies && favMovies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
				</div>
				</div>
			</section>
		);
	}


};

export default MoviesContainer;
