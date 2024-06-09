import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Styles
import './styles/components.css';
import './styles/index.css';
import './styles/backgrounds.css';
import './styles/animations.css';
import './styles/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
