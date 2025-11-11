import { useChangelog } from '@/components/providers/changelog.provider';
import { PageSection } from '@/components/ui/page-section';
import { PageSeparation } from '@/components/ui/page-separation';

export const Changelog = () => {
  const { entries } = useChangelog();

  return (
    <div className="lg:max-w-screen-2xl mx-auto border border-b-0 mt-15 min-h-screen rounded-t-lg">
      <PageSection className="pt-15 px-0">
        <div className="px-10 lg:px-20 mb-15">
          <span className="text-xs font-medium uppercase text-muted-foreground">
            Dernières mises à jour
          </span>
          <h2 className="text-4xl font-bold">Changelog</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Suivez les dernières mises à jour de Optifit.
          </p>
        </div>
      </PageSection>
      <PageSeparation />
      {entries.map((entry, index) => (
        <div key={index}>
          <PageSection className="py-15 px-10 lg:px-20">
            <span className="text-xs font-medium uppercase text-muted-foreground">
              {entry.date}
            </span>
            <h2 className="text-4xl font-bold">{entry.title}</h2>
            <p className="text-lg text-muted-foreground mt-2">
              {entry.description}
            </p>
            {entry.items && entry.items.length > 0 && (
              <ol className="mt-4 ml-4 space-y-1.5 text-sm text-muted-foreground md:text-base">
                {entry.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="list-disc">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </PageSection>
          {index !== entries.length - 1 && <PageSeparation />}
        </div>
      ))}
    </div>
  );
};
