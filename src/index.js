// index.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StubIconPage from './components/StubIconPage'; // Import the StubIconPage component

import reportWebVitals from './reportWebVitals';

const Index = () => {
  const [showStubIconPage, setShowStubIconPage] = useState(true);

  const handleLogoClick = () => {
    setShowStubIconPage(false);
  };

  return (
    <React.StrictMode>
      {showStubIconPage ? (
        <StubIconPage onLogoClick={handleLogoClick} />
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
};

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
