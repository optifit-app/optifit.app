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

import type {
  Break,
  Match,
  MatchForDisplay,
  Team,
  Tournament,
} from '@/types/ranking';

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

export const getPhaseLabel = (
  step:
    | 'thirty-second'
    | 'sixteenth'
    | 'eighth'
    | 'quarter'
    | 'semi'
    | 'final'
    | 'ranking-interphase'
    | 'unknown',
  matches?: Match[],
  suffix?: number,
  disablePlural?: boolean,
): string | undefined => {
  const stepNames: Record<string, string> = {
    'thirty-second': 'Trente-deuxièmes-de-finale',
    sixteenth: 'Seizièmes-de-finale',
    eighth: 'Huitièmes-de-finale',
    quarter: 'Quarts-de-finale',
    semi: 'Demi-finales',
    final: 'Finale',
    'ranking-interphase': 'Classement',
  };

  if (stepNames[step] === 'Finale' && (matches ?? []).length > 1) {
    return disablePlural ? 'Finale' : 'Finales';
  }

  return stepNames[step]
    ? stepNames[step] + (suffix ? ` (${suffix})` : '')
    : undefined;
};

export const getFinalLabel = (
  index: number,
  matchesNumber: number,
  rankingInterphase?: boolean,
  tournament?: Tournament | null,
): string => {
  if (!rankingInterphase) {
    const position = matchesNumber * 2 - (index + 1) * 2 + 1;

    if (position === 1 && tournament?.finalType === 'small') {
      return 'Grande finale';
    }

    if (position === 3 && tournament?.finalType === 'small') {
      return 'Petite finale';
    }

    if (position === 1 && tournament?.finalType === 'simple') {
      return 'Finale';
    }

    return `${position} et ${position + 1}ème place`;
  }

  if (!tournament) {
    return 'Classement';
  }

  const totalTeams = tournament.teamsNumber ?? 0;

  const qualifiedTeams = tournament.phases?.find(
    (phase) => phase.type === 'final',
  )?.matches?.length
    ? (tournament.phases.find((phase) => phase.type === 'final')!.matches
        ?.length ?? 0) * 2
    : 0;

  const teamsInRanking = totalTeams - qualifiedTeams;

  const startFrom = teamsInRanking + (teamsInRanking % 2 === 0 ? 0 : -1);
  const position = startFrom - index * 2 + 3;

  return `${position} et ${position + 1}ème place`;
};

export const getAvailableBreaks = (
  matches: Match[],
  breaks: Break[],
): Break[] => {
  const matchTimes = matches.map((m) => m.startAfter ?? 0);
  const minStart = Math.min(...matchTimes);
  const maxStart = Math.max(...matchTimes);

  return breaks.filter(
    ({ startAfter }) => startAfter >= minStart && startAfter <= maxStart,
  );
};
