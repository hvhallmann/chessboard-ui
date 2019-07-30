import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const isAuthenticated = () => {
  const token = localStorage.getItem('neide-token');
  if (!token) return false;
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
        <Component {...props} />
    ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location }
          }}
        />
    ))
    }
  />
);

export default PrivateRoute;
