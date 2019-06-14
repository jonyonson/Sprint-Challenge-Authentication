import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('jwt')) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { redirected: true },
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
