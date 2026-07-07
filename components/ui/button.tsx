import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        gold: 'bg-gold text-navy-900 shadow-gold hover:bg-gold-dark hover:-translate-y-0.5 active:translate-y-0',
        navy: 'bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5 active:translate-y-0',
        outline:
          'border border-white/40 text-white bg-transparent hover:bg-white/10 hover:-translate-y-0.5',
        'outline-navy':
          'border border-navy-900/20 text-navy-900 bg-transparent hover:bg-navy-900/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10',
        teal: 'bg-teal text-white hover:bg-teal-light hover:-translate-y-0.5',
        ghost: 'text-text-secondary hover:text-navy-900 dark:hover:text-white',
        link: 'text-gold underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-7 py-3',
        sm: 'h-10 px-5 text-sm',
        lg: 'h-14 px-9 text-base',
        icon: 'h-11 w-11 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'navy',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
