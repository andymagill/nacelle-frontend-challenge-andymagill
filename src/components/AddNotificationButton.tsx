import React from 'react';
import { useDispatch } from 'react-redux';
import { addNotification } from '../store/notificationsSlice';
import { v4 as uuidv4 } from 'uuid';

const messages = [
  'This is a notification.',
  'You have been notified.',
  'This is another notification.',
  'You have been notified again.',
  'Here is a new notification.',
];

const AddNotificationButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddNotification = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    dispatch(addNotification({ id: uuidv4(), message }));
  };

  return (
    <button
      onClick={handleAddNotification}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add Notification
    </button>
  );
};

export default AddNotificationButton;
