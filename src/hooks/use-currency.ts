import { useEffect, useMemo, useState } from 'react';
import type { Product } from '@/types/pricing';

type CurrencyData = {
  currency: string;
  setCurrency: (currency: string) => void;
  availableCurrencies: string[];
  format: (currency: string, amount: number) => string;
};

export const useCurrency = (product?: Product): CurrencyData => {
  const [currency, setCurrency] = useState('CHF');
  const [locale, setLocale] = useState('fr-CH');

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        const detectedCurrency = data.currency || 'CHF';
        const userLocale = navigator.language || 'fr-CH';

        setCurrency(detectedCurrency);
        setLocale(userLocale);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_: any) {
        const fallbackLocale = navigator.language || 'fr-CH';

        setLocale(fallbackLocale);

        const fallbackCurrency =
          new Intl.NumberFormat(fallbackLocale, {
            style: 'currency',
            currencyDisplay: 'code',
            currency: 'CHF',
          }).resolvedOptions().currency || 'CHF';

        setCurrency(fallbackCurrency);
      }
    };

    void detectCurrency();
  }, []);

  const availableCurrencies: string[] = useMemo(() => {
    if (!product || !product.prices) return [];

    return Array.from(
      new Set(
        product.prices.map((p) => p.currency?.toUpperCase()).filter(Boolean),
      ),
    );
  }, [product?.prices]);

  const format = (currency: string, amount: number) =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      currencyDisplay: 'symbol',
    }).format(amount);

  return { currency, availableCurrencies, setCurrency, format };
};
