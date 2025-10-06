import DarkVeil from '@/components/ui/dark-veil';
import SplitText from '@/components/ui/split-text';
import icon from '@/assets/images/icon.png';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '@/components/providers/theme-provider';
import { useEffect } from 'react';

export const WinterTournaments = () => {
  const { setTheme } = useTheme();

  useEffect(() => setTheme('dark'), []);

  const handleClick = () => window.open('https://arena.optifit.app/signin');

  return (
    <div className="relative h-screen overflow-hidden">
      <DarkVeil />
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-center z-10 px-4">
        <img src={icon} alt="icon" className="h-20 w-20" />
        <SplitText
          text="Simplifiez votre prochain tournoi"
          className="text-5xl font-bold text-center text-white"
          delay={25}
          duration={0.1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <p className="mt-3 text-lg md:text-xl text-white/80">
          Planifiez. Gérez. Suivez les résultats en live.
        </p>
        <Button size="lg" className="mt-5" onClick={handleClick}>
          Commencer gratuitement <ExternalLink />
        </Button>
      </div>
    </div>
  );
};
