import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PageSection } from '@/components/ui/page-section';
import { PageSeparation } from '@/components/ui/page-separation';
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import { useCurrency } from '@/hooks/use-currency';
import { cn } from '@/lib/utils';
import { customers } from '@/optifit';
import type { Product } from '@/types/pricing';
import { ArrowDown, Check, ExternalLink } from 'lucide-react';
import { type FC, useState, useEffect } from 'react';

import ranking from '@/assets/images/feature-3.png';
import icon from '@/assets/images/icon.png';
import teamsFeature from '@/assets/images/feature-1.png';
import matchesFeature from '@/assets/images/feature-2.png';
import rankingFeature from '@/assets/images/feature-4.png';
import socraftLight from '@/assets/images/logos/socraft-light.svg';
import socraft from '@/assets/images/logos/socraft.svg';
import swissFlag from '@/assets/images/swiss-flag.png';
import dmytro from '@/assets/images/team/dmytro.png';
import farhdine from '@/assets/images/team/farhdine.png';
import gabriel from '@/assets/images/team/gab.png';
import jose from '@/assets/images/team/jose.png';
import thomas from '@/assets/images/team/thomas.png';
import testimonial from '@/assets/images/testimonial-illustration.png';
import { useTheme } from '@/components/providers/theme-provider';
import { Faq } from '@/components/ui/faq';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type HomeProps = object;

const teamMembers = [
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
    name: 'Dmytro',
    role: 'Designer',
    avatar: dmytro,
    linkedin: 'https://www.linkedin.com/in/dmytro-beznoskovych-525111306/',
  },
  {
    id: '4',
    name: 'José',
    role: 'Développeur',
    avatar: jose,
    linkedin: 'https://www.linkedin.com/in/jos%C3%A9-gomes-865b2b31a/',
  },
  {
    id: '5',
    name: 'Thomas',
    role: 'Développeur',
    avatar: thomas,
    linkedin: 'https://www.linkedin.com/in/thomas-burkhalter-71645a2b0/',
  },
];

