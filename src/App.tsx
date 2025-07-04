import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/home.tsx';
import { Privacy } from '@/pages/privacy.tsx';
import { Terms } from '@/pages/terms.tsx';

type AppProps = object;

const App: FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
    </Routes>
  );
};

export default App;
