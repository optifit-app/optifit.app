export interface Tournament {
  id: string;
  name: string;
  type: 'groups-and-elimination' | 'swiss';
  startTime: {
    hours: number;
    minutes: number;
  };
  date: Date;
  matchDuration?: number;
  durationBetweenMatches?: number;
  durationBetweenPhases?: number;
  finalsDuration?: number;
  teams?: Team[];
  matches?: Match[];
  hasGroups?: boolean;
  groups?: Group[];
  phases?: TournamentPhase[];
  fairPlayEnabled?: boolean;
  teamsNumber?: number;
  teamsToPick?: number;
  finalType?: 'simple' | 'small' | 'every-places' | 'none';
  iconDownloadUrl?: string;
  teamsHaveColors?: boolean;
  rankingInterphases?: boolean;
  breaks?: Break[];
  allowedUsers?: string[];
  usersAvatars?: string[];
  rankingQrCodeImage?: string;
  rankingLink?: string;
  isOwner?: boolean;
  fields?: FieldConfiguration[];
  fieldsNumber?: number;
  swissRoundsNumber?: number;
  swissRounds?: SwissRound[];
  needParticipantsCreation?: boolean;
  location?: string;
  rankingCriteria: Criterion[];
  preliminaryPhaseBehavior?: 'full-round-robin' | 'partial-round-robin';
  preliminaryMatchesPerTeam?: number;
}

export interface Group {
  id: string;
  name: string;
  teams?: Team[];
}

export interface Team {
  name: string;
  id: string;
  color?: string;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  matchesPlayed: number;
  wins: number;
  draws: number;
  looses: number;
  fairPlayAverage?: number;
  group?: string;
}

export interface Match {
  id: string;
  team1: string;
  team2: string;
  score: number[];
  fairPlayScore?: number[];
  running: boolean;
  paused: boolean;
  alreadyPlayed: boolean;
  fieldNumber?: number;
  startAfter?: number;
  endAfter?: number;
  startAt?: {
    hours: number;
    minutes: number;
  };
  endAt?: {
    hours: number;
    minutes: number;
  };
  isBreak?: false;
  fromPhase?: boolean;
  phaseId?: string;
  phaseType?: TournamentPhase['type'];
}

type PhaseType =
  | 'thirty-second'
  | 'sixteenth'
  | 'eighth'
  | 'quarter'
  | 'semi'
  | 'final'
  | 'ranking-interphase';

export interface Phase {
  id: string;
  type: PhaseType;
  fictive?: boolean;
}

export interface PhaseWithItsMatches extends Phase {
  matches: Match[];
}

export type FinalRanking = {
  id: string;
  name: string;
  color?: string;
}[];

export interface GetRankingResponse {
  ranking: {
    tournament: Tournament;
    teams: Team[];
    phases?: Phase[];
    matches: Match[];
    groups?: Group[];
    finalRanking?: FinalRanking;
  };
}

export interface MatchForDisplay extends Match {
  team1Color?: string;
  team2Color?: string;
  fieldLabel?: string;
}
