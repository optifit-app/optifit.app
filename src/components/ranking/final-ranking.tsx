import type { FinalRanking as FinalRankingObject } from '@/types/ranking';
import { Table, TableRow, TableCell } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import { ChevronDown, Trophy } from 'lucide-react';

interface FinalRankingProps {
  finalRanking?: FinalRankingObject;
  visible: boolean;
  teamsHaveColors?: boolean;
  finalRankingCollapsed: boolean;
  toggleFinalRankingCollapsed: () => void;
}

export const FinalRanking: FC<FinalRankingProps> = ({
  finalRanking,
  visible,
  teamsHaveColors,
  finalRankingCollapsed,
  toggleFinalRankingCollapsed,
}) => {
  if (!visible || !finalRanking) {
    return (
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
        <CardContent>
          <p>
            Vous pourrez consulter le classement final dès que le tournoi sera
            terminé.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
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
                  {teamsHaveColors && (team.color?.length ?? 0) > 0 && (
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
      )}
    </Card>
  );
};
