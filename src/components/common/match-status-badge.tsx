import type { Match } from '@/types/ranking';
import type { FC } from 'react';
import { Badge } from '@/components/ui/badge.tsx';
import { Check, Pause, X } from 'lucide-react';

interface MatchStatusBadgeProps {
  match?: Match;
  className?: string;
  running?: boolean;
}

const MatchStatusBadge: FC<MatchStatusBadgeProps> = ({
  match,
  className,
  running,
}) => {
  if (match?.alreadyPlayed) {
    return (
      <Badge className={`flex gap-2 bg-[#454ade08] text-primary ${className}`}>
        terminé
        <Check />
      </Badge>
    );
  }

  if (running || (match?.running && !match?.paused)) {
    return (
      <Badge
        className={`flex gap-2 bg-[#00a63e20] text-green-600 font-semibold relative ${className}`}
      >
        en cours
        <div className="bg-[#00a63e] rounded-full h-1 w-1 flex items-center justify-center" />
      </Badge>
    );
  }

  if (match?.paused) {
    return (
      <Badge className={`flex gap-2 bg-[#f6339a20] text-pink-500 ${className}`}>
        en pause
        <Pause />
      </Badge>
    );
  }

  return (
    <Badge className={`bg-sidebar text-sidebar-foreground/50 ${className}`}>
      pas commencé
      <X />
    </Badge>
  );
};

export default MatchStatusBadge;
