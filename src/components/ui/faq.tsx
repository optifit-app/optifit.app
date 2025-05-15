import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: 'faq-1',
    question: "Qu'est-ce que Optifit stocke comme données ?",
    answer:
      'Optifit stocke uniquement les données nécessaires à la gestion de vos tournois, telles que les équipes, les matchs et les résultats. Nous ne stockons pas de données personnelles sensibles.',
  },
  {
    id: 'faq-2',
    question: 'Où sont hébergées les données ?',
    answer:
      'Toutes les donnés sont hébergées en Suisse, dans les datacenters de Google à Zurich.',
  },
  {
    id: 'faq-3',
    question: 'Qui développe Optifit ?',
    answer:
      "Je m'appelle Gabriel, j’ai 17 ans et je suis originaire de la région de Lavaux-Oron, dans le canton de Vaud.\n" +
      'Je développe Optifit seul, avec l’objectif de proposer une solution simple et efficace pour gérer des tournois sportifs.\n' +
      'Je suis accompagné par socraft, une agence de conseil qui m’aide à faire évoluer le projet.',
  },
];

const Faq = ({
  heading = 'Frequently asked questions',
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = faqItems,
  supportHeading = 'Need more support?',
  supportDescription = 'Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.',
  supportButtonText = 'Contact Support',
  supportButtonUrl = 'https://www.shadcnblocks.com',
}: FaqProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto space-y-16">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60 cursor-pointer">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
          <div className="relative">
            <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
              <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
            <Avatar className="mb-4 size-16 border md:mb-5">
              <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" />
              <AvatarFallback>SU</AvatarFallback>
            </Avatar>
          </div>
          <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
            {supportHeading}
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
            {supportDescription}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button className="w-full sm:w-auto" asChild>
              <a href={supportButtonUrl} target="_blank">
                {supportButtonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq };
