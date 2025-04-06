import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 여기서 'App'을 기본으로 가져와야 합니다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
