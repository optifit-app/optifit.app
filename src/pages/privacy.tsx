import icon from '@/assets/images/icon.png';
import { Button } from '@/components/ui/button.tsx';
import { ArrowLeft, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@/components/ui/footer.tsx';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="pt-14 pb-25 bg-background text-foreground">
        <div className="container mx-auto lg:max-w-[60%] max-w-[90%]">
          <div className="md:col-span-7 md:col-start-5 lg:col-start-6">
            <article className="prose dark:prose-invert prose-sm">
              <Button
                variant="link"
                className="mb-5"
                onClick={() => navigate('/')}
              >
                <ArrowLeft />
                Retour
              </Button>
              <img src={icon} alt="Optifit Logo" className="mb-5 h-15" />
              <h1 className="text-2xl font-bold">
                Politique de confidentialité
              </h1>
              <p className="mt-5 text-justify">
                Chez Optifit, la protection de vos données personnelles est une
                priorité. Nous nous engageons à collecter, traiter et stocker
                vos informations de manière transparente, sécurisée et conforme
                à la législation en vigueur, notamment le RGPD.
              </p>
              <h2 className="mt-5 text-xl font-medium">Données collectées</h2>
              <p className="mt-1 text-justify">
                Lorsque vous créez un compte ou utilisez l'application, nous
                pouvons collecter les données suivantes:
              </p>
              <ul className="mt-2 list-disc pl-5">
                <li>Informations de compte : nom, prénom, adresse e-mail</li>
                <li>
                  Informations liées à l’organisation des tournois: noms
                  d’équipes, matchs, résultats
                </li>
                <li>
                  Données techniques : adresse IP, type de navigateur, logs
                  d’erreurs
                </li>
              </ul>
              <h2 className="mt-5 text-xl font-medium">
                Utilisation des données
              </h2>
              <p className="mt-1">
                Les données que vous fournissez sont utilisées pour :
              </p>
              <ul className="mt-2 list-disc pl-5">
                <li>Créer et gérer votre compte utilisateur</li>
                <li>
                  Générer automatiquement les matchs, phases et classements
                </li>
                <li>
                  Améliorer la qualité du service (analyse de bugs, feedbacks)
                </li>
              </ul>
              <p className="mt-2 text-justify">
                Nous ne vendons jamais vos données à des tiers. Certains
                services techniques peuvent être sous-traités (ex.: hébergement,
                analyse d’usage), mais toujours dans un cadre sécurisé et
                encadré par des contrats.
              </p>
              <h2 className="text-xl font-medium mt-5">Stockage et sécurité</h2>
              <p className="mt-1 text-justify">
                Vos données sont hébergées sur des serveurs sécurisés et
                protégées par des mesures techniques (cryptage, authentification
                forte) et organisationnelles.
              </p>
              <h2 className="mt-5 text-xl font-medium">Vos droits</h2>
              <p className="mt-1">
                Conformément au RGPD, vous pouvez à tout moment :
              </p>
              <ul className="mt-2 list-disc pl-5">
                <li>Accéder à vos données personnelles</li>
                <li>Demander leur rectification ou suppression</li>
                <li>Retirer votre consentement</li>
                <li>
                  Contacter notre support pour toute question liée à la vie
                  privée
                </li>
              </ul>
              <p className="mt-5">
                Pour exercer vos droits, écrivez-nous à :{' '}
                <a
                  href="mailto:support@optifit.app"
                  className="text-primary underline"
                >
                  support@optifit.app
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>
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
              { name: 'Fonctionnalités', href: '#features' },
              { name: 'Questions fréquentes', href: '#faq' },
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
    </>
  );
};

export { Privacy };
