import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaInfoCircle, FaPlus, FaTimes } from "react-icons/fa";
import "./movieCard.css";
import { addToFavorites,removeOfFavorites } from "../../store/userReducer";

const SingleMovie = ({ movie }) => {
	const favorites = useSelector((state) => state.user.favorites);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);
	const handleOpen = () => {
		setOpen(!open);
	};
	useEffect(() => {
		let filteredMovie = favorites.filter(
			(favorite) => favorite.imdbID === movie.imdbID
		);
		filteredMovie.length > 0 ? setIsFavorite(true) : setIsFavorite(false);
	}, [favorites]);
	return (
		<div className="movie">
			<img
				src={movie.Poster}
				alt={movie.Title}
				className="movie__img"
				onClick={handleOpen}
			/>
			<div
				className={`movie__modal ${open && "active"}`}
				onClick={handleOpen}
			>
				<div className="movie__modal-content">
					<h4 className="movie__modal-title">{movie.Title}</h4>
					<div className="movie__modal-actions">
						<div
							className="movie__modal-action"
							onClick={handleOpen}
						>
							<Link to={`/movies/${movie.imdbID}`}>
								<FaInfoCircle className="movie__modal-icon" />
							</Link>
						</div>
						{isFavorite ? (
							<div
								className="movie__modal-action"
								onClick={() => {
									dispatch(removeOfFavorites(movie.imdbID));
								}}
							>
								<FaTimes className="movie__modal-icon" />
							</div>
						) : (
							<div
								className="movie__modal-action"
								onClick={() => {
									dispatch(addToFavorites(movie));
								}}
							>
								<FaPlus className="movie__modal-icon" />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleMovie;
