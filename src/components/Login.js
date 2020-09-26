import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../static/css/Login.css";

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (event) => {
    event.preventDefault();
  }

  const register = (event) => {
    event.preventDefault()
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="login__logo"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={event=>setEmail(event.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={event=>setPassword(event.target.value)} />
          <button type='submit' className="login__signInButton" onSubmit={signIn}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
