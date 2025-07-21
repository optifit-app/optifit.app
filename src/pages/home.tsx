import type { FC } from 'react';
import { Hero } from '@/components/ui/hero.tsx';
import { Feature } from '@/components/ui/feature.tsx';
import { Faq } from '@/components/ui/faq.tsx';
import { Logos } from '@/components/ui/logos.tsx';
import { Footer } from '@/components/ui/footer.tsx';
import icon from '@/assets/images/icon.png';
import { Instagram, Linkedin } from 'lucide-react';
import { Pricing } from '@/components/ui/pricing.tsx';

type HomeProps = object;

const Home: FC<HomeProps> = () => (
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
    <Pricing />
    <Footer
      logo={{
        url: 'https://www.optifit.app',
        src: icon,
        alt: 'Optifit Logo',
        title: 'Optifit',
      }}
      description="Optifit est une application de gestion de tournois sportifs, développée en Suisse. Notre objectif est de simplifier l'organisation de vos événements sportifs avec une interface intuitive et des fonctionnalités puissantes."
      copyright={`© ${new Date().getFullYear()} Optifit. Tous droits réservés.`}
      sections={[
        {
          title: 'Liens utiles',
          links: [
            { name: 'Fonctionnalités', href: '/#features' },
            { name: 'Questions fréquentes', href: '/#faq' },
            { name: 'Tarifs', href: '/#pricing' },
            { name: 'Je veux une démo', href: 'https://demo.optifit.app' },
          ],
        },
        {
          title: 'Support',
          links: [
            {
              name: "Demander de l'aide",
              href: 'mailto:support@optifit.app',
            },
            { name: 'Politique de confidentialité', href: '/privacy-policy' },
            {
              name: 'Conditions d’utilisation',
              href: '/terms-and-conditions',
            },
          ],
        },
        {
          title: 'Réseaux sociaux',
          links: [
            {
              name: 'Instagram',
              href: 'https://www.instagram.com/optifit.app/',
            },
            {
              name: 'LinkedIn',
              href: 'https://www.linkedin.com/company/optifit-software',
            },
          ],
        },
      ]}
      socialLinks={[
        {
          icon: <Instagram />,
          href: 'https://www.instagram.com/optifit.app/',
          label: 'Instagram',
        },
        {
          icon: <Linkedin />,
          href: 'https://www.linkedin.com/company/optifit-software',
          label: 'LinkedIn',
        },
      ]}
    />
  </div>
);

export { Home };
