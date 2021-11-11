import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Redirect, Route } from 'react-router';
import { CircularProgress } from '@mui/material';
const PrivateRoute = ({ children, ...rest }) => {
    const { user,isLoading } = useAuth();
    if(isLoading){
        return <CircularProgress></CircularProgress>
    }
    return (
        <Route
        {...rest}

        render={({ location }) => user.email ? children : <Redirect

            to={{
                pathname: "/login",
                state: { from: location }
            }}

        ></Redirect>}

    >

    </Route>
    );
};

export default PrivateRoute;