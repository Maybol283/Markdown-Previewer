import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/prism.css';

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

