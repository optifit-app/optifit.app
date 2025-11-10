import { PageSection } from '@/components/ui/page-section';
import { PageSeparation } from '@/components/ui/page-separation';

const Terms = () => {
  return (
    <div className="lg:max-w-screen-2xl mx-auto border border-b-0 mt-15 min-h-screen rounded-t-lg">
      <PageSection className="px-0 pb-10">
        <div className="px-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Conditions générales d'utilisation
          </span>
          <h2 className="text-4xl font-bold">Avant-propos</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Bienvenue sur Optifit, une plateforme dédiée à la gestion des
            tournois sportifs. En utilisant nos services, vous acceptez les
            présentes conditions d'utilisation dans leur intégralité.
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="px-0 pb-10">
        <div className="px-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Conditions générales d'utilisation
          </span>
          <h2 className="text-4xl font-bold">Utilisation du service</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Vous vous engagez à :
            <ol className="list-decimal pl-10">
              <li>Créer un compte avec des informations exactes</li>
              <li>
                Utiliser Optifit uniquement dans le cadre de l’organisation de
                tournois sportifs légitimes
              </li>
              <li>
                Ne pas détourner la plateforme à des fins illégales,
                malveillantes ou commerciales non autorisées
              </li>
            </ol>
            <br />
            Tout abus, tentative de fraude ou comportement portant atteinte à
            l'intégrité du service peut entraîner une suspension de compte.
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="px-0 pb-10">
        <div className="px-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Conditions générales d'utilisation
          </span>
          <h2 className="text-4xl font-bold">Tournoi gratuit</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Chaque nouvel utilisateur a droit à{' '}
            <strong>un tournoi gratuit</strong>. Au-delà, l’accès aux
            fonctionnalités se fait via une tarification claire, sans engagement
            caché.
            <br />
            Nous nous réservons le droit de modifier le modèle de tarification
            avec un préavis raisonnable.
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="px-0 pb-10">
        <div className="px-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Conditions générales d'utilisation
          </span>
          <h2 className="text-4xl font-bold">Responsabilité</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Nous mettons tout en œuvre pour assurer un service fiable et
            disponible. Toutefois, Optifit ne peut être tenu responsable en cas:
            <ol className="list-decimal pl-10">
              <li>
                D’erreur de planification imputable à des données erronées
                fournies par l’utilisateur
              </li>
              <li>
                D’interruption de service indépendante de notre volonté (ex.:
                panne d’hébergement)
              </li>
            </ol>
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="px-0 pb-10">
        <div className="px-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Conditions générales d'utilisation
          </span>
          <h2 className="text-4xl font-bold">Propriété intellectuelle</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Tous les éléments de la plateforme (code, design, logo, contenus)
            sont la propriété de Optifit et ne peuvent être reproduits sans
            autorisation.
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="px-0 pb-10">
        <div className="px-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Conditions générales d'utilisation
          </span>
          <h2 className="text-4xl font-bold">Modifications des conditions</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Nous nous réservons le droit de modifier ces conditions à tout
            moment. Les utilisateurs seront informés des changements majeurs par
            e-mail ou via la plateforme. L'utilisation continue du service après
            modification vaut acceptation des nouvelles conditions.
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="px-0 pb-10 flex flex-col items-center">
        <span className="text-lg font-medium text-muted-foreground">
          Pour toute question,
        </span>
        <h1 className="text-2xl font-semibold">
          N'hésitez pas à nous contacter
        </h1>
        <a
          href="mailto:support@optifit.app"
          className="text-primary underline mt-3 text-xl"
        >
          support@optifit.app
        </a>
      </PageSection>
    </div>
  );
};

export { Terms };
