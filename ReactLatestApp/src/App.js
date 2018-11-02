import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import decode from "jwt-decode";
import LoginPage from "./components/login";
import Home from "./components/home";
import Error from "./components/error";

// const checkAuth = () => {
//   const token = localStorage.getItem("token");
//   const refreshToken = localStorage.getItem("refreshToken");
//   if (!token || !refreshToken) {
//     return false;
//   }
//   try {
//     const { exp } = decode(refreshToken);
//     if (exp < new Date().getTime() / 1000) {
//       return false;
//     }
//   } catch (e) {
//     return false;
//   }

//   return true;
// };

// const AuthRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       checkAuth() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/" }} />
//       )
//     }
//   />
// );

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/home" component={Home} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
