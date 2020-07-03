import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form action="">
        <input type="email" placeholder="E-Mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>

        <Link to="/register">Create a free account</Link>
      </form>
    </>
  );
}

export default SignIn;
