import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/home.tsx';
import { Privacy } from '@/pages/privacy.tsx';
import { Terms } from '@/pages/terms.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useTheme } from '@/components/providers/theme-provider.tsx';
import { Moon, Sun } from 'lucide-react';

type AppProps = object;

const App: FC<AppProps> = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (): void => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
      </Routes>
      <Button variant="ghost" size="icon" className="fixed bottom-5 right-5" onClick={toggleTheme}>
        {theme === 'light' ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
};

export default App;
