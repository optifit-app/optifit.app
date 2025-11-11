import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  items?: FaqItem[];
}

const faqItems = [
  {
    id: 'faq-1',
    question: 'L’application fonctionne-t-elle sur mobile?',
    answer:
      'Oui. Optifit fonctionne directement dans votre navigateur, sur ordinateur, tablette ou smartphone. Aucune installation n’est nécessaire : vous pouvez simplement ajouter un raccourci sur votre écran d’accueil, comme une application native.',
  },
  {
    id: 'faq-2',
    question: 'Peut-on gérer plusieurs tournois à la fois?',
    answer:
      'Oui, vous pouvez gérer plusieurs tournois depuis votre compte. Chaque tournoi possède sa propre configuration : équipes, terrains, horaires et scores sont indépendants.',
  },
  {
    id: 'faq-3',
    question: 'Les classements sont-ils calculés automatiquement?',
    answer:
      'Tout à fait. Optifit calcule automatiquement les points, la différence de buts, le classement des groupes et les qualifications pour les phases finales. Les tableaux se mettent à jour instantanément dès que vous saisissez un score.',
  },
  {
    id: 'faq-4',
    question: 'Peut-on partager les résultats en ligne?',
    answer:
      'Oui. Chaque tournoi dispose d’un lien public que vous pouvez partager avec les clubs, joueurs et spectateurs. Les résultats et classements s’affichent en direct, sans qu’il soit nécessaire de créer un compte.',
  },
  {
    id: 'faq-5',
    question: 'Proposez-vous une démo?',
    answer:
      'Oui. Vous pouvez réserver une démo pour découvrir comment Optifit peut vous faire gagner du temps. Écrivez-nous à demo@optifit.app pour fixer un créneau.',
  },
  {
    id: 'faq-6',
    question: 'Où sont stockées les données?',
    answer:
      'Toutes les données sont hébergées sur des serveurs sécurisés en Suisse. Vos tournois, équipes et résultats sont sauvegardés automatiquement et restent votre propriété.',
  },
  {
    id: 'faq-7',
    question: 'Les données sont-elles partagées?',
    answer:
      'Non. Optifit ne partage aucune donnée avec des tiers. Nous respectons la Loi fédérale sur la protection des données (LPD) et le RGPD européen. Vous pouvez à tout moment demander la suppression ou l’export de vos données.',
  },
];

const Faq = ({ items = faqItems }: FaqProps) => {
  return (
    <Accordion type="single" collapsible className="mt-3">
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
  );
};

export { Faq };
