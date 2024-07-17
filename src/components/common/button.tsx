import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  onHoverChange?: (isHovered: boolean) => void;
}

const buttonVariants = cva(
  'inline-flex gap-2 rounded-s-full rounded-e-full px-5 py-2 font-light text-nowrap',
  {
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
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, onHoverChange, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const handleHoverChange = useCallback(
      (isHovered: boolean) => {
        onHoverChange?.(isHovered);
      },
      [onHoverChange]
    );

    return (
      <motion.span
        whileHover={{
          translateY: [null, -5],
          scale: [null, 1.01, 1.03, 1.06],
          transition: { duration: 0.2 }
        }}
        className="w-fit"
        onMouseEnter={() => handleHoverChange(true)}
        onMouseLeave={() => handleHoverChange(false)}
      >
        <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
          {children}
        </Comp>
      </motion.span>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
