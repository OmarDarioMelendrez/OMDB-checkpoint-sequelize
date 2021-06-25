import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {setUser, getFavorites} from '../../store/userReducer'
import axios from 'axios';
import "./loginContainer.css";

const LoginContainer = () => {
    let history = useHistory();
    const dispatch = useDispatch()
	const [loginForm, setloginForm] = useState({
		username: "",
		password: "",
	});
	const handleChange = (e) => {
		let input = e.target.name;
		setloginForm({ ...loginForm, [input]: e.target.value });
	};
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await axios.post("/api/auth/login",loginForm)
        dispatch(setUser(user.data))
		dispatch(getFavorites())
        history.push("/movies");
    }
	return (
		<div className="login">
			<form className="login__form" autoComplete="true" onSubmit={(e)=> {handleSubmit(e)}}>
				<h3 className="login__title">Inicio de sesión</h3>
				<div className="login__inputs">
					<label htmlFor="username" className="login__label">
						Usuario:
					</label>
					<input
						type="text"
						name="username"
						className="login__input"
						placeholder="Ingresa tu nombre"
                         onChange={(e)=>{handleChange(e)}}
					/>
					<label htmlFor="password" className="login__label">
						Password:
					</label>
					<input
						type="password"
						name="password"
						className="login__input"
						placeholder="Ingresa tu nombre"
                         onChange={(e)=>{handleChange(e)}}
					/>
				</div>
				<div className="login__btn-container">
					<button>Iniciar sesión</button>
				</div>
			</form>
		</div>
	);
};

export default LoginContainer;
