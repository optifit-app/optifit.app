import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatRankingCriterion = (criterion: any): string => {
  switch (criterion) {
    case 'points':
      return 'Points';
    case 'goalDifference':
      return 'Différence de buts';
    case 'goalsFor':
      return 'Buts marqués';
    case 'directConfrontation':
      return 'Confrontation directe';
    case 'fairPlayAverage':
      return 'Moyenne des points Fair-Play';
    case 'alphabeticalOrder':
      return 'Ordre alphabétique';
    default:
      return 'Critère inconnu';
  }
};

export const months = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
];

export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day} ${months[month - 1]} ${year}`;
};
