import type { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { formatRankingCriterion } from '@/lib/utils';

interface RankingCriteriaProps {
  rankingCriteria: string[];
}

export const RankingCriteria: FC<RankingCriteriaProps> = ({
  rankingCriteria,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>Critères de classement</CardTitle>
      <CardDescription>
        Pour classer les équipes, les critères sont pris dans l'ordre suivant
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-1">
      {rankingCriteria.map((criterion, index) => (
        <span key={index} className="text-muted-foreground">
          <span className="text-foreground font-medium">{index + 1}.</span>{' '}
          {formatRankingCriterion(criterion)}
        </span>
      ))}
    </CardContent>
  </Card>
);
