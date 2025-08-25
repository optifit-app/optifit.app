import icon from '@/assets/images/icon.png';
import { Button } from '@/components/ui/button.tsx';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="pt-14 pb-25 text-foreground">
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
              <h1 className="text-2xl font-bold">Conditions d'utilisation</h1>
              <p className="mt-5 text-justify">
                Bienvenue sur Optifit, une plateforme dédiée à la gestion des
                tournois sportifs. En utilisant nos services, vous acceptez les
                présentes conditions d'utilisation dans leur intégralité.
              </p>
              <h2 className="mt-5 text-xl font-medium">
                Utilisation du service
              </h2>
              <p className="mt-1 text-justify">Vous vous engagez à :</p>
              <ul className="mt-2 list-disc pl-5">
                <li>Créer un compte avec des informations exactes</li>
                <li>
                  Utiliser Optifit uniquement dans le cadre de l’organisation de
                  tournois sportifs légitimes
                </li>
                <li>
                  Ne pas détourner la plateforme à des fins illégales,
                  malveillantes ou commerciales non autorisées
                </li>
              </ul>
              <p className="text-justify mt-3">
                Tout abus, tentative de fraude ou comportement portant atteinte
                à l'intégrité du service peut entraîner une suspension de
                compte.
              </p>
              <h2 className="mt-5 text-xl font-medium">Tournoi gratuit</h2>
              <p className="mt-1">
                Chaque nouvel utilisateur a droit à{' '}
                <span className="font-medium">un tournoi gratuit</span>.
                Au-delà, l’accès aux fonctionnalités se fait via une
                tarification claire, sans engagement caché. Nous nous réservons
                le droit de modifier le modèle de tarification avec un préavis
                raisonnable.
              </p>
              <h2 className="text-xl font-medium mt-5">Responsabilité</h2>
              <p className="mt-1 text-justify">
                Nous mettons tout en œuvre pour assurer un service fiable et
                disponible. Toutefois, Optifit ne peut être tenu responsable en
                cas:
              </p>
              <ul className="mt-2 list-disc pl-5">
                <li>
                  D’erreur de planification imputable à des données erronées
                  fournies par l’utilisateur
                </li>
                <li>
                  D’interruption de service indépendante de notre volonté (ex.:
                  panne d’hébergement)
                </li>
              </ul>
              <h2 className="mt-5 text-xl font-medium">
                Propriété intellectuelle
              </h2>
              <p className="mt-1">
                Tous les éléments de la plateforme (code, design, logo,
                contenus) sont la propriété de Optifit et ne peuvent être
                reproduits sans autorisation.
              </p>
              <h2 className="mt-5 text-xl font-medium">
                Modifications des conditions
              </h2>
              <p className="mt-1">
                Nous nous réservons le droit de modifier ces conditions à tout
                moment. Les utilisateurs seront informés des changements majeurs
                par e-mail ou via la plateforme. L'utilisation continue du
                service après modification vaut acceptation des nouvelles
                conditions.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export { Terms };
