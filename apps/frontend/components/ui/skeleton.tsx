import { cn } from '../../lib/utils';
  
  export const Skeleton = ({ className }: { className?: string }) => {
    return (
      <div
        className={cn(
          'animate-pulse rounded-xl bg-neutral-800/60',
          className
        )}
      />
    );
  };
  