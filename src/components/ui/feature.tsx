import { ArrowRight } from 'lucide-react';

import feature1 from '@/assets/images/feature-1.png';
import feature2 from '@/assets/images/feature-2.png';
import feature3 from '@/assets/images/feature-3.png';
import feature4 from '@/assets/images/feature-4.png';
import feature5 from '@/assets/images/feature-5.png';
import feature6 from '@/assets/images/feature-6.png';
import { useTheme } from '@/components/providers/theme-provider.tsx';
import { cn } from '@/lib/utils.ts';
import { Button } from './button';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface FeatureProps {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

const Feature = ({
  heading = 'Powerful Features',
  description = 'Discover the powerful features that make our platform stand out from the rest. Built with the latest technology and designed for maximum productivity.',
  linkUrl = 'https://www.shadcnblocks.com',
  linkText = 'Book a demo',
  features = [
    {
      id: 'feature-1',
      title: 'Création/importation de vos équipes en quelques clics',
      description:
        'Ajoutez manuellement chaque équipe avec une interface fluide ou importez un fichier Excel pré-rempli. Gagnez du temps et restez organisé!',
      image: feature1,
    },
    {
      id: 'feature-2',
      title: 'Génération intelligente des matchs',
      description:
        'Organisez vos rencontres en quelques secondes grâce à notre algorithme de génération automatique. Plus besoin de galérer avec des tableaux Excel!',
      image: feature2,
    },
    {
      id: 'feature-3',
      title: 'Partage instantané des résultats',
      description:
        'Offrez à vos participants, spectateurs ou parents un accès en temps réel au classement et aux scores du tournoi via un lien ou un Qr-Code.',
      image: feature3,
    },
    {
      id: 'feature-3',
      title: 'Gérez les pauses à votre rythme\n',
      description:
        'Planifiez facilement des pauses entre les matchs pour midi, reposer les équipes ou gérer des imprévus.',
      image: feature4,
    },
    {
      id: 'feature-3',
      title: 'Personnalisez votre tournoi avec votre logo',
      description:
        'Affichez fièrement l’identité de votre club ou de votre événement en ajoutant votre propre icône ou logo à votre tournoi.',
      image: feature5,
    },
    {
      id: 'feature-3',
      title: 'Collaborez avec votre staff en toute simplicité',
      description:
        "Donnez un accès sécurisé à d'autres personnes pour vous aider à gérer le tournoi, notamment la saisie des scores ou la supervision des matchs.",
      image: feature6,
    },
  ],
}: FeatureProps) => {
  const { theme } = useTheme();

  return (
    <section className="py-32" id="features">
      <div className="container mx-auto flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-4xl">
          <h2 className="mb-3 text-4xl md:mb-4 font-bold text-pretty lg:mb-6">
            {heading}
          </h2>
          <p className="text-muted-foreground mb-8 lg:text-lg">{description}</p>
          <Button
            variant="link"
            onClick={() => (window.location.href = linkUrl)}
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border-border flex flex-col overflow-clip rounded-xl border shadow bg-card"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={cn(
                    'aspect-16/9 w-full object-cover object-center h-30',
                    theme === 'dark' && 'opacity-55',
                  )}
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 font-bold md:mb-4 text-3xl lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature };
