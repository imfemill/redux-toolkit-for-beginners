import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.jsx';
import store from './redux/store';

// Use createRoot to create a root concurrent mode instance
const root = createRoot(document.getElementById('root'));

// Use the render method to render your application inside the root
root.render(
  // Enable React Strict Mode for enhanced development checks
  <React.StrictMode >
    <Provider store={store} /* Provide the Redux store to the entire application using the Provider */>
      <App />
    </Provider>
  </React.StrictMode>
);
