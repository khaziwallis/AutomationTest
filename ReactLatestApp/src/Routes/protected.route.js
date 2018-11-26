import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../components/JavaScript/auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          if (!token) {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          } else {
            return <Component {...props} />;
          }
        }
      }}
    />
  );
};
