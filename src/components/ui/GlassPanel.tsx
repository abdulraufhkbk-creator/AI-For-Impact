import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function GlassPanel({
  children,
  className,
  strong = false,
}: {
  children: ReactNode;
  className?: string;
  strong?: boolean;
}) {
  return (
    <div className={cn(strong ? 'glass-strong' : 'glass', 'rounded-2xl', className)}>
      {children}
    </div>
  );
}
