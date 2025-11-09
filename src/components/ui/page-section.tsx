import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export const PageSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={cn('w-full pt-10 pl-20', className)}>{children}</div>;
