import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import { Container } from './styles';

function Profile() {
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Your current password"
        />
        <Input name="password" type="password" placeholder="New password" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />

        <button type="submit">Update Profile</button>
      </Form>

      <button type="button">LogOut</button>
    </Container>
  );
}

export default Profile;
