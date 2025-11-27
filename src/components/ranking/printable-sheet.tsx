import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Group, Tournament } from '@/types/ranking';
import {
  formatDate,
  formatMatchForDisplay,
  getFinalLabel,
  getPhaseLabel,
  getAvailableBreaks,
} from '@/lib/utils';
import { Calendar, MapPin } from 'lucide-react';
import { forwardRef, useMemo } from 'react';
import icon from '@/assets/images/icon.png';

interface PrintableSheetProps {
  tournament: Tournament;
}

export const PrintableSheet = forwardRef<HTMLDivElement, PrintableSheetProps>(
  ({ tournament }, ref) => {
    const preliminaryPhaseMatches = tournament.hasGroups
      ? (tournament.groups
          ?.flatMap((group) => (group as Group & { matches: any[] }).matches)
          .filter((match) => match !== undefined)
          .sort((a, b) => (a?.startAfter ?? 0) - (b?.startAfter ?? 0)) ?? [])
      : (tournament.matches?.sort(
          (a, b) => (a.startAfter ?? 0) - (b.startAfter ?? 0),
        ) ?? []);

    const preliminaryPhaseBreaks = getAvailableBreaks(
      preliminaryPhaseMatches,
      tournament.breaks ?? [],
    );
    const preliminaryPhaseMatchesWithBreaks = [
      ...preliminaryPhaseMatches,
      ...preliminaryPhaseBreaks,
    ].sort((a, b) => (a.startAfter ?? 0) - (b.startAfter ?? 0));

    const allMatches = [
      ...preliminaryPhaseMatches,
      ...(tournament.phases ?? []).flatMap((p) => p.matches),
    ];

    const fieldNameByNumber = useMemo(() => {
      const m = new Map<number, string>();
      (tournament.fields ?? []).forEach((f) => {
        if (f.customName) m.set(f.fieldNumber, f.customName);
      });
      return m;
    }, [tournament.fields]);

    const getFieldLabel = (fieldNumber?: number) => {
      if (fieldNumber == null) return '-';
      return fieldNameByNumber.get(fieldNumber) ?? `Terrain ${fieldNumber}`;
    };

    return (
      <div ref={ref} className="hidden print:block">
        <div className="table-container">
          <header className="mb-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <img src={icon} alt="Logo" className="w-17 h-17" />
                <div className="text-left">
                  <h1 className="m-0 text-2xl font-semibold">
                    Optifit <span className="text-xs font-normal">Arena</span>
                  </h1>
                  <p className="text-sm m-0">
                    Gestion de tournois simple et intuitive
                  </p>
                  <p className="text-sm m-0">www.optifit.app</p>
                </div>
              </div>
              {tournament?.rankingQrCodeImage && (
                <img
                  src={tournament.rankingQrCodeImage}
                  alt="qr"
                  className="w-28 h-28"
                />
              )}
            </div>
            <h1 className="text-2xl font-bold">{tournament?.name}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Calendar className="w-4 h-4" />
              {formatDate(new Date(tournament?.date ?? ''))}
            </div>
            {tournament.location && (
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin className="w-4 h-4" />
                {tournament.location}
              </div>
            )}
          </header>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 mt-20">
            <img src={icon} alt="icon" className="w-5 h-5" />
            Équipes
          </h3>
          {tournament.hasGroups ? (
            <div className="grid grid-cols-2 gap-3">
              {tournament.groups?.map((group, key) => (
                <Table
                  key={key}
                  className="flex-1 break-inside-avoid break-after-avoid-page"
                >
                  <TableHeader>
                    <TableRow>
                      <TableHead>{group.name}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {group.teams?.map((team, i) => (
                      <TableRow key={i}>
                        <TableCell className="flex items-center gap-2">
                          {tournament.teamsHaveColors && (
                            <svg
                              style={{
                                height: '1.2em',
                                width: '1.2em',
                                border: '1px solid #28282820',
                                borderRadius: '4px',
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              fill={team.color}
                            >
                              <rect width="100" height="100" />
                            </svg>
                          )}
                          {team.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ))}
            </div>
          ) : (
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Équipe</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tournament.teams?.map((team, i) => (
                  <TableRow key={i}>
                    <TableCell className="flex items-center gap-2">
                      {tournament.teamsHaveColors && (
                        <svg
                          style={{
                            height: '1.2em',
                            width: '1.2em',
                            border: '1px solid #28282820',
                            borderRadius: '4px',
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                          fill={team.color}
                        >
                          <rect width="100" height="100" />
                        </svg>
                      )}
                      {team.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
        <div className="table-container">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 mt-20">
            <img src={icon} alt="icon" className="w-5 h-5" />
            Phase préliminaire
          </h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Début</TableHead>
                <TableHead>Équipes</TableHead>
                <TableHead></TableHead>
                <TableHead>Terrain</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {preliminaryPhaseMatchesWithBreaks.map((m, index) => {
                if (m?.isBreak) {
                  return (
                    <TableRow key={index}>
                      <TableCell
                        colSpan={6}
                        className="text-center font-semibold"
                      >
                        {m.title}
                      </TableCell>
                    </TableRow>
                  );
                }

                const match = formatMatchForDisplay(m, tournament);
                const fieldLabel = getFieldLabel(match.fieldNumber);

                return (
                  <TableRow key={index}>
                    <TableCell>
                      {allMatches.findIndex((mm) => mm?.id === match.id) + 1}
                    </TableCell>
                    <TableCell>
                      {match?.startAt
                        ? `${match.startAt.hours
                            .toString()
                            .padStart(2, '0')}h${match.startAt.minutes
                            .toString()
                            .padStart(2, '0')}`
                        : `${tournament.startTime.hours
                            .toString()
                            .padStart(2, '0')}h${tournament.startTime.minutes
                            .toString()
                            .padStart(2, '0')}`}
                    </TableCell>
                    <TableCell className="flex items-center gap-5">
                      <span className="flex items-center gap-2">
                        {tournament.teamsHaveColors &&
                          (match.team1Color?.length ?? 0) > 0 && (
                            <svg
                              style={{
                                height: '1.2em',
                                width: '1.2em',
                                border: '1px solid #28282820',
                                borderRadius: '4px',
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              fill={match.team1Color}
                            >
                              <rect width="100" height="100" />
                            </svg>
                          )}
                        {match.team1}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center gap-2">
                        {tournament.teamsHaveColors &&
                          (match.team2Color?.length ?? 0) > 0 && (
                            <svg
                              style={{
                                height: '1.2em',
                                width: '1.2em',
                                border: '1px solid #28282820',
                                borderRadius: '4px',
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 100 100"
                              fill={match.team2Color}
                            >
                              <rect width="100" height="100" />
                            </svg>
                          )}
                        {match.team2}
                      </span>
                    </TableCell>
                    <TableCell>{fieldLabel}</TableCell>
                    <TableCell className="text-center">
                      {!match?.alreadyPlayed
                        ? '-'
                        : `${match.score[0]} - ${match.score[1]}`}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        {tournament.phases?.map((phase, key) => {
          const breaks = getAvailableBreaks(
            phase.matches ?? [],
            tournament.breaks ?? [],
          );
          const phaseMatchesAndBreaks = [...(phase.matches ?? []), ...breaks]
            .filter((m) => m !== undefined)
            .sort((a, b) => (a.startAfter ?? 0) - (b.startAfter ?? 0));

          return (
            <div key={key} className="mt-10 table-container">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                <img src={icon} alt="icon" className="w-5 h-5" />
                {getPhaseLabel(phase.type, phase.matches)}
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    {(phase.type === 'ranking-interphase' ||
                      phase.type === 'final') && (
                      <TableHead>Étiquette</TableHead>
                    )}
                    <TableHead>Début</TableHead>
                    <TableHead>Équipe 1</TableHead>
                    <TableHead>Équipe 2</TableHead>
                    <TableHead>Terrain</TableHead>
                    <TableHead>Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {phaseMatchesAndBreaks.map((m, index) => {
                    if (m.isBreak) {
                      return (
                        <TableRow key={index}>
                          <TableCell
                            colSpan={
                              6 +
                              (phase.type === 'ranking-interphase' ||
                              phase.type === 'final'
                                ? 1
                                : 0)
                            }
                            className="text-center font-semibold"
                          >
                            {m.title}
                          </TableCell>
                        </TableRow>
                      );
                    }

                    const match = formatMatchForDisplay(m, tournament);
                    const fieldLabel = getFieldLabel(match.fieldNumber);

                    return (
                      <TableRow key={index}>
                        <TableCell>
                          {allMatches.findIndex((mm) => mm?.id === match.id) +
                            1}
                        </TableCell>

                        {(phase.type === 'ranking-interphase' ||
                          phase.type === 'final') && (
                          <TableCell>
                            {getFinalLabel(
                              index,
                              phase.matches?.length ?? 0,
                              phase.type === 'ranking-interphase',
                              tournament,
                            ) ?? '-'}
                          </TableCell>
                        )}

                        <TableCell>
                          {match?.startAt
                            ? `${match.startAt.hours
                                .toString()
                                .padStart(2, '0')}h${match.startAt.minutes
                                .toString()
                                .padStart(2, '0')}`
                            : `${tournament.startTime.hours
                                .toString()
                                .padStart(
                                  2,
                                  '0',
                                )}h${tournament.startTime.minutes
                                .toString()
                                .padStart(2, '0')}`}
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-2">
                            {tournament.teamsHaveColors &&
                              (match.team1Color?.length ?? 0) > 0 && (
                                <svg
                                  style={{
                                    height: '1.2em',
                                    width: '1.2em',
                                    border: '1px solid #28282820',
                                    borderRadius: '4px',
                                  }}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 100 100"
                                  fill={match.team1Color}
                                >
                                  <rect width="100" height="100" />
                                </svg>
                              )}
                            {match.team1}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-2">
                            {tournament.teamsHaveColors &&
                              (match.team2Color?.length ?? 0) > 0 && (
                                <svg
                                  style={{
                                    height: '1.2em',
                                    width: '1.2em',
                                    border: '1px solid #28282820',
                                    borderRadius: '4px',
                                  }}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 100 100"
                                  fill={match.team2Color}
                                >
                                  <rect width="100" height="100" />
                                </svg>
                              )}
                            {match.team2}
                          </span>
                        </TableCell>
                        <TableCell>{fieldLabel}</TableCell>
                        <TableCell className="text-center">
                          {!match?.alreadyPlayed
                            ? '-'
                            : `${match.score[0]} - ${match.score[1]}`}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          );
        })}
      </div>
    );
  },
);

PrintableSheet.displayName = 'PrintableSheet';
