import React from "react";
import {Link} from 'react-router-dom';
import "./homeContainer.css";
import HeroImg from "../../assets/images/hero.svg";

const HomeContainer = () => {
	return (
		<section className="home">
			<div className="home__wrapper">
				<div className="home__container-left">
					<h1 className="home__title">Vazto Movies</h1>
					<h3 className="home__subtitle">Sitio web para buscar tus peliculas favoritas.</h3>
					<img src={HeroImg} alt="" className="home__image" />
					{/* {movies && movies.Search ? movies.Search.map(movie => <MovieCard key={movie.imdbID} movie={movie} />): null} */}
				</div>
				<div className="home__container-rigth">
					<h1 className="home__title">Vazto Movies</h1>
					<h3 className="home__subtitle">Sitio web para buscar tus peliculas favoritas.</h3>
					<Link to="/signup" className="home__button">
						Registrate
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HomeContainer;
