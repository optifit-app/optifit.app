import type { FC } from 'react';

interface SpinnerProps {
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({ className }) => (
  <div className={`loader border-primary border-3 ${className}`} />
);

export { Spinner };
