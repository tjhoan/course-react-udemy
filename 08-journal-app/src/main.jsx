import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { JournalApp } from './JournalApp';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <JournalApp />
    </BrowserRouter>
  </StrictMode>
);
