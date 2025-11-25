import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Group, Team } from '@/types/ranking';
import { type FC, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PreliminaryPhaseRankingProps {
  swiss?: boolean;
  hasGroups?: boolean;
  teamsHaveColors?: boolean;
  groups?: Group[];
  teams?: Team[];
}

export const PreliminaryPhaseRanking: FC<PreliminaryPhaseRankingProps> = ({
  swiss,
  hasGroups,
  teamsHaveColors,
  groups,
  teams,
}) => {
  const [
    preliminaryPhaseRankingCollapsed,
    setPreliminaryPhaseRankingCollapsed,
  ] = useState<boolean>(false);

  const togglePreliminaryPhaseRankingCollapsed = () =>
    setPreliminaryPhaseRankingCollapsed(!preliminaryPhaseRankingCollapsed);

  return (
    <Card>
      <CardHeader>
        {swiss ? (
          <>
            <CardTitle>Classement des participants</CardTitle>
            <CardDescription>Se met à jour après chaque tour</CardDescription>
          </>
        ) : (
          <>
            <CardTitle>Classement préliminaire</CardTitle>
            <CardDescription>
              {hasGroups ? 'Phases de groupes' : 'Tour préliminaire'}
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
          {hasGroups ? (
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
                              {teamsHaveColors &&
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
                      {swiss ? 'Participant' : 'Équipe'}
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
                          {teamsHaveColors && (team.color?.length ?? 0) > 0 && (
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
  );
};
