import { createRoot } from 'react-dom/client';
import { store } from './store/index.js';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './router.js';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
);
