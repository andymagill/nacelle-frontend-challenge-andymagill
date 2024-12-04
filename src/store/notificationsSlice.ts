
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Notification {
  id: string;
  message: string;
}

export interface NotificationsState {
  notifications: Notification[];
}

const loadNotificationsFromStorage = (): Notification[] => {
  const storedNotifications = localStorage.getItem('notifications');
  return storedNotifications ? JSON.parse(storedNotifications) : [];
};

const saveNotificationsToStorage = (notifications: Notification[]) => {
  localStorage.setItem('notifications', JSON.stringify(notifications));
};

const initialState: NotificationsState = {
  notifications: loadNotificationsFromStorage(),
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
      saveNotificationsToStorage(state.notifications);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
      saveNotificationsToStorage(state.notifications);
    },
    loadNotifications: (state) => {
      state.notifications = loadNotificationsFromStorage();
    },
  },
});

export const { addNotification, removeNotification, loadNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;
