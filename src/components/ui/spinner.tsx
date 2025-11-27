import type { FC } from 'react';

type SpinnerProps = object;

const Spinner: FC<SpinnerProps> = () => (
  <div className="w-7 h-7 border-4 border-primary/30 border-t-primary rounded-full animate-spin duration-100" />
);

export { Spinner };
