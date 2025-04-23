import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import Routes from './routes/Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </React.StrictMode>,
)
