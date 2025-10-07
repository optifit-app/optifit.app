import icon from '@/assets/images/icon.png';
import { useTheme } from '@/components/providers/theme-provider';
import { Button } from '@/components/ui/button';
import DarkVeil from '@/components/ui/dark-veil';
import SplitText from '@/components/ui/split-text';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

export const WinterTournaments = () => {
  const { setTheme } = useTheme();

  useEffect(() => setTheme('dark'), []);

  const handleStart = () => window.open('https://arena.optifit.app/signin');
  const handleLearnMore = () => (window.location.href = window.location.origin);

  return (
    <div className="relative h-screen overflow-hidden">
      <DarkVeil />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <img src={icon} alt="icon" className="h-20 w-20" />
        <h1 className="mt-6 text-xl font-medium text-muted-foreground">
          Organiser un tournoi prend des heures : équipes, horaire, classements…
        </h1>
        <SplitText
          text="Optifit automatise tout en quelques clics."
          className="text-5xl font-extrabold text-pretty text-center text-white mt-2"
          delay={50}
          duration={0.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className="flex items-center gap-3 flex-wrap">
          <Button
            size="lg"
            variant="outline"
            className="mt-10"
            onClick={handleLearnMore}
          >
            En savoir plus <ArrowRight />
          </Button>
          <Button size="lg" className="mt-10" onClick={handleStart}>
            Commencer maintenant <ExternalLink />
          </Button>
        </div>
      </div>
    </div>
  );
};
