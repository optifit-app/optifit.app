import asf from '@/assets/images/logos/swiss-football.svg';
import acvf from '@/assets/images/logos/acvf.png';
import gdf from '@/assets/images/logos/gdf.png';
import ashb from '@/assets/images/logos/ASHB.png';

interface Logo {
  name: string;
  logo: string;
  className: string;
}

interface LogosProps {
  title?: string;
  subtitle?: string;
  logos?: Logo[];
}

const Logos = ({
  title = 'Ils utilisent déjà Optifit',
  subtitle = 'Ils nous font confiance pour gérer leurs tournois.',
  logos = [
    {
      name: 'ASF',
      logo: asf,
      className: 'h-17 w-auto',
    },
    {
      name: 'ACVF',
      logo: acvf,
      className: 'h-22 w-auto',
    },
    {
      name: 'Graines de Foot',
      logo: gdf,
      className: 'h-19 w-auto',
    },
    {
      name: 'AS Haute-Broye',
      logo: ashb,
      className: 'h-17 w-auto',
    },
  ],
}: LogosProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-1 text-muted-foreground">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.logo}
                alt={`${logo.name} logo`}
                width={109}
                height={48}
                className={logo.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos };
