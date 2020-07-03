import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string().email().required('Invalid email'),
  password: Yup.string().required('Insert a password'),
});

function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} sonSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-Mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Sign In</button>

        <Link to="/register">Create a free account</Link>
      </Form>
    </>
  );
}

export default SignIn;
