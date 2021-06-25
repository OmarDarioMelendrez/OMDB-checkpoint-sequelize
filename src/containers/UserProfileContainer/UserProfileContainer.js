import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logOut } from "../../store/userReducer";
import { useParams, useHistory } from "react-router-dom";
import "./userProfileContainer.css";
import User from "../../assets/images/gon.jpg";
import FavoritesContainer from "../FavoritesContainer/FavoritesContainer";

const UserProfileContainer = () => {
	const dispatch = useDispatch();
	let history = useHistory()
	let { id } = useParams();
	const loggedUser = useSelector((state) => state.user.data);
	const [user, setUser] = useState({});
	const handleLogOut = () => {
		dispatch(logOut());
		history.push("/")
	};
	console.log(user);
	useEffect(() => {
		axios
			.get(`/api/users/${id}`)
			.then((res) => {
				setUser(res.data);
			})
	}, [id]);

		return (
			<section className="user">
				<div className="user__wrapper">
					<h1 className="user__title">Cuenta</h1>
					<hr />
					<section className="user__info-container">
						<div className="user__image-container">
							<img src={User} alt="" className="user__image" />
						</div>
						<h3 className="user__username">
							Usuario: <span>{user.username}</span>
						</h3>
						<h3 className="user__email">
							Nombre: <span>{user.firstName}</span>
						</h3>
						<h3 className="user__email">
							Apellido: <span>{user.lastName}</span>
						</h3>
						<h3 className="user__email">
							Email: <span>{user.email}</span>
						</h3>
						{loggedUser.id === user.id && (
						<section className="user__actions">
							<button
								className="user__action"
								onClick={() => {
									handleLogOut();
								}}
							>
								Cerrar sesión
							</button>
						</section>
					)}
					</section>
					<hr />
					<FavoritesContainer isLogged={loggedUser.id === user.id} favMovies={user.favorites} />

				</div>
			</section>
		);
};

export default UserProfileContainer;
