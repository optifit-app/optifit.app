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

import type { Match, MatchForDisplay, Team, Tournament } from '@/types/ranking';

export const formatMatchForDisplay = (
  match: Match,
  tournament: Tournament,
  fictive?: boolean,
): MatchForDisplay => {
  const team1 = fictive
    ? match.team1
    : tournament.hasGroups
      ? (tournament.groups ?? [])
          .flatMap((g) => g.teams)
          .find((team) => team?.id === match.team1)
      : (tournament.teams ?? []).find((team) => team?.id === match.team1);
  const team2 = fictive
    ? match.team2
    : tournament.hasGroups
      ? (tournament.groups ?? [])
          .flatMap((g) => g.teams)
          .find((team) => team?.id === match.team2)
      : (tournament.teams ?? []).find((team) => team?.id === match.team2);

  const fieldLabel =
    tournament.fields?.find((field) => field.fieldNumber === match.fieldNumber)
      ?.customName ?? `Terrain ${match.fieldNumber}`;

  return {
    ...match,
    team1: fictive ? (team1 as string) : ((team1 as Team)?.name ?? ''),
    team2: fictive ? (team2 as string) : ((team2 as Team)?.name ?? ''),
    team1Color: fictive ? '' : (team1 as Team)?.color,
    team2Color: fictive ? '' : (team2 as Team)?.color,
    fieldLabel,
  };
};
