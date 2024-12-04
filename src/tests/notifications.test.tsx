import React from 'react';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import notificationsReducer, {
  addNotification,
  removeNotification,
  NotificationsState
} from '../store/notificationsSlice';
import NotificationList from '../components/NotificationList';

// Define the root state type
interface RootState {
  notifications: NotificationsState;
}

describe('Notifications', () => {
  let store: EnhancedStore<RootState>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        notifications: notificationsReducer,
      },
    });
  });

  test('Adding notifications', () => {
    store.dispatch(addNotification({ id: '1', message: 'Test notification' }));
    const state = store.getState();
    expect(state.notifications.notifications).toHaveLength(1);
    expect(state.notifications.notifications[0]).toEqual({ id: '1', message: 'Test notification' });
  });

  test('Removing notifications', () => {
    store.dispatch(addNotification({ id: '1', message: 'Test notification' }));
    store.dispatch(removeNotification('1'));
    const state = store.getState();
    expect(state.notifications.notifications).toHaveLength(0);
  });

  test('NotificationList rendering', () => {
    store.dispatch(addNotification({ id: '1', message: 'Test notification 1' }));
    store.dispatch(addNotification({ id: '2', message: 'Test notification 2' }));

    render(
      <Provider store={store}>
        <NotificationList />
      </Provider>
    );

    expect(screen.getByText('Test notification 1')).toBeInTheDocument();
    expect(screen.getByText('Test notification 2')).toBeInTheDocument();
  });

  test('Redux store updates', () => {
    store.dispatch(addNotification({ id: '1', message: 'Test notification 1' }));
    store.dispatch(addNotification({ id: '2', message: 'Test notification 2' }));
    store.dispatch(removeNotification('1'));

    const state = store.getState();
    expect(state.notifications.notifications).toHaveLength(1);
    expect(state.notifications.notifications[0]).toEqual({ id: '2', message: 'Test notification 2' });
  });
});