const Home: FC<HomeProps> = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [amount, setAmount] = useState<number>(100);

  const { currency, setCurrency, availableCurrencies, format } =
    useCurrency(product);
  const { theme } = useTheme();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.querySelector(hash);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, []);

  useEffect(() => {
    const initProduct = async (): Promise<void> => {
      const response = await fetch(
        'https://api.arena.optifit.app/public/pricing',
      );
      const result = await response.json();

      setProduct(result.products[0]);
    };

    void initProduct();
  }, []);

  useEffect(() => {
    const price = product?.prices.find(
      (price: any) => price.currency === currency.toLowerCase(),
    );

    setAmount((price?.amount ?? 10000) / 100);
  }, [currency, product]);

  const handleStart = () => {
    (window as any).gtag('event', 'begin_signup', {
      method: 'auth0',
    });
    window.open('https://arena.optifit.app/signin');
  };

  return (
    <div className="lg:max-w-screen-2xl mx-auto border border-b-0 mt-15 min-h-screen rounded-t-lg">
      <PageSection className="pt-10 lg:pt-20 pl-10 xl:pl-20">
        <div className="flex flex-col xl:flex-row items-center gap-10 relative pb-20">
          <div className="flex flex-col gap-2 xl:flex-2/3 pr-20 xl:pr-0">
            <img className="h-12 w-12 mb-2" alt="Optifit Icon" src={icon} />
            <span className="text-md uppercase font-medium text-muted-foreground">
              Gestion de tournois simple & intuitive
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold">
              Il ne vous reste plus qu'à profiter du jeu.
            </h2>
            <h3 className="text-xl">
              Créez vos équipes, on s'occupe de l'organisation.
            </h3>
            <div className="flex items-center gap-2 flex-wrap mt-5">
              <Button variant="default" size="lg" onClick={handleStart}>
                Commencer gratuitement
                <ExternalLink />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.hash = '#references')}
              >
                En savoir plus
                <ArrowDown />
              </Button>
            </div>
            <Badge
              className="mt-6 flex items-center gap-2 font-medium bg-background"
              variant="outline"
            >
              Développé en Suisse
              <img className="h-5" src={swissFlag} alt="Swiss flag" />
            </Badge>
            <span className="text-muted-foreground mt-2">
              Premier tournoi gratuit, pas de carte bancaire requise.
            </span>
          </div>
          <img
            className="hidden lg:block h-80 xl:h-110 xl:flex-1/3 dark:opacity-50 absolute bottom-0 right-0 xl:static"
            src={ranking}
            alt="Ranking"
          />
        </div>
      </PageSection>
      <PageSeparation id="references" />
      <PageSection className="pl-0 pt-15 pb-20">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-center px-10">
            Ils ont déjà utilisé <span className="text-primary">Optifit</span>
          </h2>
          <Marquee className="mt-15">
            <MarqueeContent>
              {customers.map((customer, key) => (
                <MarqueeItem key={key}>
                  <img
                    src={customer}
                    alt="customer-logo"
                    className="h-15 lg:h-25 px-8 w-auto filter drop-shadow"
                  />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="py-20 px-10 lg:px-20">
        <p className="text-xl lg:text-3xl font-medium text-pretty">
          Optifit est une application de gestion de tournois sportifs,{' '}
          <span className="text-primary">développée en Suisse</span>. Notre
          objectif est de <span className="text-primary">simplifier</span>{' '}
          l'organisation de vos événements sportifs avec une{' '}
          <span className="text-primary">interface intuitive</span> et des{' '}
          <span className="text-primary">fonctionnalités puissantes</span>.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-10"
          onClick={handleStart}
        >
          Commencer gratuitement <ExternalLink />
        </Button>
      </PageSection>
      <PageSeparation id="features" />
      <PageSection className="pt-10 px-0">
        <div className="px-10 lg:pl-20 mb-10">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Fonctionnalités clés
          </span>
          <h2 className="text-4xl font-bold">Comment ça marche</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-stretch border-t border-b px-2 lg:px-0">
          <div className="flex flex-col items-center lg:items-start pt-10 lg:border-r flex-1/3 transition-all duration-150 hover:bg-foreground/1">
            <div className="pr-5 lg:pl-10">
              <h3 className="text-3xl font-semibold text-pretty text-center lg:text-left">
                Gérez <span className="text-primary">facilement</span> vos
                équipes.
              </h3>
              <p className="mt-2 text-muted-foreground text-center lg:text-left">
                Créez ou importez-les en un clic et commencez votre tournoi plus
                vite.
              </p>
            </div>
            <img
              className="w-[98%] mx-10 lg:mx-auto mt-5 lg:mt-8 dark:opacity-50 border border-b-0 rounded-t-lg"
              src={teamsFeature}
              alt="teams feature"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start pt-10 lg:border-r flex-1/3 transition-all duration-150 hover:bg-foreground/1">
            <div className="pr-5 lg:pl-10">
              <h3 className="text-3xl font-semibold text-pretty text-center lg:text-left">
                Planning du tournoi{' '}
                <span className="text-primary">optimisé</span>.
              </h3>
              <p className="mt-2 text-muted-foreground text-center lg:text-left">
                Génération faite pour un rythme équilibré entre les équipes.
              </p>
            </div>
            <img
              className="w-[98%] mx-10 lg:mx-auto mt-5 lg:mt-8 dark:opacity-50 border border-b-0 rounded-t-lg"
              src={matchesFeature}
              alt="matches feature"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start pt-10 flex-1/3 transition-all duration-150 hover:bg-foreground/1">
            <div className="pr-5 lg:pl-10">
              <h3 className="text-3xl font-semibold text-pretty text-center lg:text-left">
                Consultez et partagez les résultats en{' '}
                <span className="text-primary">live</span>.
              </h3>
              <p className="mt-2 text-muted-foreground text-center lg:text-left">
                Classements et scores mis à jour instantanément pour tous.
              </p>
            </div>
            <img
              className="w-[98%] mx-10 lg:mx-auto mt-5 lg:mt-8 dark:opacity-50 border border-b-0 rounded-t-lg"
              src={rankingFeature}
              alt="ranking feature"
            />
          </div>
        </div>
        <div className="flex flex-col items-center py-10 px-10">
          <h2 className="text-2xl font-medium text-center">
            Créez votre premier tournoi{' '}
            <span className="text-primary">gratuit</span>
          </h2>
          <span className="text-muted-foreground text-center">
            pas de carte bancaire requise
          </span>
          <Button
            variant="default"
            size="lg"
            className="mt-5"
            onClick={handleStart}
          >
            Commencer gratuitement <ExternalLink />
          </Button>
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="py-0 pb-10 xl:pb-0">
        <div className="flex items-center gap-10">
          <div className="flex flex-col px-5 lg:pl-10 lg:pl-20">
            <p className="text-2xl italic font-medium py-10 pr-10 text-pretty">
              “Optifit est un super outil pour l'organisation de tournois !
              L’application est simple, efficace et fait gagner un temps
              précieux. Le support est hyper réactif et à l’écoute des
              suggestions d’amélioration.”
            </p>
            <div className="flex flex-col">
              <span className="text-xl font-bold">François Eichenberger</span>
              <span className="text-lg text-muted-foreground">
                Organisateur de tournois à l'AS Haute-Broye
              </span>
            </div>
          </div>
          <img
            className="hidden xl:block flex-1/2"
            src={testimonial}
            alt="testimonial illustration"
          />
        </div>
      </PageSection>
      <PageSeparation id="pricing" />
      <PageSection className="px-0">
        <div className="px-10 lg:pl-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Commencer gratuitement
          </span>
          <h2 className="text-4xl font-bold">
            Gagnez du temps dès{' '}
            <span className="text-primary">aujourd'hui</span>
          </h2>
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger className="mt-4">
              <SelectValue>{currency}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {availableCurrencies
                .filter((c) => c !== currency)
                .map((currency, key) => (
                  <SelectItem key={key} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col md:flex-row items-stretch border-t border-b mt-8">
          <div className="py-5 border-r border-b-2 md:border-b-0 flex-1/2 transition-all duration-150 hover:bg-foreground/1">
            <div className="flex flex-col pb-5 border-b px-10 lg:px-15">
              <span className="uppercase text-muted-foreground">
                Essayer Optifit
              </span>
              <h2 className="font-bold text-3xl font-mono flex gap-2 items-baseline">
                {format(currency, 0)}
              </h2>
            </div>
            <div className="mt-5 flex flex-col gap-2 px-10 lg:px-15">
              <span className="flex items-center gap-2">
                <Check size={13} className="text-muted-foreground" />
                Un seul tournoi
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Équipes ou participants illimités
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Partage instantané des resultats
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Gestion des pauses
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Branding du tournoi personnalisé
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Collaboration avec votre staff
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Support réactif
              </span>
            </div>
          </div>
          <div className="py-5 flex-1/2 transition-all duration-150 hover:bg-foreground/1">
            <div className="flex flex-col pb-5 border-b px-10 lg:px-15">
              <span className="uppercase text-muted-foreground">
                Optifit Pro
              </span>
              <h2 className="font-bold text-3xl font-mono flex gap-2 items-baseline">
                {format(currency, amount)}
                <span className="text-lg font-sans">/an</span>
              </h2>
            </div>
            <div className="mt-5 flex flex-col gap-2 px-10 lg:px-15">
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Nombre de tournois illimité
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Équipes ou participants illimités
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Partage instantané des resultats
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Gestion des pauses
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Branding du tournoi personnalisé
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Collaboration avec votre staff
              </span>
              <span className="flex items-center gap-2">
                <Check size={13} className="text-green-500" />
                Support réactif
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-10 px-10">
          <h2 className="text-2xl font-medium text-center">
            Créez votre premier tournoi{' '}
            <span className="text-primary">gratuit</span>
          </h2>
          <span className="text-muted-foreground text-center">
            pas de carte bancaire requise
          </span>
          <Button
            variant="default"
            size="lg"
            className="mt-5"
            onClick={handleStart}
          >
            Commencer gratuitement <ExternalLink />
          </Button>
        </div>
      </PageSection>
      <PageSeparation id="team" />
      <PageSection className="px-0">
        <div className="flex flex-col gap-1 px-10 lg:pl-20">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Qui sommes-nous
          </span>
          <h2 className="text-4xl font-bold">
            L'équipe <span className="text-primary">Optifit</span>
          </h2>
        </div>
        <div className="flex items-stretch flex-wrap mt-10">
          {teamMembers.map((member, index) => (
            <div
              className={cn(
                'flex flex-1/5 flex-col items-center justify-center p-5 hover:bg-foreground/1 border-t',
                index !== 4 && 'border-r',
              )}
              key={member.id}
            >
              <img
                src={member.avatar}
                className="h-30 rounded-full"
                alt="profile picture"
              />
              <span className="text-xl font-medium mt-3">{member.name}</span>
              <span className="text-lg text-muted-foreground">
                {member.role}
              </span>
              <Button
                variant="link"
                className="mt-4"
                onClick={() => window.open(member.linkedin)}
              >
                Linkedin <ExternalLink />
              </Button>
            </div>
          ))}
        </div>
      </PageSection>
      <PageSeparation />
      <PageSection className="pb-20 px-10 text-center">
        <span className="text-xs font-medium uppercase text-muted-foreground">
          Partenaire
        </span>
        <h2 className="text-4xl font-bold">Ils nous soutiennent</h2>
        <img
          src={theme === 'dark' ? socraftLight : socraft}
          alt="Socraft Logo"
          className="w-70 lg:w-100 mx-auto mt-10 cursor-pointer"
          onClick={() => window.open('https://socraft.io')}
        />
      </PageSection>
      <PageSeparation id="faq" />
      <PageSection className="pb-10 px-10 lg:px-20">
        <span className="text-xs font-medium uppercase text-muted-foreground">
          Questions fréquentes
        </span>
        <h2 className="text-4xl font-bold">FAQ</h2>
        <Faq />
      </PageSection>
      <PageSeparation />
      <PageSection className="pb-10 px-10">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-medium text-center">
            Créez votre premier tournoi{' '}
            <span className="text-primary">gratuit</span>
          </h2>
          <span className="text-muted-foreground text-center">
            pas de carte bancaire requise
          </span>
          <Button
            variant="default"
            size="lg"
            className="mt-5"
            onClick={handleStart}
          >
            Commencer gratuitement <ExternalLink />
          </Button>
        </div>
      </PageSection>
    </div>
  );
};

export { Home };
