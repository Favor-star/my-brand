import {
  IconBriefcase,
  IconFolderCode,
  IconHome,
  IconNotebook,
  IconUserHeart
} from '@tabler/icons-react';
import { Button } from './common/button';
import { cn } from '../utils';
import { Link, NavLink } from 'react-router-dom';
import HeaderIcon from './common/HeaderIcon';
import SmallerMenu from './common/SmallerMenu';

interface HeaderProps {
  isTextWhite?: boolean;
}
const Header = ({ isTextWhite }: HeaderProps) => {
  return (
    <section className="w-full flex items-start justify-center mt-5 mb-5 px-4 bg-inherit relative">
      <div
        className={cn(
          'w-full  max-w-screen-lg  bg-inherit flex flex-row justify-between items-center px-3',
          isTextWhite ? 'text-white' : 'text-blackCustom'
        )}
      >
        <span className="flex gap-2 items-center w-3/4 text-inherit">
         <Link to={'/'}>
          <p className="p-2 w-10 h-10 rounded-md border border-inherit font-bold text-2xl flex flex-col justify-center items-center aspect-square">
            F
          </p></Link>
        
        <Link to={'mailto:favoureliab@gmail.com'} > <p
            className="text-lg font-medium text-inherit hidden sm:block "
          >
            favoureliab@gmail.com
          </p></Link>
        </span>
        <nav className=" flex-1  items-center gap-4 flex text-inherit justify-between ">
          <ul className="hidden md:flex items-center flex-1 justify-between gap-4 list-none text-inherit">
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
          <Button className="">Hire Me!</Button>
          <SmallerMenu />
        </nav>
      </div>
    </section>
  );
};

export default Header;
