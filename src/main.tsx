import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/components/providers/theme-provider.tsx';
import MonitorWrapper from '@/components/common/monitor-wrapper.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light">
        <MonitorWrapper>
          <App />
        </MonitorWrapper>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
