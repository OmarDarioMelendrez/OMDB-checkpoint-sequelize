import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./favoritesContainer.css";
// import { useSelector, useDispatch } from 'react-redux';
// import { useLocation } from "react-router-dom";
// import {getFavorites} from '../../store/userReducer'


const FavoritesContainer = ({favMovies, isLogged}) => {
	// const dispatch = useDispatch()
    // const movies = useSelector(state => state.search.search)
    // const favMovies = useSelector(state => state.user.favorites)
	// let location = useLocation()
    // useEffect(() => {
	// 	dispatch(getFavorites())
	// }, [])

	return (
		<section className="favorites">
			<div className="favorites__wrapper">
			<h1 className="favorites__category-title">{isLogged ? "Mis favoritos" : "Favoritos"}</h1>
			<div className="favorites__container">
				{favMovies && favMovies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
			</div>
			</div>
		</section>
	);
};

export default FavoritesContainer;
