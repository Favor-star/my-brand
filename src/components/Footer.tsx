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

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-blackCustom text-white pt-5 pb-3 mt-10">
      <main className="w-full max-w-screen-lg flex flex-col justify-center items-center gap-3 px-4">
        {/* <Link
          to="/"
          className="text-2xl font-extrabold p-2  flex justify-center items-center w-fit h-fit aspect-square rounded-full bg-white  text-blueCustom"
        >
          F
        </Link> */}
        <div className="font-light flex flex-row md:flex-row gap-2 items-center ">
          <p className=" text-left text-base md:text-lg">Are you impressed?</p>
          <Button className="bg-white text-blueCustom flex flex-row items-center gap-2">
            Buy Me A Coffee
            <img src={CoffeCup} alt="" className="w-8 " />
          </Button>
        </div>
        {/* <div className="flex w-10/12 justify-center  flex-col sm:flex-row gap-2 sm:gap-8 items-center">
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
          <VaulDrawer />
        </div> */}
        <div className="flex flex-col gap-1 items-start md:items-end w-full mt-2 md:mt-0">
          <div className="justify-start md:justify-center w-full flex ">Follow me for more</div>
          <div className="flex gap-4 items-center justify-start md:justify-center   w-full ">
            <IconMail stroke={1} className="footer_links" />
            <IconBrandInstagram stroke={1} className="footer_links" />
            <IconBrandX stroke={1} className="footer_links" />
            <IconBrandUpwork stroke={1} className="footer_links" />
            <IconBrandWhatsapp stroke={1} className="footer_links" />
            <IconBrandGithub stroke={1} className="footer_links" />

            {/* <FloatingDock items={items} /> */}
          </div>
        </div>
        <div className="flex gap-1 items-center justify-center mt-4">
          <IconCopyright className="w-5" />
          <p className="text-sm font-extralight">Favour Eliab {new Date().getFullYear()}.</p>
          <p className="font-thin text-sm">All rights reserved</p>
        </div>
      </main>
    </div>
  );
};

export default Footer;

// const items = [
//   {
//     title: 'Github',
//     icon: <IconBrandGithub stroke={1.25} size={30} />,
//     href: ''
//   },
//   {
//     title: 'X (formely Twitter)',
//     icon: <IconBrandX stroke={1.25} size={30} />,
//     href: ''
//   },
//   {
//     title: 'Instagram',
//     icon: <IconBrandInstagram stroke={1.25} size={30} />,
//     href: ''
//   },
//   {
//     title: 'Whatsapp',
//     icon: <IconBrandWhatsapp stroke={1.25} size={30} />,
//     href: ''
//   },
//   {
//     title: 'E-mail',
//     icon: <IconMail stroke={1.25} size={30} />,
//     href: ''
//   },
//   {
//     title: 'Dribble',
//     icon: <IconBrandDribbble stroke={1.25} size={30} />,
//     href: ''
//   }
// ];
