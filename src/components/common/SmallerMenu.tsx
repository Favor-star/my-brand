import { useState } from 'react';
import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '../../utils';
// import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import {  NavLink, useLocation } from 'react-router-dom';

import { motion, Variants } from 'framer-motion';
import {
  IconFolderCode,
  IconBriefcase,
  IconHome,
  IconNotebook,
  IconUserCode
} from '@tabler/icons-react';

const menuVariants: Variants = {
  closed: { opacity: 0, height: 0 },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const linkVariants: Variants = {
  closed: { opacity: 0, x: -20 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

const hamburgerVariants: Variants = {
  closed: {
    // rotate: 0,
    transition: { duration: 0.3 }
  },
  open: {
    // rotate: 180,
    transition: { duration: 0.3 }
  }
};

export default function SmallerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <motion.button
            variants={hamburgerVariants}
            animate={isOpen ? 'open' : 'closed'}
            initial={false}
          >
            <HamburgerMenu isOpen={isOpen} />
          </motion.button>
        </PopoverTrigger>
        <PopoverContent>
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            className="flex flex-col gap-2"
          >
            {menuItem.map(({ title, icon, href }, index) => (
              <motion.div
                key={title + index}
                variants={linkVariants}
                onClick={() => setIsOpen(false)}
              >
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    cn(
                      'p-2 w-full flex items-center justify-start gap-2 rounded-md ',
                      isActive
                        ? 'bg-blueCustom text-white'
                        : 'bg-inherit hover:bg-grayCustom transition-all'
                    )
                  }
                >
                  <span className=" flex items-center justify-center ">{icon}</span> {title}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

const HamburgerMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const location = useLocation();

  return (
    <nav>
      <button
        className={cn(
          'w-10 h-10 relative focus:outline-none ',
          location.pathname === '/' ? 'text-blackCustom' : 'text-grayCustom'
        )}
      >
        <span className="sr-only">Open main menu</span>
        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
            }`}
          />
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
              isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
            }`}
          />
        </div>
      </button>
    </nav>
  );
};
const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-xl  border bg-white p-2 text-blackCustom  shadow-lg outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const menuItem = [
  {
    title: 'Home',
    icon: <IconHome stroke={1.25} className="w-8 h-8 aspect-square" />,
    href: '/'
  },

  {
    title: 'About Me',
    icon: <IconUserCode stroke={1.25} className="w-8 h-8 aspect-square" />,
    href: '/about'
  },
  {
    title: 'Portfolio',
    icon: <IconFolderCode stroke={1.25} className="w-8 h-8 aspect-square" />,
    href: '/portfolio'
  },

  {
    title: 'Services',
    icon: <IconBriefcase stroke={1.25} className="w-8 h-8 aspect-square" />,
    href: '/services'
  },
  {
    title: 'Blog',
    icon: <IconNotebook stroke={1.25} className="w-8 h-8 aspect-square" />,
    href: '/my-blog'
  }
];
