import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    let location = useLocation();
    if (isLoading) {
        return <CircularProgress />
    }
    if (user.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} />
};

export default PrivetRoute;