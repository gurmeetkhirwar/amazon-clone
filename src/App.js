import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./api/StateProvider";

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    const authUserFirebase = async () => {
      await auth.onAuthStateChanged(authUser => {
        console.log('this is user>>>', authUser);
        if (authUser) {
          // the user just logged in 
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          // the user is logout
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
    };

    authUserFirebase();
  }, []);

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
