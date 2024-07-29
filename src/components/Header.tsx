import { IconMenu2 } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Button } from './common/button';
import { cn } from '../utils';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  isTextWhite?: boolean;
}
const Header = ({ isTextWhite }: HeaderProps) => {
  return (
    <section className="w-full flex items-start justify-center mt-5 mb-5 px-4 bg-inherit ">
      <div
        className={cn(
          'w-full  max-w-screen-xl  bg-inherit flex flex-row justify-between',
          isTextWhite ? 'text-white' : 'text-blackCustom'
        )}
      >
        <span className="flex gap-2 items-center w-1/2 text-inherit">
          <p className="text-blueCustom font-bold text-2xl">F</p>
          <a href="mailto:favoureliab@gmail.com" className="text-lg font-medium text-inherit">
            hire@gmail.com
          </a>
        </span>
        <nav className=" flex-1 hidden items-center gap-5 md:flex text-inherit">
          <ul className="flex items-center flex-1 justify-between gap-3 list-none text-inherit">
            <NavLink
              to="about"
              className={({ isActive }: { isActive: boolean }) =>
                cn('font-medium capitalize cursor-pointer pb-1', isActive ? 'border-b-2' : 'border-none')
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }: { isActive: boolean }) =>
                cn('font-medium capitalize cursor-pointer pb-1', isActive ? 'border-b-2' : 'border-none')
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/my-blog"
              className={({ isActive }: { isActive: boolean }) =>
                cn('font-medium capitalize cursor-pointer pb-1', isActive ? 'border-b-2' : 'border-none')
              }
            >
              My Blog
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }: { isActive: boolean }) =>
                cn('font-medium capitalize cursor-pointer pb-1', isActive ? 'border-b-2' : 'border-none')
              }
            >
              Services
            </NavLink>
          </ul>

          <Button className="text-sm">Hire Me!</Button>
        </nav>
        <motion.span
          className="text-inherit"
          whileHover={{
            translateY: -5,
            rotate: '-6deg',
            scale: 1.1
          }}
        >
          <IconMenu2 className="text-inherit md:hidden " size={45} strokeWidth={1} />
        </motion.span>
      </div>
    </section>
  );
};

export default Header;
