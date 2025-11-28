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
  allMatches?: Match[];
  allPhasesMatches?: Match[];
  refetch: () => Promise<void>;
}

const sortMatches = (a: Match, b: Match) =>
  (a.startAfter ?? 0) - (b.startAfter ?? 0);

export const useRanking = (
  dev: string | null,
  tournamentId?: string,
  selectedTeamId?: string,
): UseRankingProps => {
  const [loading, setLoading] = useState<boolean>(true);
  const [failed, setFailed] = useState<boolean>(false);
  const [tournament, setTournament] = useState<Tournament>();
  const [groups, setGroups] = useState<Group[]>();
  const [teams, setTeams] = useState<Team[]>();
  const [matches, setMatches] = useState<Match[]>();
  const [phases, setPhases] = useState<PhaseWithItsMatches[]>();
  const [finalRanking, setFinalRanking] = useState<FinalRanking>();
  const [allMatches, setAllMatches] = useState<Match[]>();
  const [allPhasesMatches, setAllPhasesMatches] = useState<Match[]>();
  const [result, setResult] = useState<GetRankingResponse>();

  const api = useApi();

  useEffect(() => {
    void fetch();
  }, [tournamentId]);

  useEffect(() => {
    if (selectedTeamId) {
      const updatedPhases = phases?.map((phase) => ({
        ...phase,
        matches: phase.matches.filter(
          (match) =>
            match.team1 === selectedTeamId || match.team2 === selectedTeamId,
        ),
      }));
      const updatedMatches = matches?.filter(
        (match) =>
          match.team1 === selectedTeamId || match.team2 === selectedTeamId,
      );

      setPhases(updatedPhases);
      setMatches(updatedMatches);
    } else if (result) {
      if (result.ranking.phases) {
        setPhases(
          result.ranking.phases.map((phase) =>
            insertMatches(phase, result.ranking.matches),
          ),
        );
      }

      setMatches(result.ranking.matches.filter((match) => !match.phaseId));
    }
  }, [selectedTeamId]);

  const fetch = async (): Promise<void> => {
    setLoading(true);

    if (!tournamentId) {
      setFailed(true);
      return;
    }

    try {
      const result = await api.get<GetRankingResponse>(
        `${dev ? 'http://localhost:8000' : ''}/public/${tournamentId}/ranking`,
      );

      handleResult(result.data);
    } catch {
      setLoading(false);
      setFailed(true);
    }
  };

  const handleResult = (result: GetRankingResponse): void => {
    let allMatches: Match[] = [];

    setTournament(result.ranking.tournament);
    setTeams(result.ranking.teams);

    if (result.ranking.phases) {
      const phases = result.ranking.phases.map((phase) =>
        insertMatches(phase, result.ranking.matches),
      );

      setPhases(phases);

      setAllPhasesMatches(
        phases
          .filter(
            (phase) =>
              phase.type === 'ranking-interphase' || phase.type === 'final',
          )
          .flatMap((phase) => phase.matches)
          .sort(sortMatches),
      );

      allMatches = [...phases.flatMap((p) => p.matches)];
    }

    const matches = result.ranking.matches.filter((match) => !match.phaseId);
    allMatches = [...allMatches, ...matches].sort(sortMatches);

    setMatches(matches);
    setGroups(result.ranking.groups);
    setFinalRanking(result.ranking.finalRanking);
    setResult(result);
    setAllMatches(allMatches);

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
    allMatches,
    allPhasesMatches,
    refetch: fetch,
  };
};
