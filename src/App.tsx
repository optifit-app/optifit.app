import type { FC } from 'react';
import { Button } from '@/components/ui/button.tsx';

type AppProps = object;

const App: FC<AppProps> = () => {
  return (
    <Button variant="outline">Coucou</Button>
  );
};

export default App;
