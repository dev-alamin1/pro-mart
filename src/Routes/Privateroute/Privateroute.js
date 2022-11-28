import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import Loading from '../../Pages/Shared/Loading/Loading';

const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    let location = useLocation();

    if(loading)
    {
        return <Loading/>
    }

    if(!user)
    {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default Privateroute;