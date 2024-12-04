import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import Notification from './Notification';
import { loadNotifications } from '../store/notificationsSlice';

const NotificationList: React.FC = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notifications.notifications);

  useEffect(() => {
    dispatch(loadNotifications());
  }, [dispatch]);

  return (
    <div className="fixed top-4 right-4 w-80">
      {notifications.map((notification) => (
        <Notification key={notification.id} id={notification.id} message={notification.message} />
      ))}
    </div>
  );
};

export default NotificationList;

