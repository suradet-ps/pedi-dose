import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/tokens.css';
import './styles/base.css';
import './styles/app.css';

import ErrorBoundary from './components/ErrorBoundary';
import App from './App.jsx';

const metaThemeColor = document.querySelector('meta[name="theme-color"]');
if (metaThemeColor) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const updateThemeColor = () => {
    metaThemeColor.content = mq.matches ? '#171a20' : '#ffffff';
  };
  updateThemeColor();
  mq.addEventListener('change', updateThemeColor);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
