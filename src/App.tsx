import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/home.tsx';
import { Privacy } from '@/pages/privacy.tsx';
import { Terms } from '@/pages/terms.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useTheme } from '@/components/providers/theme-provider.tsx';
import { Instagram, Linkedin, Moon, Sun } from 'lucide-react';
import Changelog from '@/pages/changelog.tsx';
import icon from '@/assets/images/icon.png';
import { Footer } from '@/components/ui/footer.tsx';

type AppProps = object;

const App: FC<AppProps> = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (): void =>
    setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
      </Routes>
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
              { name: 'Changelog', href: '/changelog' },
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
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-5 right-5"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
};

export default App;
