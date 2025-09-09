import {
  createContext,
  type FC,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { parseNotionChangelog } from '@/lib/notion';

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

interface ChangelogProviderProps {
  children: ReactNode;
}

interface ChangelogContextProps {
  entries: ChangelogEntry[];
}

const ChangelogContext = createContext<ChangelogContextProps | undefined>(
  undefined,
);

export const ChangelogProvider: FC<ChangelogProviderProps> = ({ children }) => {
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);

  useEffect(() => {
    const initChangelog = async (): Promise<void> => {
      const request = await fetch('https://api.arena.optifit.app/changelog');
      const result = await request.json();

      const parsed = parseNotionChangelog(result.blocks);
      setEntries(parsed);
    };

    void initChangelog();
  }, []);

  return (
    <ChangelogContext.Provider value={{ entries }}>
      {children}
    </ChangelogContext.Provider>
  );
};

export const useChangelog = (): ChangelogContextProps => {
  const changelogContext = useContext(ChangelogContext);

  if (!changelogContext) {
    throw new Error('useChangelog must be used inside a ChangelogProvider');
  }

  return changelogContext;
};
