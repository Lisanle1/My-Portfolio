import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from './App';
import ThemeContextProvider from './contexts/ThemeContext';
import './index.css';

ReactDOM.render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
  document.getElementById('root')
);


