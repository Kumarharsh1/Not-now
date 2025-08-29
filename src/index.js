import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root'); // ✅ Must match index.html

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found'); // ✅ Helpful fallback
}