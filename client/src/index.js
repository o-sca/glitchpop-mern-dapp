import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/styles/global.css';
import { strictMode } from "./config";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

if (strictMode) {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  root.render(
    <App />
  );
}