import type { FC } from 'react';
import icon from '@/assets/images/icon.png';
import { Button } from '@/components/ui/button.tsx';
import { useTheme } from '@/components/providers/ThemeProvider.tsx';
import { Moon, Sun } from 'lucide-react';

type NavbarProps = object;

const Navbar: FC<NavbarProps> = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute top-0 left-0 w-screen py-3 px-40 flex items-center justify-between">
      <img className="h-10 w-10" src={icon} alt="icon" />
      <div className="flex items-center justify-center gap-2 flex-wrap md:gap-4">
        <Button variant="default" className="text-lg">
          Connexion
        </Button>
        <Button
          variant="ghost"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
