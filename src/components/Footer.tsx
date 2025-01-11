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
import { Link } from 'react-router-dom';
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
        <div className="font-light flex flex-row md:flex-row gap-2 items-start md:items-center  mb-3">
          <p className=" text-left text-base md:text-lg">Are you impressed?</p>
          <Link to="https://www.buymeacoffee.com/favoreliab" target="_blank">
            <Button className="bg-white text-blueCustom flex flex-row items-center gap-2">
              Buy Me A Coffee
              <img src={CoffeCup} alt="" className="w-8 " />
            </Button>{' '}
          </Link>
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
        <div className="flex flex-col gap-1 items-start md:items-center w-full mt-2 md:mt-0 ">
          <div className="justify-start md:justify-center w-full flex mb-2 ">Follow me </div>
          <div className="flex  items-center justify-between max-w-[450px]    w-full ">
            <Link to="mailto:favoureliab@gmail.com">
              <IconMail stroke={1} className="footer_links" />{' '}
            </Link>
            <Link to="https://www.instagram.com/favourelly1" target="_blank">
              <IconBrandInstagram stroke={1} className="footer_links" />
            </Link>
            <Link to="https://www.x.com/favour_eliab" target="_blank">
              <IconBrandX stroke={1} className="footer_links" />
            </Link>
            <Link to="https://www.upwork.com/freelancers/~0164586914ad0010ed" target="_blank">
              <IconBrandUpwork stroke={1} className="footer_links" />
            </Link>
            <Link to="https://www.wa.me/0787922900" target="_blank">
              <IconBrandWhatsapp stroke={1} className="footer_links" />
            </Link>
            <Link to="https://www.github.com/favor-star" target="_blank">
              <IconBrandGithub stroke={1} className="footer_links" />
            </Link>

            {/* <FloatingDock items={items} /> */}
          </div>
        </div>
        <div className="flex gap-1 items-center justify-center mt-4">
          <IconCopyright stroke={1} className="w-4" />
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
