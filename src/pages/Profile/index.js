import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { profileUpdateRequest } from '~/store/modules/user/action';
import { signOut } from '~/store/modules/auth/actions';
import AvatarInput from './AvatarInput';

import { Container } from './styles';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    console.tron.log(data);
    dispatch(profileUpdateRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
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

      <button type="button" onClick={handleSignOut}>
        SignOut
      </button>
    </Container>
  );
}

export default Profile;
