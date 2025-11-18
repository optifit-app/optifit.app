import { Spinner } from '@/components/ui/spinner';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Ranking = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tournamentNotFound, setTournamentNotFound] = useState<boolean>(false);

  const { tournamentId } = useParams();

  if (loading) {
    return (
      <div className="lg:max-w-screen-2xl mx-auto border border-b-0 mt-15 rounded-t-lg">
        <div className="flex flex-col gap-5 items-center justify-center h-150">
          <Spinner />
          <span className="text-sm text-muted-foreground">
            Chargement des résultats...
          </span>
        </div>
      </div>
    );
  }

  return null;
};
