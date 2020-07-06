import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationsList,
  Scroll,
  Notification,
} from './styles';

function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map((notification) => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true }
        ),
      }));

      setNotifications(data);
    }
    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>
      <NotificationsList visible={visible}>
        <Scroll>
          {notifications.map((notification) => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time> {notification.timeDistance}</time>
              <button type="button">Mark as read</button>
            </Notification>
          ))}
        </Scroll>
      </NotificationsList>
    </Container>
  );
}

export default Notifications;