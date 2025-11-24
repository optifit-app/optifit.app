import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PageSection } from '@/components/ui/page-section';
import { Spinner } from '@/components/ui/spinner';
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRanking } from '@/hooks/use-ranking';
import {
  cn,
  formatDate,
  formatMatchForDisplay,
  formatRankingCriterion,
} from '@/lib/utils';
import { ChevronDown, CircleAlert, Trophy } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import MatchStatusBadge from '@/components/common/match-status-badge';

export const Ranking = () => {
  const { tournamentId } = useParams();
  const { loading, failed, tournament, teams, groups, finalRanking, matches } =
    useRanking(tournamentId);
  const [finalRankingCollapsed, setFinalRankingCollapsed] =
    useState<boolean>(true);
  const [
    preliminaryPhaseRankingCollapsed,
    setPreliminaryPhaseRankingCollapsed,
  ] = useState<boolean>(false);

  const shouldHaveFinalRanking = useMemo(() => {
    return (
      tournament?.type !== 'swiss' && (tournament?.phases?.length ?? 0) > 0
    );
  }, [tournament]);

  useEffect(() => {
    if (shouldHaveFinalRanking && finalRanking?.length) {
      setFinalRankingCollapsed(false);
    }
  }, [shouldHaveFinalRanking, finalRanking]);

  const toggleFinalRankingCollapsed = () =>
    setFinalRankingCollapsed(!finalRankingCollapsed);

  const togglePreliminaryPhaseRankingCollapsed = () =>
    setPreliminaryPhaseRankingCollapsed(!preliminaryPhaseRankingCollapsed);

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
              <Card>
                <CardHeader>
                  <CardTitle>Classement final</CardTitle>
                  <CardDescription>Classement final du tournoi</CardDescription>
                  <CardAction>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleFinalRankingCollapsed}
                    >
                      <ChevronDown
                        className={cn(
                          finalRankingCollapsed && 'rotate-180',
                          'transition-all duration-200',
                        )}
                        size={35}
                      />
                    </Button>
                  </CardAction>
                </CardHeader>
                {!finalRankingCollapsed && (
                  <>
                    {finalRanking !== undefined && finalRanking.length > 0 ? (
                      <CardContent className="flex flex-col gap-2 px-2 xl:px-5">
                        <Table className="text-[12px]">
                          {finalRanking.map((team, index) => (
                            <TableRow
                              key={index}
                              className="flex items-center first:border-t-0"
                            >
                              <TableCell>
                                <div className="flex items-center gap-1">
                                  {index + 1}.
                                  {index >= 0 && index <= 2 && (
                                    <Trophy
                                      size={14}
                                      className={cn(
                                        index === 0
                                          ? 'text-yellow-500'
                                          : index === 1
                                            ? 'text-zinc-400'
                                            : 'text-amber-700',
                                      )}
                                    />
                                  )}
                                </div>
                              </TableCell>
                              <TableCell className="flex items-center gap-2 pl-0">
                                {tournament.teamsHaveColors &&
                                  (team.color?.length ?? 0) > 0 && (
                                    <span
                                      className="inline-block w-3 h-3 rounded border flex-shrink-0"
                                      style={{ backgroundColor: team.color }}
                                    />
                                  )}
                                {team.name}
                              </TableCell>
                            </TableRow>
                          ))}
                        </Table>
                      </CardContent>
                    ) : (
                      <CardContent>
                        <p>
                          Vous pourrez consulter le classement final dès que le
                          tournoi sera terminé.
                        </p>
                      </CardContent>
                    )}
                  </>
                )}
              </Card>
            )}
            <Card>
              <CardHeader>
                {tournament.type === 'swiss' ? (
                  <>
                    <CardTitle>Classement des participants</CardTitle>
                    <CardDescription>
                      Se met à jour après chaque tour
                    </CardDescription>
                  </>
                ) : (
                  <>
                    <CardTitle>Classement préliminaire</CardTitle>
                    <CardDescription>
                      {tournament.hasGroups
                        ? 'Phases de groupes'
                        : 'Tour préliminaire'}
                    </CardDescription>
                  </>
                )}
                <CardAction>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={togglePreliminaryPhaseRankingCollapsed}
                  >
                    <ChevronDown
                      className={cn(
                        preliminaryPhaseRankingCollapsed && 'rotate-180',
                        'transition-all duration-200',
                      )}
                      size={35}
                    />
                  </Button>
                </CardAction>
              </CardHeader>
              {!preliminaryPhaseRankingCollapsed && (
                <>
                  {tournament.hasGroups ? (
                    <CardContent
                      className="
                        px-2 xl:px-5
                        grid gap-3
                        xl:grid-cols-2
                      "
                    >
                      {groups?.map((group, key) => (
                        <Table key={key} className="w-full text-[12px]">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="px-1 pl-3 xl:px-3 text-left">
                                {group.name}
                              </TableHead>
                              <TableHead className="px-1 xl:px-3 w-[20px] text-center">
                                M
                              </TableHead>
                              <TableHead className="px-1 xl:px-3 w-[20px] text-center">
                                G
                              </TableHead>
                              <TableHead className="px-1 xl:px-3 w-[20px] text-center">
                                N
                              </TableHead>
                              <TableHead className="px-1 xl:px-3 w-[20px] text-center">
                                P
                              </TableHead>
                              <TableHead className="px-1 xl:px-3 w-[50px] text-center">
                                B
                              </TableHead>
                              <TableHead className="px-1 xl:px-3 w-[32px] text-center">
                                +/-
                              </TableHead>
                              <TableHead className="px-1 w-[28px] text-right pr-2 xl:px-3">
                                Pts
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {teams
                              ?.filter((t) => t.group === group.id)
                              .map((team, index) => (
                                <TableRow
                                  key={index}
                                  className="first:border-t-0 odd:bg-accent/80"
                                >
                                  <TableCell className="px-1 xl:px-3 align-top">
                                    <div className="flex items-start xl:items-center gap-1 xl:gap-2">
                                      <span className="w-[18px] text-right flex-shrink-0">
                                        {index + 1}.
                                      </span>
                                      {tournament.teamsHaveColors &&
                                        (team.color?.length ?? 0) > 0 && (
                                          <span
                                            className="inline-block w-3 h-3 rounded border flex-shrink-0"
                                            style={{
                                              backgroundColor: team.color,
                                            }}
                                          />
                                        )}
                                      <span className="whitespace-normal leading-tight">
                                        {team.name}
                                      </span>
                                    </div>
                                  </TableCell>
                                  <TableCell className="px-1 w-[20px] text-center">
                                    {team.matchesPlayed}
                                  </TableCell>
                                  <TableCell className="px-1 w-[20px] text-center">
                                    {team.wins}
                                  </TableCell>
                                  <TableCell className="px-1 w-[20px] text-center">
                                    {team.draws}
                                  </TableCell>
                                  <TableCell className="px-1 w-[20px] text-center">
                                    {team.looses}
                                  </TableCell>
                                  <TableCell className="px-1 w-[50px] text-center">
                                    {team.goalsFor} : {team.goalsAgainst}
                                  </TableCell>
                                  <TableCell className="px-1 w-[32px] text-center">
                                    {team.goalDifference}
                                  </TableCell>
                                  <TableCell className="px-1 text-right pr-3 w-[28px] font-medium text-primary">
                                    {team.points}
                                  </TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                        </Table>
                      ))}
                    </CardContent>
                  ) : (
                    <CardContent>
                      <Table className="w-full text-[12px]">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="px-1 pl-3 xl:px-3 text-left">
                              {tournament.type === 'swiss'
                                ? 'Participant'
                                : 'Équipe'}
                            </TableHead>
                            <TableHead className="px-1 xl:px-3 w-[20px] text-center">
                              M
                            </TableHead>
                            <TableHead className="px-1 xl:px-3 w-[20px] text-center">
                              G
                            </TableHead>
                            <TableHead className="px-1 xl:px-3 w-[20px] text-center">
                              N
                            </TableHead>
                            <TableHead className="px-1 xl:px-3 w-[20px] text-center">
                              P
                            </TableHead>
                            <TableHead className="px-1 xl:px-3 w-[50px] text-center">
                              B
                            </TableHead>
                            <TableHead className="px-1 xl:px-3 w-[32px] text-center">
                              +/-
                            </TableHead>
                            <TableHead className="px-1 w-[28px] text-right pr-2 xl:px-3">
                              Pts
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {teams?.map((team, index) => (
                            <TableRow
                              key={index}
                              className="first:border-t-0 odd:bg-accent/80"
                            >
                              <TableCell className="px-1 xl:px-3 align-top">
                                <div className="flex items-start xl:items-center gap-1 xl:gap-2">
                                  <span className="w-[18px] text-right flex-shrink-0">
                                    {index + 1}.
                                  </span>
                                  {tournament.teamsHaveColors &&
                                    (team.color?.length ?? 0) > 0 && (
                                      <span
                                        className="inline-block w-3 h-3 rounded border flex-shrink-0"
                                        style={{ backgroundColor: team.color }}
                                      />
                                    )}
                                  <span className="whitespace-normal leading-tight">
                                    {team.name}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell className="px-1 w-[20px] text-center">
                                {team.matchesPlayed}
                              </TableCell>
                              <TableCell className="px-1 w-[20px] text-center">
                                {team.wins}
                              </TableCell>
                              <TableCell className="px-1 w-[20px] text-center">
                                {team.draws}
                              </TableCell>
                              <TableCell className="px-1 w-[20px] text-center">
                                {team.looses}
                              </TableCell>
                              <TableCell className="px-1 w-[50px] text-center">
                                {team.goalsFor} : {team.goalsAgainst}
                              </TableCell>
                              <TableCell className="px-1 w-[32px] text-center">
                                {team.goalDifference}
                              </TableCell>
                              <TableCell className="px-1 text-right pr-3 w-[28px] font-medium text-primary">
                                {team.points}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  )}
                </>
              )}
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Critères de classement</CardTitle>
                <CardDescription>
                  Pour classer les équipes, les critères sont pris dans l'ordre
                  suivant
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-1">
                {tournament.rankingCriteria.map((criterion, index) => (
                  <span key={index} className="text-muted-foreground">
                    <span className="text-foreground font-medium">
                      {index + 1}.
                    </span>{' '}
                    {formatRankingCriterion(criterion)}
                  </span>
                ))}
              </CardContent>
            </Card>
          </PageSection>
        </TabsContent>
        <TabsContent value="matches">
          <PageSection className="pt-2 px-2 lg:px-10 lg:pl-20 pb-5">
            <Card>
              <CardHeader>
                <CardTitle>Tour préliminaire</CardTitle>
                <CardDescription>{matches?.length} matchs</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-1">
                <Table>
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
                            <TableCell>{index + 1}</TableCell>
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
                              <Badge className="bg-background text-sidebar-foreground border border-sidebar-border font-medium">
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
          </PageSection>
        </TabsContent>
      </Tabs>
    </div>
  );
};
