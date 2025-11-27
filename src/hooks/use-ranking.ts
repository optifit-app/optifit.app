import { useApi } from '@/lib/axios';
import type {
  FinalRanking,
  GetRankingResponse,
  Group,
  Match,
  Phase,
  PhaseWithItsMatches,
  Team,
  Tournament,
} from '@/types/ranking';
import { useEffect, useState } from 'react';

interface UseRankingProps {
  loading: boolean;
  failed: boolean;
  tournament?: Tournament;
  groups?: Group[];
  teams?: Team[];
  matches?: Match[];
  phases?: PhaseWithItsMatches[];
  finalRanking?: FinalRanking;
  refetch: () => Promise<void>;
}

export const useRanking = (tournamentId?: string): UseRankingProps => {
  const [loading, setLoading] = useState<boolean>(true);
  const [failed, setFailed] = useState<boolean>(false);
  const [tournament, setTournament] = useState<Tournament>();
  const [groups, setGroups] = useState<Group[]>();
  const [teams, setTeams] = useState<Team[]>();
  const [matches, setMatches] = useState<Match[]>();
  const [phases, setPhases] = useState<PhaseWithItsMatches[]>();
  const [finalRanking, setFinalRanking] = useState<FinalRanking>();

  const api = useApi();

  useEffect(() => {
    void fetch();
  }, [tournamentId]);

  const fetch = async (): Promise<void> => {
    setLoading(true);

    if (!tournamentId) {
      setFailed(true);
      return;
    }

    try {
      const result = await api.get<GetRankingResponse>(
        `/public/${tournamentId}/ranking`,
      );

      handleResult(result.data);
    } catch {
      setLoading(false);
      setFailed(true);
    }
  };

  const handleResult = (result: GetRankingResponse): void => {
    setTournament(result.ranking.tournament);
    setTeams(result.ranking.teams);

    if (result.ranking.phases) {
      setPhases(
        result.ranking.phases.map((phase) =>
          insertMatches(phase, result.ranking.matches),
        ),
      );
    }

    setMatches(result.ranking.matches.filter((match) => !match.phaseId));
    setGroups(result.ranking.groups);
    setFinalRanking(result.ranking.finalRanking);

    setLoading(false);
  };

  const insertMatches = (
    phase: Phase,
    matches: Match[],
  ): PhaseWithItsMatches => ({
    ...phase,
    matches: matches.filter(
      (m) => m.phaseType === phase.type && m.phaseId === phase.id,
    ),
  });

  return {
    loading,
    failed,
    tournament,
    groups,
    teams,
    matches,
    phases,
    finalRanking,
    refetch: fetch,
  };
};
