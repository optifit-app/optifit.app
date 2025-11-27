import { FinalRanking } from '@/components/ranking/final-ranking';
import { Phase } from '@/components/ranking/phase';
import { PreliminaryPhaseRanking } from '@/components/ranking/preliminary-phase-ranking';
import { RankingCriteria } from '@/components/ranking/ranking-criteria';
import { Button } from '@/components/ui/button';
import { PageSection } from '@/components/ui/page-section';
import { Spinner } from '@/components/ui/spinner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRanking } from '@/hooks/use-ranking';
import { formatDate } from '@/lib/utils';
import { CircleAlert, MapPin, Printer, RotateCcw } from 'lucide-react';
import { useEffect, useMemo, useState, useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { PrintableSheet } from '@/components/ranking/printable-sheet';
import { useReactToPrint } from 'react-to-print';

export const Ranking = () => {
  const [finalRankingCollapsed, setFinalRankingCollapsed] =
    useState<boolean>(true);
  const [printSheetLoading, setPrintSheetLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

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
    refetch,
  } = useRanking(searchParams.get('dev'), tournamentId);

  const printableSheetRef = useRef<HTMLDivElement>(null);

  const shouldHaveFinalRanking = useMemo(() => {
    return (
      tournament?.type !== 'swiss' && (tournament?.phases?.length ?? 0) > 0
    );
  }, [tournament]);

  const allPhasesMatches = useMemo(
    () =>
      (phases ?? [])
        .filter(
          (phase) =>
            phase.type === 'ranking-interphase' || phase.type === 'final',
        )
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

  const handleRefetch = () => void refetch();

  const printSheet = useReactToPrint({
    contentRef: printableSheetRef,
    documentTitle: `${tournament?.name} - Feuille du tournoi`,
    pageStyle: `
        @page { size: A4; }
        @media print {
          html, body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            background-color: #fff;
            padding: 0 10px 10px 10px;
            font-size: 80%;
          }
          .table-container {
            page-break-inside: avoid;
            padding: 20px 0 0 0;
          }
          table {
            border-radius: 20px;
          }
        }
      `,
    onAfterPrint: () => setPrintSheetLoading(false),
  });

  const handlePrintSheet = (): void => {
    setPrintSheetLoading(true);
    printSheet();
  };

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
      <PageSection className="pt-8 px-0 flex items-center justify-between">
        <div className="flex flex-col items-start gap-3 lg:flex-row lg:gap-6 lg:items-center px-5 lg:pl-20 mb-7">
          <img
            className="h-12 lg:h-20 rounded"
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
            <div className="flex items-center gap-3 mt-3">
              <Button
                variant="secondary"
                size="sm"
                className="text-sm"
                onClick={handleRefetch}
              >
                Rafraichir <RotateCcw />
              </Button>
              {tournament.type !== 'swiss' && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-sm"
                  onClick={handlePrintSheet}
                  loading={printSheetLoading}
                >
                  Imprimer la feuille du tournoi <Printer />
                </Button>
              )}
            </div>
          </div>
        </div>
      </PageSection>
      {tournament.type === 'swiss' ? (
        <PageSection className="pt-2 px-2 lg:px-20 pb-10 flex flex-col gap-3 items-stretch">
          <PreliminaryPhaseRanking swiss teams={teams} />
        </PageSection>
      ) : (
        <>
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
                    visible={
                      finalRanking !== undefined && finalRanking.length > 0
                    }
                    teamsHaveColors={tournament.teamsHaveColors}
                    finalRankingCollapsed={finalRankingCollapsed}
                    toggleFinalRankingCollapsed={toggleFinalRankingCollapsed}
                  />
                )}
                <PreliminaryPhaseRanking
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
                <Phase
                  phaseType="preliminary"
                  matches={matches ?? []}
                  tournament={tournament}
                  partialRoundRobin={
                    tournament.preliminaryPhaseBehavior ===
                    'partial-round-robin'
                  }
                  teams={teams ?? []}
                  allMatches={allMatches}
                />
                {phases?.map((phase, key) => (
                  <Phase
                    className="mt-5"
                    phaseType={phase.type}
                    matches={phase.matches}
                    tournament={tournament}
                    teams={teams ?? []}
                    allMatches={allMatches}
                    allPhasesMatches={allPhasesMatches}
                    key={key}
                  />
                ))}
              </PageSection>
            </TabsContent>
          </Tabs>
          <PrintableSheet tournament={tournament} ref={printableSheetRef} />
        </>
      )}
    </div>
  );
};
