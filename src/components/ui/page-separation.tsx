import { cn } from '@/lib/utils';

export const PageSeparation = ({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative h-35 w-full border border-l-0 border-r-0 overflow-hidden',
        className,
      )}
      id={id}
    >
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, var(--muted-foreground) 0 1px, transparent 1px 16px)',
          backgroundSize: '16px 16px',
          opacity: 0.15,
        }}
      />
    </div>
  );
};
