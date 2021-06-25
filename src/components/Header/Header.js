import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./header.css";

import { getSearchMovies } from "../../store/moviesReducer";
import { logOut } from "../../store/userReducer";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo-white.svg";
import User from "../../assets/images/gon.jpg";

function Header() {
	const user = useSelector((state) => state.user.data);
	const history = useHistory();
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(!open);
	const closeMobileMenu = () => setOpen(false);
	const handleSearch = (e) => {
		if (e.key === "Enter") {
			dispatch(getSearchMovies(e.target.value));
			history.push("/movies");
			e.target.value = "";
		}
	};
	const handleLogOut = () => {
		dispatch(logOut());
		history.push("/");
	};

	return (
		<React.Fragment>
			<header className="header">
				<div className="header__container">
					<div className="header__container-left">
						<div className="header__logo">
							{!open ? (
								<FaBars
									className="header__burger"
									onClick={handleOpen}
								/>
							) : (
								<FaTimes
									className="header__burger"
									onClick={handleOpen}
								/>
							)}
							<Link to={user.username ? "/movies" : "/"} onClick={closeMobileMenu}>
								<img src={Logo} alt="brand logo" />
							</Link>
						</div>
						{user.username && (
							<ul className="header__nav">
							
								<li>
									<Link
										to="/movies"
										className="header__nav-link"
									>
										Peliculas
									</Link>
								</li>
								<li>
									<Link
										to="/favs"
										className="header__nav-link"
									>
										Favoritos
									</Link>
								</li>
								<li>
									<Link
										to="/users"
										className="header__nav-link"
									>
										Usuarios
									</Link>
								</li>
							</ul>
						)}
					</div>
					{!user.username ? (
						<div className="header__container-rigth">
							<Link to="/signin" className="header__nav-link">
								Iniciar sesión
							</Link>
							<Link to="/signup" className="header__nav-link">
								Registrate
							</Link>
						</div>
					) : (
						<div className="header__container-rigth">
							<input
								type="text"
								className="header__input"
								placeholder="Buscar"
								onKeyDown={(e) => {
									handleSearch(e);
								}}
							/>

							<div className="header__user-img-container">
								<Link to={`/users/${user.id}`}>
									<img
										src={User}
										alt="user"
										className="header__user-img"
									/>
								</Link>
							</div>
						</div>
					)}
				</div>
			</header>
			<nav className={`nav__mobile ${open ? "active" : ""}`}>
				{!user.username ? (
					<ul className="nav__mobile-settings">
						<li>
							<Link
								to="/signin"
								className="nav__mobile-settings-link"
								onClick={closeMobileMenu}
							>
								Iniciar sesión
							</Link>
						</li>
						<li>
							<Link
								to="/signup"
								className="nav__mobile-settings-link"
								onClick={closeMobileMenu}
							>
								Registrarse
							</Link>
						</li>
					</ul>
				) : (
					<ul className="nav__mobile-settings">
						<li>
							<div className="nav__mobile-img-container">
								<img
									src={User}
									alt="user"
									className="nav__mobile-img"
								/>
							</div>
							<p className="nav__mobile-name">Vazto</p>
						</li>
						<li>
							<Link
								to={`/users/${user.id}`}
								className="nav__mobile-settings-link"
								onClick={closeMobileMenu}
							>
								Cuenta
							</Link>
						</li>
						<li>
							<Link
								to="/movies"
								className="nav__mobile-sections-link"
								onClick={closeMobileMenu}
							>
								peliculas
							</Link>
						</li>
						<li>
							<Link
								to="/favs"
								className="nav__mobile-settings-link"
								onClick={closeMobileMenu}
							>
								Mis Favoritos
							</Link>
						</li>
						<li>
							<Link
								to="/users"
								className="nav__mobile-sections-link"
								onClick={closeMobileMenu}
							>
								Usuarios
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className="nav__mobile-settings-link"
								onClick={() => {
									closeMobileMenu();
									handleLogOut();
								}}
							>
								Cerrar sesión
							</Link>
						</li>
					</ul>
				)}
			</nav>
		</React.Fragment>
	);
}

export default Header;
