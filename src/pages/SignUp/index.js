import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form action="">
        <input placeholder="Full name" />
        <input type="email" placeholder="E-Mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Create account</button>

        <Link to="/">Already have an account</Link>
      </form>
    </>
  );
}

export default SignUp;
