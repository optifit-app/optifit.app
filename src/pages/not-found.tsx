import icon from '@/assets/images/icon.png';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  const handleBackHome = () => (window.location.href = window.location.origin);

  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <img src={icon} alt="icon" className="h-12" />
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-bold">Page introuvable</h1>
        <h2 className="text-xl font-medium text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </h2>
      </div>
      <Button variant="secondary" onClick={handleBackHome}>
        Revenir en lieu sûr <Home />
      </Button>
    </div>
  );
};

export default NotFound;
