import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import Routes from './routes/Routes.tsx';
import Modal from './components/modal/index.tsx';

// ✅ Restore redirected path from GitHub Pages
const redirectPath = new URLSearchParams(window.location.search).get('redirect');
if (redirectPath) {
  window.history.replaceState(null, '', redirectPath);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Modal />
      <Routes />
    </ErrorBoundary>
  </React.StrictMode>
);
