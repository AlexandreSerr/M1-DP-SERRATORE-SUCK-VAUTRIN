import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Logout = () => {
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext)

    useEffect(() => {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userUsername");
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");

        setUser(false);
        
        navigate('/login');
    }, []);

    return (
        <>
        </>
    );
};

export default Logout;