import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 타입 단언
// ts 컴파일러가 null,
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
