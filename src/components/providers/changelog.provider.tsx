import {
  createContext,
  type FC,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { parseNotionChangelog } from '@/lib/notion';
import { useApi } from '@/lib/axios';

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
  const api = useApi();

  useEffect(() => {
    const initChangelog = async (): Promise<void> => {
      const result = await api.get<{ blocks: any }>('/changelog');

      const parsed = parseNotionChangelog(result.data.blocks);
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
