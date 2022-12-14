import React, { useContext } from 'react';
import '../styles/navigation.css';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';

const Navigation = () => {

    const { isDark, toggleTheme } = useContext(ThemeContext);
    const { user } = useContext(UserContext);

    return (

        <header className={isDark ? "navbar dark" : "navbar"}>
            <div className="navbarLeft">
                {user ? (
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <p>Calendrier</p>
                    </NavLink>
                ) : (<> </>)}

                {user?.username ? (
                    <NavLink to="/allAppointment" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <p>{user.username + " : tous mes RDV"}</p>
                    </NavLink>
                ) : (<> </>)}
            </div>
            <div className="navbarRight">
                {user?.username ? (
                    <NavLink to="/logout" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <p>Déconnexion</p>
                    </NavLink>
                ) : (
                    <NavLink to="/login" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <p>Connexion</p>
                    </NavLink>
                )}

                {user?.username ? (<> </>) : (
                    <NavLink to="/register" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <p>S'enregistrer</p>
                    </NavLink>
                )}

                <NavLink to="#" className={(nav) => (nav.isActive ? "nav-active" : "")} onClick={toggleTheme}>
                    <p>Thème</p>
                </NavLink>
            </div >
        </header >
    );
};

export default Navigation;