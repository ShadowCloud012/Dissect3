// index.js
// This is the entry point React uses to start the app.
// It finds the <div id="root"> in public/index.html and renders App inside it.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
