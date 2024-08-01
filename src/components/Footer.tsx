import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandUpwork,
  IconBrandWhatsapp,
  IconBrandX,
  IconCopyright,
  IconMail
} from '@tabler/icons-react';
import CoffeCup from '../assets/icons/coffee.svg';
import { Button } from './common/button';
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-blueCustom text-white py-10 mt-10">
      <main className="w-full max-w-screen-xl flex flex-col justify-center items-center gap-5 px-4">
        <Link
          to="/"
          className="text-2xl font-extrabold p-2  flex justify-center items-center w-fit h-fit aspect-square rounded-full bg-white  text-blueCustom"
        >
          F
        </Link>
        <div className="font-light flex flex-col md:flex-row gap-4 items-center">
          <p className=" text-center md:text-left">
            Are you impressed? Show me how impressed you are!
          </p>
          <Button className="bg-white text-blueCustom flex flex-row items-center gap-2">
            Buy Me A Coffee
            <img src={CoffeCup} alt="" className="w-8 " />
          </Button>
        </div>
        <div className="flex w-10/12 justify-center  flex-col sm:flex-row gap-2 sm:gap-8 items-center">
          <NavLink to="/about" className="font-medium text-lg ">
            About
          </NavLink>
          <NavLink to="/portfolio" className="font-medium text-lg ">
            Portfolio
          </NavLink>
          <NavLink to="/services" className="font-medium text-lg ">
            Services
          </NavLink>
          <NavLink to="/my-blog" className="font-medium text-lg ">
            My blog
          </NavLink>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <IconMail stroke={1} className="footer_links" />
          <IconBrandInstagram stroke={1} className="footer_links" />
          <IconBrandX stroke={1} className="footer_links" />
          <IconBrandUpwork stroke={1} className="footer_links" />
          <IconBrandWhatsapp stroke={1} className="footer_links" />
          <IconBrandGithub stroke={1} className="footer_links" />
        </div>
        <div className="flex gap-1 items-center justify-center mt-4">
          <IconCopyright className="w-5" />
          <p className="text-sm font-extralight">Favour Eliab 2023.</p>
          <p className="font-thin text-sm">All rights reserved</p>
        </div>
      </main>
    </div>
  );
};

export default Footer;
