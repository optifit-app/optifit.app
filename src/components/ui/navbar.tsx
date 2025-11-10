import icon from '@/assets/images/icon.png';
import { Button } from './button';
import { ExternalLink, LogIn } from 'lucide-react';
import { useScroll, useMotionValueEvent } from 'motion/react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrolled(latest > 0.01); // 5% de scroll
  });

  return (
    <div
      className={cn(
        'fixed top-0 left-0 w-full flex items-center justify-between px-60 py-3 z-[999] transition-all duration-300 backdrop-blur-md',
        scrolled
          ? 'bg-background/70 border-b'
          : 'bg-transparent border-transparent',
      )}
    >
      <div className="flex items-center gap-10">
        <div
          className="flex items-center gap-2 select-none cursor-pointer"
          onClick={() => (window.location.href = window.location.origin)}
        >
          <img className="h-8 w-8" src={icon} alt="icon" />
          <span className="text-lg font-semibold">Optifit</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="/#features" className="text-sm">
            Fonctionnalités
          </a>
          <a href="/#pricing" className="text-sm">
            Tarifs
          </a>
          <a href="/#team" className="text-sm">
            Équipe
          </a>
          <a href="/#faq" className="text-sm">
            FAQ
          </a>
          <a href="/changelog" className="text-sm">
            Changelog
          </a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          className="text-sm"
          onClick={() => (window.location.href = 'https://arena.optifit.app')}
        >
          Se connecter <LogIn />
        </Button>
        <Button
          variant="default"
          size="sm"
          className="text-sm"
          onClick={() => window.open('https://arena.optifit.app/signin')}
        >
          Commencer gratuitement <ExternalLink />
        </Button>
      </div>
    </div>
  );
};
