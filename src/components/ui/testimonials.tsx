import { useEffect, useRef, useState } from 'react';

export type Reference = {
  name: string;
  picture: string;
  subtitle: string;
  quote: string;
};

export function Testimonials({
  references,
  intervalMs = 3500,
  pauseOnHover = true,
}: {
  references: Reference[];
  intervalMs?: number;
  pauseOnHover?: boolean;
}) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hoverRef = useRef(false);

  const count = references?.length ?? 0;

  const start = () => {
    if (timerRef.current || count <= 1) return;
    timerRef.current = setInterval(
      () => {
        if (hoverRef.current && pauseOnHover) return;
        setActive((i) => (i + 1) % count);
      },
      Math.max(1200, intervalMs),
    );
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    start();
    return stop;
  }, [count, intervalMs, pauseOnHover]);

  const onMouseEnter = () => {
    hoverRef.current = true;
  };
  const onMouseLeave = () => {
    hoverRef.current = false;
  };

  if (!count) return null;

  return (
    <section
      className="pt-5 pb-15 md:pb-24"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-roledescription="carousel"
      aria-label="Témoignages"
    >
      <div className="container max-w-5xl px-6 mx-auto">
        <div className="relative mt-10 md:mt-12 min-h-[260px] md:min-h-[280px]">
          {references.map((ref, idx) => (
            <article
              key={idx}
              className={`absolute inset-0 mx-auto flex max-w-3xl flex-col items-center text-center transition-all duration-700 ease-in-out
                ${idx === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
              aria-hidden={idx !== active}
            >
              <p className="mb-8 md:mb-10 max-w-3xl px-2 text-base md:text-2xl font-medium">
                &ldquo;{ref.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  alt={ref.name}
                  src={ref.picture}
                  className="h-20 w-auto rounded-lg border"
                />
                <div className="text-left">
                  <p className="text-sm md:text-lg font-semibold leading-tight">
                    {ref.name}
                  </p>
                  <p className="text-xs md:text-lg text-muted-foreground leading-tight">
                    {ref.subtitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {count > 1 && (
          <div
            className="mt-6 flex justify-center gap-2"
            role="tablist"
            aria-label="Changer de témoignage"
          >
            {references.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === active}
                aria-controls={`testimonial-slide-${i}`}
                className={`h-2.5 w-2.5 rounded-full transition-opacity ${
                  i === active ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                } bg-foreground/80`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
