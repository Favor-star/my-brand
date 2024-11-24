import {
  IconBriefcase,
  IconFolderCode,
  IconHome,
  IconMenu,
  IconNotebook,
  IconUserHeart
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Button } from './common/button';
import { cn } from '../utils';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HeaderIcon from './common/HeaderIcon';

interface HeaderProps {
  isTextWhite?: boolean;
}
const Header = ({ isTextWhite }: HeaderProps) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <section className="w-full flex items-start justify-center mt-5 mb-5 px-4 bg-inherit relative">
      <NavbarMenu navOpen={navOpen} />
      <div
        className={cn(
          'w-full  max-w-screen-lg  bg-inherit flex flex-row justify-between items-center px-3',
          isTextWhite ? 'text-white' : 'text-blackCustom'
        )}
      >
        <span className="flex gap-2 items-center w-3/4 text-inherit">
          <p className="p-2 w-10 h-10 rounded-md border border-inherit font-bold text-2xl flex flex-col justify-center items-center aspect-square">
            F
          </p>
          <a href="mailto:favoureliab@gmail.com" className="text-lg font-medium text-inherit">
            hire@gmail.com
          </a>
        </span>
        <nav className=" flex-1 hidden items-center gap-4 md:flex text-inherit justify-between ">
          <ul className="hidden lg:flex items-center flex-1 justify-between gap-4 list-none text-inherit">
            {/* <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  'font-medium capitalize cursor-pointer pb-1 relative header__links',
                  isActive ? 'border-b-2 border-blackCustom' : 'border-none'
                )
              }
            >
              Home
            </NavLink> */}
            {/* <NavLink
              to="/about"
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  'font-medium capitalize cursor-pointer text-nowrap pb-1 relative header__links ',
                  isActive ? 'border-b-2' : 'border-none'
                )
              }
            >
              About Me
            </NavLink> */}
            {/* <NavLink
              to="/portfolio"
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  'font-medium capitalize cursor-pointer pb-1',
                  isActive ? 'border-b-2' : 'border-none'
                )
              }
            >
              Portfolio
            </NavLink> */}
            {/* <NavLink
              to="/my-blog"
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  'font-medium capitalize cursor-pointer text-nowrap pb-1',
                  isActive ? 'border-b-2' : 'border-none'
                )
              }
            >
              My Blog
            </NavLink> */}
            {/* <NavLink
              to="/services"
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  'font-medium capitalize cursor-pointer pb-1',
                  isActive ? 'border-b-2' : 'border-none'
                )
              }
            >
              Services
            </NavLink> */}
            <NavLink
              to={'/'}
              className={({ isActive }: { isActive: boolean }) =>
                cn(isActive ? ' rounded-full' : '')
              }
            >
              {({ isActive }) => (
                <HeaderIcon
                  title="Home"
                  icon={<IconHome stroke={1.25} size={25} />}
                  isActive={isActive}
                  isTextWhite={isTextWhite}
                />
              )}
            </NavLink>
            <NavLink
              to={'/about'}
              className={({ isActive }: { isActive: boolean }) =>
                cn(isActive ? ' rounded-full' : '')
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <HeaderIcon
                  title="About Me"
                  icon={<IconUserHeart stroke={1.25} size={25} />}
                  isActive={isActive}
                  isTextWhite={isTextWhite}
                />
              )}
            </NavLink>
            <NavLink
              to={'/portfolio'}
              className={({ isActive }: { isActive: boolean }) =>
                cn(isActive ? ' rounded-full' : '')
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <HeaderIcon
                  title="Portfolio"
                  icon={<IconFolderCode stroke={1.25} size={25} />}
                  isActive={isActive}
                  isTextWhite={isTextWhite}
                />
              )}
            </NavLink>
            <NavLink
              to={'/services'}
              className={({ isActive }: { isActive: boolean }) =>
                cn(isActive ? ' rounded-full' : '')
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <HeaderIcon
                  title="Services"
                  icon={<IconBriefcase stroke={1.25} size={25} />}
                  isActive={isActive}
                  isTextWhite={isTextWhite}
                />
              )}
            </NavLink>
            <NavLink
              to={'/my-blog'}
              className={({ isActive }: { isActive: boolean }) =>
                cn(isActive ? ' rounded-full shadow-md' : '')
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <HeaderIcon
                  title="Blog"
                  icon={<IconNotebook stroke={1.25} size={25} />}
                  isActive={isActive}
                  isTextWhite={isTextWhite}
                />
              )}
            </NavLink>
          </ul>
          <motion.span
            className="text-inherit"
            whileHover={{
              scale: 1.1
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', damping: 400, stiffness: 10 }}
            onClick={() => {
              setNavOpen(!navOpen);
              console.log('CLicked');
            }}
          >
            <IconMenu className="text-inherit lg:hidden " size={30} strokeWidth={1} />
          </motion.span>
          <Button className="">Hire Me!</Button>
        </nav>
        <motion.span
          className="text-inherit w-fit"
          whileHover={{
            scale: 1.1
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', damping: 17, stiffness: 400 }}
          onClick={() => {
            setNavOpen(!navOpen);
            console.log('CLicked');
          }}
        >
          <IconMenu className="text-inherit md:hidden " size={30} strokeWidth={1} />
        </motion.span>
      </div>
    </section>
  );
};

export default Header;

const NavbarMenu = ({ navOpen = true }: { navOpen?: boolean }) => {
  //@ts-ignore
  const [sidebarOpen, setSidebarOpen] = useState(navOpen);
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scroll
    } else {
      document.body.style.overflow = ''; // Re-enable scroll
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);
  return (
    <motion.div
      className="w-full bg-blackCustom/30 fixed top-20 right-0 overflow-hidden  h-screen z-30 "
      animate={
        navOpen
          ? {
              width: '100%'
            }
          : { width: 0 }
      }
      onClick={() => setSidebarOpen(false)}
      transition={{ duration: 0.3 }}
    ></motion.div>
  );
};
