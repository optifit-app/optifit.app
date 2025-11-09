import { Button } from '@/components/ui/button';
import SplitText from '../components/ui/split-text';
import icon from '@/assets/images/icon.png';
import swissFlag from '@/assets/images/swiss-flag.png';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import ScreenshotsShowcase from '../components/ui/screenshot-showcase';

import s1 from '@/assets/images/showcase/showcase-1.png';
import s2 from '@/assets/images/showcase/showcase-2.png';
import s3 from '@/assets/images/showcase/showcase-3.png';

export const WinterTournaments = () => {
  const [shinePos, setShinePos] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setShinePos((s) => !s), 1600);
    return () => clearInterval(id);
  }, []);

  const handleStart = () => window.open('https://arena.optifit.app/signin');
  const handleLearnMore = () => (window.location.href = window.location.origin);

  return (
    <div className="flex items-center justify-center flex-col min-h-[60dvh] pt-[20vh] gap-5 max-w-full">
      <img src={icon} alt="icon" className="h-12 w-12" />
      <SplitText
        text="Vos tournois, organisés en quelques clics."
        className="text-3xl md:text-5xl font-extrabold text-pretty text-center mt-2"
        delay={50}
        duration={0.15}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <h2 className="text-xl font-medium text-center">
        Créez <span className="bg-primary/30 p-1 rounded">gratuitement</span>{' '}
        votre premier tournoi — aucune carte bancaire requise.
      </h2>
      <Button
        size="lg"
        onClick={handleStart}
        className={`relative mt-5 overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90
          before:absolute before:inset-0 before:rounded-[inherit]
          before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)]
          before:bg-[length:250%_250%,100%_100%] before:bg-no-repeat
          before:transition-[background-position] before:duration-[1500ms]
          ${
            shinePos
              ? 'before:bg-[position:-100%_0,0_0]'
              : 'before:bg-[position:200%_0,0_0]'
          }
        `}
      >
        Je crée mon premier tournoi
        <ArrowRight className="ml-2" />
      </Button>
      <p className="font-medium text-muted-foreground lg:text-left mt-5">
        Développé en Suisse{' '}
        <img
          src={swissFlag}
          alt="Swiss Flag"
          className="inline h-6 w-6 align-middle"
        />
      </p>
      <Button variant="link" onClick={handleLearnMore}>
        En savoir plus
        <ArrowRight className="ml-2" />
      </Button>
      <ScreenshotsShowcase left={s1} center={s2} right={s3} />
    </div>
  );
};
