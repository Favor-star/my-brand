
import { IconMenu2 } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Button } from './common/button';

const Header = () => {
  return (
    <section className="w-full flex items-start justify-center mt-5 mb-5 px-4 bg-inherit ">
      <div className="w-full  max-w-screen-xl  text-blackCustom bg-inherit flex flex-row justify-between">
        <span className="flex gap-2 items-center w-1/2">
          <p className="text-blueCustom font-bold text-2xl">F</p>
          <a href="mailto:favoureliab@gmail.com" className="text-lg font-medium text-blackCustom">
            hire@gmail.com
          </a>
        </span>
        <nav className=" flex-1 hidden items-center gap-5 md:flex">
          <ul className="flex items-center flex-1 justify-between gap-3 list-none">
            <li className="capitalize text-blackCustom cursor-pointer">Services</li>
            <li className="capitalize text-blackCustom cursor-pointer">Skills</li>
            <li className="capitalize text-blackCustom cursor-pointer">Resumes</li>
            <li className="capitalize text-blackCustom cursor-pointer">Works</li>
            <li className="capitalize text-blackCustom cursor-pointer">Testimonials</li>
          </ul>
         
          <Button className='text-sm'>Hire Me!</Button>
        </nav>
        <motion.span
          className=""
          whileHover={{
            translateY: -5,
            rotate: '-6deg',
            scale: 1.1
          }}
        >
          <IconMenu2 className="text-blackCustom md:hidden " size={45} strokeWidth={1} />
        </motion.span>
      </div>
    </section>
  );
};

export default Header;
