import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import axios from 'axios';
import "./registerContainer.css";

const RegisterContainer = () => {
    let history = useHistory();
	const [registerForm, setRegisterForm] = useState({
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		let input = e.target.name;
		setRegisterForm({ ...registerForm, [input]: e.target.value });
	};
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/api/users/register",registerForm)
        history.push("/signin");
    }
	return (
		<div className="register">
			<form className="register__form" autoComplete="true" onSubmit={(e)=> {handleSubmit(e)}}>
				<h3 className="register__title">Registrarse</h3>
				<div className="register__inputs">
					<label htmlFor="username" className="register__label">
						Usuario:
					</label>
					<input
						type="text"
						name="username"
						className="register__input"
						placeholder="Ingresa tu nombre"
                         onChange={(e)=>{handleChange(e)}}
					/>
					<label htmlFor="firstName" className="register__label">
						Nombre:
					</label>
					<input
						type="text"
						name="firstName"
						className="register__input"
						placeholder="Ingresa tu nombre"
                         onChange={(e)=>{handleChange(e)}}
					/>
					<label htmlFor="lastName" className="register__label">
						Apellido:
					</label>
					<input
						type="text"
						name="lastName"
						className="register__input"
						placeholder="Ingresa tu nombre"
                         onChange={(e)=>{handleChange(e)}}
					/>
					<label htmlFor="email" className="register__label">
						Email:
					</label>
					<input
						type="text"
						name="email"
						className="register__input"
						placeholder="Ingresa tu nombre"
                         onChange={(e)=>{handleChange(e)}}
					/>
					<label htmlFor="password" className="register__label">
						Password:
					</label>
					<input
						type="password"
						name="password"
						className="register__input"
						placeholder="Ingresa tu nombre"
                         onChange={(e)=>{handleChange(e)}}
					/>
				</div>
				<div className="register__btn-container">
					<button>Registrate</button>
				<Link to="/signin" className="register__link" >Ya tenés cuenta?</Link>
				</div>
			</form>
		</div>
	);
};

export default RegisterContainer;
