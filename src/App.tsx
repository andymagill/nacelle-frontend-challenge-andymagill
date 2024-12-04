import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import NotificationList from './components/NotificationList';
import AddNotificationButton from './components/AddNotificationButton';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Nacelle Frontend Challenge</h1>
          <p className="text-md mb-8">This is <a className="underline" href="https://magill.dev">Andrew Magill's</a> submission for the Nacelle frontend challenge. </p>
          <div className="space-x-4">
            <AddNotificationButton />
            <button
              onClick={openModal}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Open Modal
            </button>
          </div>
          <NotificationList />
          <Modal isOpen={isModalOpen} onClose={closeModal} title="Modal Challenge">
            <p>Here is some placeholder content for the modal&nbsp;challenge.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close Modal
            </button>
          </Modal>
        </div>
      </div>
    </Provider>
  );
};

export default App;

