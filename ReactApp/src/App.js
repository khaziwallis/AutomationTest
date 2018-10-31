import React from "react";
import { BrowzerRouter, Route, Switch } from "react-router-dom";
import Error from "./components/error";
import Home from "./components/home";
import LoginPage from "./components/login";

//import reactLogo from './favicon.ico';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginPage} exact />
      <Route path="/home" component={Home} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default App;
