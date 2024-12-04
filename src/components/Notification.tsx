import React from 'react';
import { useDispatch } from 'react-redux';
import { removeNotification } from '../store/notificationsSlice';

interface NotificationProps {
  id: string;
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ id, message }) => {
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(removeNotification(id));
  };

  return (
    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4 relative">
      <p>{message}</p>
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-blue-700 hover:text-blue-900"
      >
        &times;
      </button>
    </div>
  );
};

export default Notification;
