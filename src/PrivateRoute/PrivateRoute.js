import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email?
                children :
                <Redirect
                    to={{
                        pathname:'/logIn',
                        state: { from: location }

                }}
                />
        }
        >
            
        </Route>
    );
};

export default PrivateRoute;