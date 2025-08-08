import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Skeleton } from '@/components/ui/skeleton.tsx';

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

export interface Changelog1Props {
  title?: string;
  description?: string;
  entries?: ChangelogEntry[];
  className?: string;
}

const ChangelogEntries = ({ title, description, entries }: Changelog1Props) => {
  return (
    <section className="pb-32">
      <div className="container mx-auto">
        <div className="mx-auto">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mb-6 text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl space-y-16 md:mt-24 md:space-y-24">
          {entries?.length ? (
            <>
              {entries.map((entry, index) => (
                <div
                  key={index}
                  className="relative flex flex-col gap-4 md:flex-row md:gap-16"
                >
                  <div className="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                    {entry.version && (
                      <Badge variant="secondary" className="text-xs">
                        Version {entry.version}
                      </Badge>
                    )}
                    <span className="text-xs font-medium text-muted-foreground">
                      {entry.date}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="mb-3 text-lg leading-tight font-bold text-foreground/90 md:text-2xl">
                      {entry.title}
                    </h2>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {entry.description}
                    </p>
                    {entry.items && entry.items.length > 0 && (
                      <ul className="mt-4 ml-4 space-y-1.5 text-sm text-muted-foreground md:text-base">
                        {entry.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {entry.image && (
                      <img
                        src={entry.image}
                        alt={`${entry.version} visual`}
                        className="mt-8 w-full rounded-lg object-cover"
                      />
                    )}
                    {entry.button && (
                      <Button variant="link" className="mt-4 self-end" asChild>
                        <a href={entry.button.url} target="_blank">
                          {entry.button.text}{' '}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {Array.from({ length: 3 }).map((_, key) => (
                <div
                  key={key}
                  className="relative flex flex-col gap-4 md:flex-row md:gap-16"
                >
                  <div className="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                    <Skeleton className="h-10 w-50" />
                    <Skeleton className="h-10 w-50" />
                  </div>
                  <div className="flex flex-col">
                    <Skeleton className="h-15 w-100" />
                    <Skeleton className="h-80 w-100 mt-5" />
                    <Skeleton className="h-50 w-100 mt-5" />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export { ChangelogEntries };
