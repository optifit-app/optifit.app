import { ChangelogEntries } from '@/components/ui/changelog';
import icon from '@/assets/images/icon.png';
import { type FC, useEffect, useState } from 'react';
import { parseNotionChangelog } from '@/lib/notion.ts';

type ChangelogProps = object;

const Changelog: FC<ChangelogProps> = () => {
  const [raw, setRaw] = useState<any[]>([]);

  useEffect(() => {
    const initChangelog = async (): Promise<void> => {
      const request = await fetch('https://api.optifit.app/changelog');
      const result = await request.json();

      const parsed = parseNotionChangelog(result.blocks);
      setRaw(parsed);
    };

    void initChangelog();
  }, []);

  return (
    <div className="px-3">
      <div className="flex flex-col items-center gap-3 mt-10">
        <div className="flex items-center gap-5">
          <img src={icon} alt="icon" className="h-18 w-18" />
          <div>
            <h1 className="text-3xl font-semibold text-pretty">Changelog</h1>
            <h2 className="text-sm text-pretty">
              {new Date().toLocaleString('fr-CH', {
                dateStyle: 'full',
              })}
            </h2>
          </div>
        </div>
        <p className="text-lg text-pretty text-muted-foreground">
          Suivez les dernières mises à jour de Optifit
        </p>
      </div>
      <ChangelogEntries entries={raw} />
    </div>
  );
};

export default Changelog;
