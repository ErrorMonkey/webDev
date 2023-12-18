import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 타입 단언
// ts 컴파일러가 null, undefined가 가능하다고 해석해서,
// 우리는 #root가 존재한다고 단언할 수 있는 상황
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
