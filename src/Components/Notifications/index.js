import React from 'react';

import { MdNotifications } from 'react-icons/md';
import {
  Container,
  Badge,
  NotificationsList,
  Scroll,
  Notification,
} from './styles';

function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>
      <NotificationsList>
        <Scroll>
          <Notification unread>
            <p>You have an appointment</p>
            <time> 2 days ago</time>
            <button>Mark as read</button>
          </Notification>
          <Notification>
            <p>You have an appointment</p>
            <time> 2 days ago</time>
            <button>Mark as read</button>
          </Notification>
          <Notification>
            <p>You have an appointment</p>
            <time> 2 days ago</time>
            <button>Mark as read</button>
          </Notification>
          <Notification>
            <p>You have an appointment</p>
            <time> 2 days ago</time>
            <button>Mark as read</button>
          </Notification>
          <Notification>
            <p>You have an appointment</p>
            <time> 2 days ago</time>
            <button>Mark as read</button>
          </Notification>
        </Scroll>
      </NotificationsList>
    </Container>
  );
}

export default Notifications;
