import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
  document.getElementById('root')
);
