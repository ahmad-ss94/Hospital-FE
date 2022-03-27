import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         localStorage.getItem('user')
//             ? <Component {...props} />
//             : <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
//     )} />
// )

export const PrivateRoute = () => {
    const auth = null; // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
    }