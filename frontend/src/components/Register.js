import React, { useRef } from 'react';
import '../styles/register&login.css';
import { Helmet } from "react-helmet";
import Navigation from './Navigation';
import network from '../configs/axiosParams';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const username = useRef("");
    const password = useRef("");
    const name = useRef("");
    const email = useRef("");

    const formHandler = () => (event) => {
        event.preventDefault();

        (async () => {
            const data = {
                username: username.current?.value,
                password: password.current?.value,
                name: name.current?.value,
                email: email.current?.value,
            };

            const sendForm = async ({ username, password, name, email }) => {
                const response = await network.post('/users/register', {
                    username: username,
                    password: password,
                    name: name,
                    email: email,
                });
                return response;
            }

            try {
                const res = await sendForm(data);
                console.log(res);

            } catch (err) {
                console.log(err.response.data.error)
            }
        })();

    };

    return (
        <div>
            <Helmet>
                <title>S'enregistrer</title>
            </Helmet>
            <Navigation />
            <form className="formRegister" onSubmit={formHandler()}>
                <div className="container">
                    <h1 className="titleRegister">Créer un compte</h1>

                    <label htmlFor="name" className="labelInfo"><b>Prénom</b></label>
                    <input className="inputRegister"
                        ref={name}
                        type="name"
                        placeholder="Entrer votre prénom"
                        name="name"
                        id="name"
                        required
                    />

                    <label htmlFor="username" className="labelInfo"><b>Pseudonyme</b></label>
                    <input className="inputRegister"
                        ref={username}
                        type="text"
                        placeholder="Entrer votre pseudonyme"
                        name="username"
                        id="username"
                        required
                    />

                    <label htmlFor="email" className="labelInfo"><b>Email</b></label>
                    <input className="inputRegister"
                        ref={email}
                        type="text"
                        placeholder="Entrer votre email"
                        name="email"
                        id="email"
                        required
                    />

                    <label htmlFor="password" className="labelInfo"><b>Mot de passe</b></label>
                    <input className="inputRegister"
                        ref={password}
                        type="password"
                        placeholder="Entrer votre mot de passe"
                        name="password"
                        id="password"
                        required
                    />

                    <button className="buttonRegister" type="submit">S'enregistrer</button>
                </div>

                <div>
                    <p className="pAlreadyAccount">Vous avez déjà un compte ?&nbsp;
                        <NavLink to="/login" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            Connexion
                        </NavLink>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;