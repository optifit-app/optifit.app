import type { FC } from 'react';
import { Hero } from '@/components/ui/hero.tsx';
import { Feature } from '@/components/ui/feature.tsx';
import { Faq } from '@/components/ui/faq.tsx';
import { Logos } from '@/components/ui/logos.tsx';
import { Pricing } from '@/components/ui/pricing.tsx';
import { Cta } from '@/components/ui/cta.tsx';

type HomeProps = object;

const Home: FC<HomeProps> = () => (
  <div className="max-w-screen bg-background text-foreground px-4 lg:px-10">
    <Hero />
    <Feature
      heading="Pourquoi choisir Optifit?"
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
      heading="Suivez l'évolution de Optifit"
      description="Suivez toute l'évolution de l'application en regardant notre changelog."
    />
    <Pricing />
  </div>
);

export { Home };
