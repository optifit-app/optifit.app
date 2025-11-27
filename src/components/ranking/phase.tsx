import MatchStatusBadge from '@/components/common/match-status-badge';
import type {
  Match,
  Phase as PhaseObject,
  Team,
  Tournament,
} from '@/types/ranking';
import type { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  formatMatchForDisplay,
  getFinalLabel,
  getPhaseLabel,
} from '@/lib/utils';

interface PhaseProps {
  phaseType: PhaseObject['type'] | 'preliminary';
  matches: Match[];
  tournament: Tournament;
  partialRoundRobin?: boolean;
  teams: Team[];
  allMatches: Match[];
  className?: string;
}

export const Phase: FC<PhaseProps> = ({
  phaseType,
  matches,
  tournament,
  partialRoundRobin,
  teams,
  allMatches,
  className,
}) => {
  const showTag =
    phaseType === 'ranking-interphase' ||
    (phaseType === 'final' && tournament.finalType !== 'simple');

  return (
    <Card className={className}>
      <CardHeader>
        {phaseType === 'preliminary' ? (
          <CardTitle className="flex items-center gap-3 flex-wrap">
            Tour préliminaire
            {partialRoundRobin && (
              <Tooltip>
                <TooltipTrigger>
                  <Badge className="bg-sky-500/10 text-sky-500 border-sky-500/20 flex justify-start items-center px-1.5 font-normal">
                    Mode restreint
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  Chaque équipe joue un nombre restreint de matchs pendant cette
                  phase.
                </TooltipContent>
              </Tooltip>
            )}
          </CardTitle>
        ) : (
          <CardTitle>{getPhaseLabel(phaseType, matches)}</CardTitle>
        )}
        <CardDescription>
          {matches?.length} match{(matches?.length ?? 0) > 0 && 's'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="text-[12px]">
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              {showTag && <TableHead>Étiquette</TableHead>}
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
              ?.sort((a, b) => (a.startAfter ?? 0) - (b.startAfter ?? 0))
              .map((match, index) => {
                const formatted = formatMatchForDisplay(match, tournament);

                return (
                  <TableRow key={index} className="first:border-t-0">
                    <TableCell>
                      {(allMatches?.findIndex((m) => m.id === match.id) ?? 0) +
                        1}
                    </TableCell>
                    {showTag && (
                      <TableCell>
                        <Badge variant="secondary">
                          {getFinalLabel(
                            0,
                            matches.length,
                            phaseType === 'ranking-interphase',
                            tournament,
                          )}
                        </Badge>
                      </TableCell>
                    )}
                    <TableCell>
                      <>
                        {match.startAt?.hours.toString().padStart(2, '0')}h
                        {match.startAt?.minutes.toString().padStart(2, '0')}
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
                          (teams?.find((t) => t.id === match.team1)?.color
                            ?.length ?? 0) > 0 && (
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
                          (teams?.find((t) => t.id === match.team2)?.color
                            ?.length ?? 0) > 0 && (
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
  );
};
