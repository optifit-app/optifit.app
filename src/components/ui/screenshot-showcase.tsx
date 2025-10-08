type Props = { left: string; center: string; right: string };

export default function ScreenshotsShowcase({ left, center, right }: Props) {
  return (
    <section className="relative w-full pt-10 pb-0 px-5">
      <div className="mx-auto max-w-[2000px] w-full md:px-4">
        {/* --- MOBILE --- */}
        <div className="lg:hidden w-full space-y-6">
          <img
            src={center}
            alt=""
            loading="lazy"
            className="w-full max-w-full h-auto rounded-[10px] shadow-2xl ring-1 ring-black/10 bg-white object-contain"
          />
          <img
            src={left}
            alt=""
            loading="lazy"
            className="w-full max-w-full h-auto rounded-[10px] shadow-xl ring-1 ring-black/10 bg-white object-contain"
          />
          <img
            src={right}
            alt=""
            loading="lazy"
            className="w-full max-w-full h-auto rounded-[10px] shadow-xl ring-1 ring-black/10 bg-white object-contain"
          />
        </div>

        {/* --- DESKTOP --- */}
        <div className="hidden lg:flex items-end justify-center w-full max-w-full">
          <img
            src={left}
            alt=""
            loading="lazy"
            className="w-[clamp(320px,34vw,760px)] rounded-[8px] shadow-2xl ring-1 ring-black/10 bg-white
                       -rotate-2 -mr-8 lg:-mr-36 translate-y-6 select-none"
          />
          <img
            src={center}
            alt=""
            loading="lazy"
            className="w-[clamp(480px,52vw,1200px)] rounded-[8px]
                       shadow-[0_40px_80px_-10px_rgba(0,0,0,.3)]
                       ring-1 ring-black/10 bg-white z-10 select-none"
          />
          <img
            src={right}
            alt=""
            loading="lazy"
            className="w-[clamp(320px,34vw,760px)] rounded-[8px] shadow-2xl ring-1 ring-black/10 bg-white
                       rotate-2 -ml-8 lg:-ml-36 translate-y-6 select-none"
          />
        </div>
      </div>
    </section>
  );
}
