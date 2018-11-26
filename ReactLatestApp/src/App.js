import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/JavaScript/login";
import Home from "./components/JavaScript/home";
import { ProtectedRoute } from "./Routes/protected.route";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <ProtectedRoute path="/home" component={Home} exact />
          <Route path="*" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
