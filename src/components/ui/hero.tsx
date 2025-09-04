import { ArrowDown } from 'lucide-react';
import icon from '@/assets/images/icon.png';
import swissFlag from '@/assets/images/swiss-flag.png';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-32 max-w-screen h-screen">
      <div className="absolute inset-x-0 max-w-screen top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="absolute inset-x-0 top-0 flex h-full w-full max-w-screen items-center justify-center bg-gradient-to-b from-background/5 to-background/10">
        <div className="mx-auto flex w-full flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <img src={icon} alt="logo" className="h-20" />
            <div className="mx-auto">
              <h1 className="mb-6 font-bold tracking-tight text-pretty text-5xl">
                Gestion de tournois{' '}
                <span className="text-primary">simple & intuitive</span>
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                Créez vos équipes, on s'occupe de l'organisation.
                <br />
                Il ne vous reste qu’à profiter du jeu !
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <Button
                className="shadow-sm transition-shadow hover:shadow"
                onClick={() => (window.location.hash = '#pricing')}
              >
                Commencer à utiliser Optifit{' '}
                <ArrowDown className="h-4 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.hash = '#latest-changes')}
              >
                En savoir plus{' '}
                <ArrowDown className="h-4 transition-transform" />
              </Button>
            </div>
            <div className="mt-17 flex flex-col items-center gap-5">
              <p className="font-medium text-muted-foreground lg:text-left">
                Développé en Suisse{' '}
                <img
                  src={swissFlag}
                  alt="Swiss Flag"
                  className="inline h-6 w-6 align-middle"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
