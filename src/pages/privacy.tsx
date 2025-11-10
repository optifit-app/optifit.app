import { PageSection } from '@/components/ui/page-section';
import { PageSeparation } from '@/components/ui/page-separation';

const Privacy = () => {
  return (
    <div className="lg:max-w-screen-2xl mx-auto border border-b-0 mt-15 min-h-screen rounded-t-lg">
      <PageSection className="px-0 pb-10">
        <div className="px-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Politique de confidentialité
          </span>
          <h2 className="text-4xl font-bold">Avant-propos</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Chez Optifit, la protection de vos données personnelles est une
            priorité. Nous nous engageons à collecter, traiter et stocker vos
            informations de manière transparente, sécurisée et conforme à la
            législation en vigueur, notamment le RGPD.
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="px-0 pb-10">
        <div className="px-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Politique de confidentialité
          </span>
          <h2 className="text-4xl font-bold">Données collectées</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Lorsque vous créez un compte ou utilisez l'application, nous pouvons
            collecter les données suivantes:
            <ol className="list-decimal pl-10">
              <li>Informations de compte : nom, prénom, adresse e-mail</li>
              <li>
                Informations liées à l’organisation des tournois: noms
                d’équipes, matchs, résultats
              </li>
              <li>
                Données techniques : adresse IP, type de navigateur, logs
                d’erreurs
              </li>
            </ol>
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="px-0 pb-10">
        <div className="px-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Politique de confidentialité
          </span>
          <h2 className="text-4xl font-bold">Utilisation des données</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Les données que vous fournissez sont utilisées pour :
            <ol className="list-decimal pl-10">
              <li>Créer et gérer votre compte utilisateur</li>
              <li>Générer automatiquement les matchs, phases et classements</li>
              <li>
                Améliorer la qualité du service (analyse de bugs, feedbacks)
              </li>
            </ol>
            <br />
            Nous ne vendons jamais vos données à des tiers. Certains services
            techniques peuvent être sous-traités (ex.: hébergement, analyse
            d’usage), mais toujours dans un cadre sécurisé et encadré par des
            contrats.
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="px-0 pb-10">
        <div className="px-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Politique de confidentialité
          </span>
          <h2 className="text-4xl font-bold">Stockage et sécurité</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Vos données sont hébergées sur des serveurs sécurisés et protégées
            par des mesures techniques (cryptage, authentification forte) et
            organisationnelles.
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="px-0 pb-10">
        <div className="px-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Politique de confidentialité
          </span>
          <h2 className="text-4xl font-bold">Vos droits</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Conformément au RGPD, vous pouvez à tout moment :
            <ol className="list-decimal pl-10">
              <li>Accéder à vos données personnelles</li>
              <li>Demander leur rectification ou suppression</li>
              <li>Retirer votre consentement</li>
              <li>
                Contacter notre support pour toute question liée à la vie privée
              </li>
            </ol>
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="px-0 pb-10 flex flex-col items-center">
        <span className="text-lg font-medium text-muted-foreground">
          Pour exercer vos droits ou pour toute question,
        </span>
        <h1 className="text-2xl font-semibold">Contactez-nous à</h1>
        <a
          href="mailto:privacy@optifit.app"
          className="text-primary underline mt-3 text-xl"
        >
          privacy@optifit.app
        </a>
      </PageSection>
    </div>
  );
};

export { Privacy };
