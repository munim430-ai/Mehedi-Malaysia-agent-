import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            'flex h-12 w-full appearance-none rounded-xl border border-navy-900/10 bg-white px-4 py-2 pr-10 text-sm text-navy-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold dark:border-white/10 dark:bg-navy-800 dark:text-white',
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
      </div>
    );
  }
);
Select.displayName = 'Select';

export { Select };
