import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';
import "./usersContainer.css";
import User from "../../assets/images/gon.jpg";

const MoviesContainer = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		axios
			.get("/api/users")
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				console.log("no se pudieron obtener los usarios de la db");
			});
	}, []);

	return (
		<section className="users">
			<div className="users__wrapper">
				<h1 className="users__title">Usuarios</h1>
				<hr />
				<section className="users__container">
					{users.map((user) => (
						<div className="users__card" key={user.id}>
							<div className="users__info-container">
								<div className="users__image-container">
									<img
										src={User}
										alt=""
										className="users__image"
									/>
								</div>
								<div className="users__info">
									<h3 className="users__usersname">
										Usuario: <span>{user.username}</span>
									</h3>
									<h3 className="users__email">
										Email: <span>{user.email}</span>
									</h3>
								</div>
								<div className="users__actions">
									<Link to={`/users/${user.id}`}>
										<button className="users__action">
											+
										</button>
									</Link>
								</div>
							</div>
							<hr />
						</div>
					))}
				</section>
			</div>
		</section>
	);
};

export default MoviesContainer;
