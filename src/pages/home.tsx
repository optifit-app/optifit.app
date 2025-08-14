import type { FC } from 'react';
import { Hero } from '@/components/ui/hero.tsx';
import { Feature } from '@/components/ui/feature.tsx';
import { Faq } from '@/components/ui/faq.tsx';
import { Logos } from '@/components/ui/logos.tsx';
import { Pricing } from '@/components/ui/pricing.tsx';
import { useChangelog } from '@/components/providers/changelog.provider.tsx';
import { LatestChanges } from '@/components/ui/latest-changes.tsx';

type HomeProps = object;

const Home: FC<HomeProps> = () => {
  const { entries } = useChangelog();

  return (
    <div className="max-w-screen bg-body-background text-foreground px-4 lg:px-10">
      <Hero />
      <LatestChanges
        heading="Dernières mises à jour"
        description="Suivez les dernières mises à jour de la plateforme"
        change1={{
          title: entries[0]?.title,
          date: entries[0]?.date,
          description: entries[0]?.description,
          image: entries[0]?.image,
        }}
        change2={{
          title: entries[1]?.title,
          date: entries[0]?.date,
          description: entries[1]?.description,
          image: entries[1]?.image,
        }}
        change3={{
          title: entries[2]?.title,
          date: entries[0]?.date,
          description: entries[2]?.description,
          image: entries[2]?.image,
        }}
        change4={{
          title: entries[3]?.title,
          date: entries[0]?.date,
          description: entries[3]?.description,
          image: entries[3]?.image,
        }}
        loading={!entries.length}
      />
      <Feature
        heading="Fonctionnalités clés"
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
      <Pricing />
    </div>
  );
};

export { Home };
