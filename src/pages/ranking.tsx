import MatchStatusBadge from '@/components/common/match-status-badge';
import { FinalRanking } from '@/components/ranking/final-ranking';
import { PreliminaryPhaseRanking } from '@/components/ranking/preliminary-phase-ranking';
import { RankingCriteria } from '@/components/ranking/ranking-criteria';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PageSection } from '@/components/ui/page-section';
import { Spinner } from '@/components/ui/spinner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useRanking } from '@/hooks/use-ranking';
import {
  formatDate,
  formatMatchForDisplay,
  getFinalLabel,
  getPhaseLabel,
} from '@/lib/utils';
import { CircleAlert, MapPin } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Ranking = () => {
  const { tournamentId } = useParams();
  const {
    loading,
    failed,
    tournament,
    teams,
    groups,
    finalRanking,
    matches,
    phases,
  } = useRanking(tournamentId);
  const [finalRankingCollapsed, setFinalRankingCollapsed] =
    useState<boolean>(true);

  const shouldHaveFinalRanking = useMemo(() => {
    return (
      tournament?.type !== 'swiss' && (tournament?.phases?.length ?? 0) > 0
    );
  }, [tournament]);

  const allRankingInterphasesMatches = useMemo(
    () =>
      (phases ?? [])
        .filter((phase) => phase.type === 'ranking-interphase')
        .flatMap((phase) => phase.matches)
        .sort((a, b) => (a.startAfter ?? 0) - (b.startAfter ?? 0)),
    [phases],
  );

  const allMatches = [
    ...(matches ?? []),
    ...(phases?.flatMap((p) => p.matches) ?? []),
  ].sort((a, b) => (a.startAfter || 0) - (b.startAfter || 0));

  useEffect(() => {
    if (shouldHaveFinalRanking && finalRanking?.length) {
      setFinalRankingCollapsed(false);
    }
  }, [shouldHaveFinalRanking, finalRanking]);

  const toggleFinalRankingCollapsed = () =>
    setFinalRankingCollapsed(!finalRankingCollapsed);

  if (loading) {
    return (
      <div className="lg:max-w-screen-2xl mx-auto border border-b-0 mt-15 rounded-t-lg px-10">
        <div className="flex flex-col gap-5 items-center justify-center h-100 text-center">
          <Spinner />
          <span className="text-sm text-muted-foreground">
            Chargement des résultats...
          </span>
        </div>
      </div>
    );
  }

  if (failed || !tournament) {
    return (
      <div className="lg:max-w-screen-2xl mx-auto border border-b-0 mt-15 rounded-t-lg px-10">
        <div className="flex flex-col items-center justify-center h-100 text-center">
          <CircleAlert size={40} />
          <span className="text-md font-bold mt-5">
            Impossible de récupérer les résultats
          </span>
          <span className="text-sm text-muted-foreground mt-2">
            Véfifiez que le lien que vous avez utilisé est correct ou contactez
            l'administrateur du tournoi.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:max-w-screen-2xl mx-auto border border-b-0 mt-15 rounded-t-lg">
      <PageSection className="pt-8 px-0">
        <div className="flex flex-col items-start gap-3 lg:flex-row lg:gap-6 lg:items-center px-5 lg:pl-20 mb-7">
          <img
            className="h-12 lg:h-18 rounded"
            src={tournament.iconDownloadUrl}
            alt={tournament.name}
          />
          <div>
            <span className="text-xs font-medium uppercase text-muted-foreground">
              {formatDate(new Date(tournament.date))}
            </span>
            <h2 className="text-2xl lg:text-3xl font-semibold">
              {tournament.name}
            </h2>
            {(tournament.location?.length ?? 0) > 0 && (
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={14} />
                <a
                  className="underline select-none"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tournament?.location ?? '')}`}
                >
                  {tournament.location}
                </a>
              </span>
            )}
          </div>
        </div>
      </PageSection>
      <Tabs defaultValue="ranking">
        <PageSection className="px-0 pt-0">
          <TabsList className="w-full rounded-none">
            <TabsTrigger value="ranking">Classement</TabsTrigger>
            <TabsTrigger value="matches">Matchs</TabsTrigger>
          </TabsList>
        </PageSection>
        <TabsContent value="ranking">
          <PageSection className="pt-2 px-2 lg:px-20 pb-10 flex flex-col gap-3 items-stretch">
            {shouldHaveFinalRanking && (
              <FinalRanking
                finalRanking={finalRanking}
                visible={finalRanking !== undefined && finalRanking.length > 0}
                teamsHaveColors={tournament.teamsHaveColors}
                finalRankingCollapsed={finalRankingCollapsed}
                toggleFinalRankingCollapsed={toggleFinalRankingCollapsed}
              />
            )}
            <PreliminaryPhaseRanking
              swiss={tournament.type === 'swiss'}
              hasGroups={tournament.hasGroups}
              teamsHaveColors={tournament.teamsHaveColors}
              groups={groups}
              teams={teams}
            />
            <RankingCriteria rankingCriteria={tournament.rankingCriteria} />
          </PageSection>
        </TabsContent>
        <TabsContent value="matches">
          <PageSection className="pt-2 px-2 lg:px-10 lg:pl-20 pb-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 flex-wrap">
                  Tour préliminaire
                  {tournament.preliminaryPhaseBehavior ===
                    'partial-round-robin' && (
                    <Tooltip>
                      <TooltipTrigger>
                        <Badge className="bg-sky-500/10 text-sky-500 border-sky-500/20 flex justify-start items-center px-1.5 font-normal">
                          Mode restreint
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        Chaque équipe joue un nombre restreint de matchs pendant
                        cette phase.
                      </TooltipContent>
                    </Tooltip>
                  )}
                </CardTitle>
                <CardDescription>{matches?.length} matchs</CardDescription>
              </CardHeader>
              <CardContent>
                <Table className="text-[12px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead>#</TableHead>
                      <TableHead>Début</TableHead>
                      <TableHead>Lieu</TableHead>
                      <TableHead>Équipe 1</TableHead>
                      <TableHead>Équipe 2</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Statut</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {matches
                      ?.sort(
                        (a, b) => (a.startAfter ?? 0) - (b.startAfter ?? 0),
                      )
                      .map((match, index) => {
                        const formatted = formatMatchForDisplay(
                          match,
                          tournament,
                        );

                        return (
                          <TableRow key={index} className="first:border-t-0">
                            <TableCell>
                              {(allMatches?.findIndex(
                                (m) => m.id === match.id,
                              ) ?? 0) + 1}
                            </TableCell>
                            <TableCell>
                              <>
                                {match.startAt?.hours
                                  .toString()
                                  .padStart(2, '0')}
                                h
                                {match.startAt?.minutes
                                  .toString()
                                  .padStart(2, '0')}
                              </>
                            </TableCell>
                            <TableCell>
                              <Badge className="bg-background text-sidebar-foreground border border-sidebar-border font-medium text-[12px]">
                                {formatted.fieldLabel}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {tournament.teamsHaveColors &&
                                  (teams?.find((t) => t.id === match.team1)
                                    ?.color?.length ?? 0) > 0 && (
                                    <span
                                      className="inline-block w-3 h-3 rounded border flex-shrink-0"
                                      style={{
                                        backgroundColor: teams?.find(
                                          (t) => t.id === match.team1,
                                        )?.color,
                                      }}
                                    />
                                  )}
                                {teams?.find((t) => t.id === match.team1)?.name}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {tournament.teamsHaveColors &&
                                  (teams?.find((t) => t.id === match.team2)
                                    ?.color?.length ?? 0) > 0 && (
                                    <span
                                      className="inline-block w-3 h-3 rounded border flex-shrink-0"
                                      style={{
                                        backgroundColor: teams?.find(
                                          (t) => t.id === match.team2,
                                        )?.color,
                                      }}
                                    />
                                  )}
                                {teams?.find((t) => t.id === match.team2)?.name}
                              </div>
                            </TableCell>
                            <TableCell>{match.score.join(' - ')}</TableCell>
                            <TableCell>
                              <MatchStatusBadge match={match} />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            {phases?.map((phase, key) => (
              <Card key={key} className="mt-3">
                <CardHeader>
                  <CardTitle>
                    {getPhaseLabel(phase.type, phase.matches)}
                  </CardTitle>
                  <CardDescription>
                    {phase.matches.length} match
                    {phase.matches.length > 1 ? 's' : ''}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table className="text-[12px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Début</TableHead>
                        <TableHead>Lieu</TableHead>
                        {(phase.type === 'final' ||
                          phase.type === 'ranking-interphase') && (
                          <TableHead>Étiquette</TableHead>
                        )}
                        <TableHead>Équipe 1</TableHead>
                        <TableHead>Équipe 2</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Statut</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {phase.matches
                        ?.sort(
                          (a, b) => (a.startAfter ?? 0) - (b.startAfter ?? 0),
                        )
                        .map((match, index) => {
                          const formatted = formatMatchForDisplay(
                            match,
                            tournament,
                          );

                          return (
                            <TableRow key={index} className="first:border-t-0">
                              <TableCell>
                                {(allMatches?.findIndex(
                                  (m) => m.id === match.id,
                                ) ?? 0) + 1}
                              </TableCell>
                              <TableCell>
                                <>
                                  {match.startAt?.hours
                                    .toString()
                                    .padStart(2, '0')}
                                  h
                                  {match.startAt?.minutes
                                    .toString()
                                    .padStart(2, '0')}
                                </>
                              </TableCell>
                              <TableCell>
                                <Badge className="bg-background text-sidebar-foreground border border-sidebar-border font-medium text-[12px]">
                                  {formatted.fieldLabel}
                                </Badge>
                              </TableCell>
                              {(phase.type === 'final' ||
                                phase.type === 'ranking-interphase') && (
                                <TableCell>
                                  {getFinalLabel(
                                    phase.type === 'final'
                                      ? index
                                      : allRankingInterphasesMatches.findIndex(
                                          (m) => (m.id = match.id),
                                        ),
                                    phase.type === 'ranking-interphase'
                                      ? allRankingInterphasesMatches.length
                                      : phase.matches.length,
                                    phase.type === 'ranking-interphase',
                                    tournament,
                                  )}
                                </TableCell>
                              )}
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  {tournament.teamsHaveColors &&
                                    (teams?.find((t) => t.id === match.team1)
                                      ?.color?.length ?? 0) > 0 && (
                                      <span
                                        className="inline-block w-3 h-3 rounded border flex-shrink-0"
                                        style={{
                                          backgroundColor: teams?.find(
                                            (t) => t.id === match.team1,
                                          )?.color,
                                        }}
                                      />
                                    )}
                                  {teams?.find((t) => t.id === match.team1)
                                    ?.name ?? 'Non défini'}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  {tournament.teamsHaveColors &&
                                    (teams?.find((t) => t.id === match.team2)
                                      ?.color?.length ?? 0) > 0 && (
                                      <span
                                        className="inline-block w-3 h-3 rounded border flex-shrink-0"
                                        style={{
                                          backgroundColor: teams?.find(
                                            (t) => t.id === match.team2,
                                          )?.color,
                                        }}
                                      />
                                    )}
                                  {teams?.find((t) => t.id === match.team2)
                                    ?.name ?? 'Non défini'}
                                </div>
                              </TableCell>
                              <TableCell>{match.score.join(' - ')}</TableCell>
                              <TableCell>
                                <MatchStatusBadge match={match} />
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </PageSection>
        </TabsContent>
      </Tabs>
    </div>
  );
};
