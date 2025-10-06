import { Spinner } from '@/components/ui/spinner.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/components/providers/theme-provider.tsx';
import { cn } from '@/lib/utils.ts';

interface Change {
  title: string;
  description: string;
  date: string;
  image?: string;
}

interface LatestChangesProps {
  heading: string;
  description: string;
  loading: boolean;
  change1?: Change;
  change2?: Change;
  change3?: Change;
  change4?: Change;
}

const LatestChanges = ({
  heading,
  description,
  loading,
  change1,
  change2,
  change3,
  change4,
}: LatestChangesProps) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <section className="pb-32 pt-10" id="latest-changes">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col items-start gap-3">
          <h1 className="text-2xl font-bold lg:max-w-3xl lg:text-3xl">
            {heading}
          </h1>
          <p className="text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
            {description}
          </p>
          <Button variant="link" onClick={() => navigate('/changelog')}>
            Voir le changelog
            <ArrowRight />
          </Button>
        </div>
        {loading ? (
          <Spinner className="h-12 w-12 border-5 mx-auto" />
        ) : (
          <div className="relative flex justify-center">
            <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full rounded-xl shadow overflow-hidden">
              <div className="relative flex flex-col lg:flex-row">
                <div className="bg-card border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-r lg:border-b-0">
                  <span className="flex items-center justify-center bg-muted px-3 py-1.5 w-max h-7 text-muted-foreground font-medium text-xs rounded-lg mb-2">
                    {change1?.date}
                  </span>
                  <h2 className="text-xl font-semibold">{change1?.title}</h2>
                  <p className="text-muted-foreground mt-2">
                    {change1?.description}
                  </p>
                  <img
                    src={change1?.image}
                    alt={change1?.title}
                    className={cn(
                      'mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]',
                      theme === 'dark' && 'opacity-55',
                    )}
                  />
                </div>
                <div className="bg-card flex flex-col justify-between p-10 lg:w-2/5">
                  <span className="flex items-center justify-center bg-muted px-3 py-1.5 w-max h-7 text-muted-foreground font-medium text-xs rounded-lg mb-2">
                    {change2?.date}
                  </span>
                  <h2 className="text-xl font-semibold">{change2?.title}</h2>
                  <p className="text-muted-foreground mt-2">
                    {change2?.description}
                  </p>
                  <img
                    src={change2?.image}
                    alt={change2?.title}
                    className={cn(
                      'mt-8 aspect-[1.45] h-full w-full object-cover',
                      theme === 'dark' && 'opacity-55',
                    )}
                  />
                </div>
              </div>
              <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
                <div className="bg-card border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-r lg:border-b-0">
                  <span className="flex items-center justify-center bg-muted px-3 py-1.5 w-max h-7 text-muted-foreground font-medium text-xs rounded-lg mb-2">
                    {change3?.date}
                  </span>
                  <h2 className="text-xl font-semibold">{change3?.title}</h2>
                  <p className="text-muted-foreground mt-2">
                    {change3?.description}
                  </p>
                  <img
                    src={change3?.image}
                    alt={change3?.title}
                    className={cn(
                      'mt-8 aspect-[1.45] h-full w-full object-cover',
                      theme === 'dark' && 'opacity-55',
                    )}
                  />
                </div>
                <div className="bg-card flex flex-col justify-between p-10 lg:w-3/5">
                  <span className="flex items-center justify-center bg-muted px-3 py-1.5 w-max h-7 text-muted-foreground font-medium text-xs rounded-lg mb-2">
                    {change4?.date}
                  </span>
                  <h2 className="text-xl font-semibold">{change4?.title}</h2>
                  <p className="text-muted-foreground mt-2">
                    {change4?.description}
                  </p>
                  <img
                    src={change4?.image}
                    alt={change4?.title}
                    className={cn(
                      'mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]',
                      theme === 'dark' && 'opacity-55',
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export { LatestChanges };
