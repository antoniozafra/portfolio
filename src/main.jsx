import { createRoot } from 'react-dom/client';
import './assets/styles/styles.css'
import './assets/styles/media-queries.css'
import { StrictMode } from 'react';
import App from './App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App  />
  </StrictMode>,
);
