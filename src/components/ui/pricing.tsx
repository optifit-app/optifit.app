import { ArrowRight, CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number | string;
  currency?: string;
  features: PricingFeature[];
  button: {
    text: string;
    url: string;
  };
}

interface PricingProps {
  heading?: string;
  description?: string;
  plans?: PricingPlan[];
}

const Pricing = ({
  heading = 'Combien ça coûte ?',
  plans = [
    {
      id: 'basic',
      name: 'Accès complet à Optifit',
      description: 'Tout ce dont vous avez besoin pour organiser vos tournois',
      price: 100,
      currency: 'chf',
      features: [
        { text: 'Premier tournoi gratuit' },
        { text: 'Nombre de tournois illimité' },
        { text: 'Équipes ou participants illimités' },
        { text: 'Partage instantané des resultats' },
        { text: 'Gestion des pauses' },
        { text: 'Branding du tournoi personnalisé' },
        { text: 'Collaboration avec votre staff' },
        { text: 'Support réactif' },
      ],
      button: {
        text: 'Créer mon compte',
        url: 'https://my.optifit.app/signin',
      },
    },
  ],
}: PricingProps) => {
  return (
    <section className="py-32" id="pricing">
      <div className="container mx-auto w-full">
        <div className="mx-auto w-full max-w-[1120px] px-4 flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-extrabold text-pretty lg:text-4xl">
            {heading}
          </h2>
          <p className="text-lg font-medium text-pretty text-muted-foreground">
            1er tournoi gratuit
          </p>
          <div className="flex flex-col w-full items-stretch gap-6 md:flex-row mt-6">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className="flex flex-1 mx-auto max-w-[600px] flex-col justify-between text-left"
              >
                <CardHeader>
                  <CardTitle>
                    <p>{plan.name}</p>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="flex gap-2 items-end">
                    {plan.currency !== undefined && (
                      <span className="text-lg font-bold text-muted-foreground">
                        {plan.currency.toUpperCase()}
                      </span>
                    )}
                    <span className="text-5xl font-semibold">
                      {plan.price}
                    </span>
                    {typeof plan.price === 'number' && (
                      <span className="text-2xl font-semibold text-muted-foreground">
                        /an
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  {plan.id === 'pro' && (
                    <p className="mb-3 font-semibold">Tout du basique, et :</p>
                  )}
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CircleCheck className="size-5 text-green-600" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-3">
                  <Button asChild className="w-full">
                    <a href={plan.button.url}>
                      {plan.button.text}
                      <ArrowRight />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing };
