import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/login";
import Home from "./components/home";
import { ProtectedRoute } from "./components/protected.route";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <ProtectedRoute exact path="/home" component={Home} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
