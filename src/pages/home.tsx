import { useChangelog } from '@/components/providers/changelog.provider.tsx';
import { LatestChanges } from '@/components/ui/latest-changes.tsx';
import { Testimonials } from '@/components/ui/testimonials';
import { Feature } from '@/components/ui/feature.tsx';
import { Hero } from '@/components/ui/hero.tsx';
import { Logos } from '@/components/ui/logos.tsx';
import { Pricing } from '@/components/ui/pricing.tsx';
import { Team } from '@/components/ui/team';
import type { FC } from 'react';

import gabriel from '@/assets/images/team/gab.png';
import farhdine from '@/assets/images/team/farhdine.png';
import jose from '@/assets/images/team/jose.png';
import thomas from '@/assets/images/team/thomas.png';
import dmytro from '@/assets/images/team/dmytro.png';

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
      <Team
        members={[
          {
            id: '1',
            name: 'Gabriel',
            role: 'CEO, Tech lead',
            avatar: gabriel,
            linkedin: 'https://www.linkedin.com/in/gabriel-dovat-7a7830231/',
          },
          {
            id: '2',
            name: 'Farhdine',
            role: 'Advisor',
            avatar: farhdine,
            linkedin: 'https://www.linkedin.com/in/farhdine/',
          },
          {
            id: '3',
            name: 'José',
            role: 'Développeur',
            avatar: jose,
            linkedin: 'https://www.linkedin.com/in/jos%C3%A9-gomes-865b2b31a/',
          },
          {
            id: '4',
            name: 'Thomas',
            role: 'Développeur',
            avatar: thomas,
            linkedin:
              'https://www.linkedin.com/in/thomas-burkhalter-71645a2b0/',
          },
          {
            id: '5',
            name: 'Dmytro',
            role: 'UI/UX Designer',
            avatar: dmytro,
            linkedin:
              'https://www.linkedin.com/in/dmytro-beznoskovych-525111306/',
          },
        ]}
      />
      <Logos />
      <Testimonials
        references={[
          {
            name: 'François Eichenberger',
            subtitle: "Organisateur de tournois à l'AS Haute-Broye",
            quote:
              "Optifit est un super outil pour l'organisation de tournois ! L’application est simple, efficace et fait gagner un temps précieux. Le support est hyper réactif et à l’écoute des suggestions d’amélioration.",
            picture:
              'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
          },
        ]}
      />
      <Pricing />
    </div>
  );
};

export { Home };
