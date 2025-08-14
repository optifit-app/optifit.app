interface Change {
  title: string;
  description: string;
  image: string;
}

interface LatestChangesProps {
  heading: string;
  description: string;
  change1?: Change;
  change2?: Change;
  change3?: Change;
  change4?: Change;
}

const LatestChanges = ({
  heading,
  description,
  change1,
  change2,
  change3,
  change4,
}: LatestChangesProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-24 flex flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
            {heading}
          </h1>
          <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
            {description}
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">
            <div className="relative flex flex-col lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-r lg:border-b-0">
                <h2 className="text-xl font-semibold">{change1?.title}</h2>
                <p className="text-muted-foreground">{change1?.description}</p>
                <img
                  src={change1?.image}
                  alt={change1?.title}
                  className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-2/5">
                <h2 className="text-xl font-semibold">{change2?.title}</h2>
                <p className="text-muted-foreground">{change2?.description}</p>
                <img
                  src={change2?.image}
                  alt={change2?.title}
                  className="mt-8 aspect-[1.45] h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-r lg:border-b-0">
                <h2 className="text-xl font-semibold">{change3?.title}</h2>
                <p className="text-muted-foreground">{change3?.description}</p>
                <img
                  src={change3?.image}
                  alt={change3?.title}
                  className="mt-8 aspect-[1.45] h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <h2 className="text-xl font-semibold">{change4?.title}</h2>
                <p className="text-muted-foreground">{change4?.description}</p>
                <img
                  src={change4?.image}
                  alt={change4?.title}
                  className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LatestChanges };
