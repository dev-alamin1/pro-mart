import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    let location = useLocation();

    if(loading)
    {
        return <progress className="progress w-full"></progress>
    }

    if(!user)
    {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default Privateroute;