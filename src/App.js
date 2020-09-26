import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
