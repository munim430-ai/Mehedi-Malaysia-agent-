import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
  {
    variants: {
      variant: {
        gold: 'bg-gold/15 text-gold-dark',
        navy: 'bg-navy-900/8 text-navy-900 dark:bg-white/10 dark:text-white',
        teal: 'bg-teal/10 text-teal',
        outline: 'border border-navy-900/15 text-text-secondary dark:border-white/20 dark:text-slate-300',
      },
    },
    defaultVariants: {
      variant: 'navy',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
