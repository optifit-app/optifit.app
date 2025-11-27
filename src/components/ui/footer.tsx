import icon from '@/assets/images/icon.png';
import { Instagram, Linkedin } from 'lucide-react';

const linkedin = 'https://www.linkedin.com/company/optifit-software/';
const instagram = 'https://www.instagram.com/optifit.app/';

export const Footer = () => {
  return (
    <div className="flex flex-col gap-4 lg:max-w-screen-2xl mx-auto border border-b-0 py-10 px-10 lg:px-25">
      <div className="flex items-center justify-between flex-wrap gap-5 border-b pb-5">
        <div
          className="flex items-center gap-2 select-none cursor-pointer"
          onClick={() => (window.location.href = window.location.origin)}
        >
          <img src={icon} alt="optifit icon" className="h-9 w-9" />
          <span className="text-lg font-semibold">Optifit</span>
        </div>
        <div className="flex items-center gap-5">
          <Linkedin
            className="hover:text-primary cursor-pointer"
            onClick={() => window.open(linkedin)}
          />
          <Instagram
            className="hover:text-primary cursor-pointer"
            onClick={() => window.open(instagram)}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between flex-wrap gap-5 border-b pb-5">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Nous contacter</h3>
          <a
            href="mailto:info@optifit.app"
            className="text-[15px] underline text-primary mt-2"
          >
            info@optifit.app
          </a>
          <p className="text-[15px]">
            Avenue du Léman 2<br />
            1005 Lausanne
            <br />
            Suisse
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Liens utiles</h3>
          <a
            href="/#pricing"
            className="text-[15px] hover:underline hover:text-primary mt-2"
          >
            Tarifs
          </a>
          <a
            href="/#faq"
            className="text-[15px] hover:underline hover:text-primary"
          >
            Questions fréquentes
          </a>
          <a
            href="/changelog"
            className="text-[15px] hover:underline hover:text-primary"
          >
            Changelog
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Besoin d'aide?</h3>
          <a
            href="mailto:support@optifit.app"
            className="text-[15px]  underline text-primary mt-2"
          >
            support@optifit.app
          </a>
          <a
            href="/terms"
            className="text-[15px] hover:underline hover:text-primary"
          >
            Conditions générales d'utilisation
          </a>
          <a
            href="/privacy"
            className="text-[15px] hover:underline hover:text-primary"
          >
            Politique de confidentialité
          </a>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <span className="text-sm font-medium text-muted-foreground">
          © {new Date().getFullYear()} Optifit. Tous droits réservés.
        </span>
      </div>
    </div>
  );
};
