import type { FC } from 'react';
import { Hero } from '@/components/ui/hero.tsx';
import { Cta } from '@/components/ui/cta.tsx';
import { Faq } from '@/components/ui/faq.tsx';
import { Feature } from '@/components/ui/feature.tsx';
import { Logos } from '@/components/ui/logos.tsx';

type AppProps = object;

const App: FC<AppProps> = () => {
  return (
    <div className="max-w-screen bg-background text-foreground px-10">
      <Hero />
      <Feature
        heading="Pourquoi choisir Optifit ?"
        description="Optifit simplifie la gestion de vos tournois avec une interface intuitive et des fonctionnalités puissantes."
        linkText="Je veux une démo"
        linkUrl="https://demo.optifit.app"
      />
      <Faq
        heading="Questions fréquemment posées"
        description="Vous avez des questions ? Nous avons les réponses. Découvrez notre FAQ pour en savoir plus sur notre application de gestion de tournois."
        supportHeading="Vous avez besoin d'aide ?"
        supportDescription="Nous sommes là pour toute question ou assistance."
        supportButtonText="Nous contacter"
        supportButtonUrl="mailto:support@optifit.app"
      />
      <Logos />
      <Cta
        title="Testez dès maintenant"
        subtitle={
          <>
            1er tournoi gratuit puis{' '}
            <span className="font-semibold">CHF 100.-</span> par année
          </>
        }
        description="Voyez par vous-même comment Optifit peut améliorer votre expérience de gestion de tournois."
        buttonText="Créer mon compte"
        buttonUrl="https://my.optifit.app/signin"
        items={[
          'Premier tournoi gratuit',
          'Pas de carte bancaire requise',
          'Toutes les fonctionnalités disponibles',
          'Support client réactif',
        ]}
      />
    </div>
  );
};

export default App;
