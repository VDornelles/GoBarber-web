import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Insert a name'),
  email: Yup.string().email('Insert a valid email').required('Invalid email'),
  password: Yup.string(6, 'At least 6 characters').required(
    'Insert a password'
  ),
});

function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" placeholder="E-Mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Create account</button>

        <Link to="/">Already have an account</Link>
      </Form>
    </>
  );
}

export default SignUp;
