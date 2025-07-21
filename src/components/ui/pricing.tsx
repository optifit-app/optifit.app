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
import { useEffect, useState } from 'react';
import type { Product } from '@/types/pricing';
import { useCurrency } from '@/hooks/use-currency.ts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Pricing = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [amount, setAmount] = useState<number>(100);
  const { currency, availableCurrencies, setCurrency, format } =
    useCurrency(product);

  useEffect(() => {
    const initProduct = async (): Promise<void> => {
      const response = await fetch('https://api.optifit.app/public/pricing');
      const result = await response.json();

      setProduct(result.products[0]);
    };

    void initProduct();
  }, []);

  useEffect(() => {
    const price = product?.prices.find(
      (price) => price.currency === currency.toLowerCase(),
    );

    setAmount((price?.amount ?? 10000) / 100);
  }, [currency, product]);

  const features = [
    'Premier tournoi gratuit',
    'Nombre de tournois illimité',
    'Équipes ou participants illimités',
    'Partage instantané des resultats',
    'Gestion des pauses',
    'Branding du tournoi personnalisé',
    'Collaboration avec votre staff',
    'Support réactif',
  ];

  return (
    <section className="py-32" id="pricing">
      <div className="container mx-auto w-full">
        <div className="mx-auto w-full max-w-[1120px] px-4 flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-extrabold text-pretty lg:text-4xl">
            Combien ça coûte ?
          </h2>
          <p className="text-lg font-medium text-pretty text-muted-foreground">
            1er tournoi gratuit
          </p>
          <Select onValueChange={setCurrency}>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder={currency} />
            </SelectTrigger>
            <SelectContent>
              {availableCurrencies.map((currency, key) => (
                <SelectItem value={currency} key={key}>
                  {currency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex flex-col w-full items-stretch gap-6 md:flex-row mt-6">
            <Card className="flex flex-1 mx-auto max-w-[600px] flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Accès complet à Optifit</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Tout ce dont vous avez besoin pour organiser vos tournois
                </p>
                <div className="flex gap-2 items-end">
                  <span className="text-4xl font-semibold">
                    {format(currency, amount)}
                  </span>
                  <span className="text-2xl font-semibold text-muted-foreground">
                    /an
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <ul className="space-y-4">
                  {features.map((feature, key) => (
                    <li key={key} className="flex items-center gap-2 text-sm">
                      <CircleCheck className="size-5 text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-3">
                <Button asChild className="w-full">
                  <a href="https://my.optifit.app/signin">
                    Créer mon compte
                    <ArrowRight />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing };
