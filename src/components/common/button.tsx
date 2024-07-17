import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva('inline-flex gap-2 rounded-s-full rounded-e-full px-5 py-2 font-light text-nowrap', {
  variants: {
    variant: {
      default: 'bg-blueCustom text-white',
      outline: 'bg-inherit text-blueCustom border border-blueCustom'
    },
    size: {
      default: 'text-lg font-light'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <motion.span
        whileHover={{
          translateY: [null, -5],
          scale: [null, 1.01, 1.03, 1.06],
          transition: { duration: 0.2 }
        }}
        className="w-fit"
      >
        <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
      </motion.span>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
