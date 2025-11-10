import { useTheme } from '@/components/providers/theme-provider.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Footer } from '@/components/ui/footer.tsx';
import { Home } from '@/pages/home.tsx';
import { Privacy } from '@/pages/privacy.tsx';
import { Terms } from '@/pages/terms.tsx';
import { Moon, Sun } from 'lucide-react';
import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/not-found';
import { WinterTournaments } from './pages/winter-tournaments';

type AppProps = object;

const App: FC<AppProps> = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (): void =>
    setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/winter-tournaments" element={<WinterTournaments />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-5 right-5"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
};

export default App;
