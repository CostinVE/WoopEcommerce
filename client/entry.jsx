// entry.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css'; // Import App.css styles
import { Provider as StoreProvider } from 'react-redux';
import store from './Redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <StoreProvider store={store}>
       <App />
  </StoreProvider>
  </React.StrictMode>
);
