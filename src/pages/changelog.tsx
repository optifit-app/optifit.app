import { ChangelogEntries } from '@/components/ui/changelog';
import icon from '@/assets/images/icon.png';
import { type FC, useEffect, useState } from 'react';
import { parseNotionChangelog } from '@/lib/notion.ts';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';

type ChangelogProps = object;

const Changelog: FC<ChangelogProps> = () => {
  const [raw, setRaw] = useState<any[]>([]);

  const navigate = useNavigate();

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
    <div className="px-10 flex flex-col gap-5 w-full items-center">
      <div className="flex flex-col gap-3 mt-10 mx-auto">
        <Button variant="link" className="mb-5" onClick={() => navigate('/')}>
          <ArrowLeft />
          Retour
        </Button>
        <div className="flex flex-col items-center gap-4">
          <img src={icon} alt="icon" className="h-18 w-18" />
          <h1 className="text-3xl font-semibold text-pretty">Changelog</h1>
        </div>
        <p className="text-lg text-pretty text-muted-foreground text-center">
          Suivez les dernières mises à jour de Optifit
        </p>
      </div>
      <ChangelogEntries entries={raw} />
    </div>
  );
};

export default Changelog;
