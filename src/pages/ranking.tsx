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
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRanking } from '@/hooks/use-ranking';
import { formatDate } from '@/lib/utils';
import { CircleAlert } from 'lucide-react';
import { useParams } from 'react-router-dom';

export const Ranking = () => {
  const { tournamentId } = useParams();
  const { loading, failed, tournament, teams, groups } =
    useRanking(tournamentId);

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
    <div className="lg:max-w-screen-2xl mx-auto border border-b-0 mt-15 min-h-screen rounded-t-lg">
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
          <PageSection className="pt-2 px-2 lg:px-20 pb-5">
            <Card>
              {tournament.type === 'swiss' ? (
                <CardHeader>
                  <CardTitle>Classement des participants</CardTitle>
                  <CardDescription>
                    Se met à jour après chaque tour
                  </CardDescription>
                </CardHeader>
              ) : (
                <CardHeader>
                  <CardTitle>Classement préliminaire</CardTitle>
                  <CardDescription>
                    {tournament.hasGroups
                      ? 'Phases de groupes'
                      : 'Tour préliminaire'}
                  </CardDescription>
                </CardHeader>
              )}

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
            </Card>
          </PageSection>
        </TabsContent>
        <TabsContent value="matches">
          <PageSection className="pt-2 px-2 lg:px-10 lg:pl-20">
            <h1>Matches</h1>
          </PageSection>
        </TabsContent>
      </Tabs>
    </div>
  );
};
