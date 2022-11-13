import React, { useContext, useEffect, } from 'react';
import { Helmet } from "react-helmet";
import Navigation from './Navigation';
import CustomCalendar from './CustomCalendar';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Home = () => {

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        // Si l'utilisateur est connecté, directon la page principale
        if (!user) {
            navigate('/login');
        }
    }, [])

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Navigation />
            <CustomCalendar />

        </div>
    );
};

export default Home;