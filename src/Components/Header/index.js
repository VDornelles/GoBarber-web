import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Notifications from '~/Components/Notifications';
import logo from '~/assets/logo-purple.svg';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile, Options } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <span>
                <Link to="/profile">My profile</Link>
                <Link onClick={handleSignOut}>Sign Out</Link>
              </span>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/60/abott@adorable.png'
              }
              alt="Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
