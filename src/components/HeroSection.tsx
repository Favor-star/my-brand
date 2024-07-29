import {
  IconBrandInstagram,
  IconBrandUpwork,
  IconBrandGithub,
  IconBrandX,
  IconChecks,
  IconBrandFacebook,
  IconDownload
} from '@tabler/icons-react';
import Favor from '../assets/Favor.png';
import { motion } from 'framer-motion';
import { Button } from './common/button';

const HeroSection = () => {
  return (
    <section className="w-full bg-inherit px-[20px]  max-w-screen-xl flex flex-col md:flex-row justify-center gap-1 items-center text-blackCustom  mt-10 md:mt-28 h-fit">
      <main className="w-full md:w-10/12  flex flex-col-reverse md:flex-row items-center justify-between flex-1  gap-20 me-0 md:gap-10 md:me-16 lg:me-32 ">
        <div className="flex flex-col gap-8 ms-0 md:ms-10 w-full md:w-1/2">
          <span className="w-full">
            <p className="font-light ">Hi! I'm Favour Eliab,</p>
            <p className="text-blueCustom font-semibold md:text-4xl lg:text-5xl ms-3 mt-3 text-nowrap text-2xl ">
              a Web Developer
            </p>
          </span>
          <p className=" max-w-[600px] w-fullt text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis quod iure velit hic
            iusto cum adipisci temporibus error consequuntur repudiandae.
          </p>
          <div className="w-full flex gap-5 items-center">
            <Button>
              Hire Me!
              <IconChecks stroke={1.5} />
            </Button>
            <Button variant={'outline'}>
              <p className="hidden lg:block"> Download CV</p>
              <IconDownload stroke={1} />
            </Button>
          </div>
        </div>
        <motion.span
          className="max-w-[300px] w-full min-w-40  bg-blackCustom rounded-[30px] border-blueCustom border overflow-hidden p-0 -translate-y-10"
          style={{ scale: 1 }}
          initial={{ rotate: '10deg' }}
          whileHover={{
            rotate: '0deg',
            scale: 1.1,
            transition: {
              duration: 0.7,
              type: 'spring'
            }
          }}
        >
          <motion.img
            src={Favor}
            alt=""
            className="w-full  h-full object-cover  object-center "

            // whileHover={{
            //   rotate: '0deg'
            // }}
          />
        </motion.span>
      </main>
      <div className="h-full flex flex-row md:flex-col justify-between md:justify-between w-full md:w-fit items-end gap-5 justify-self-end mt-10 md:mt-0">
        <span className="md:min-h-52 h-[1px]  flex-1 md:h-full block w-full md:min-w-[2px] md:w-[2px] me-4 bg-blueCustom "></span>
        <IconBrandInstagram
          stroke={1}
          className="w-8 h-8  hover:rotate-6 hover:scale-[1.2]  transition-all"
        />
        <IconBrandUpwork
          stroke={1}
          className="w-8 h-8  hover:rotate-6 hover:scale-[1.2]  transition-all"
        />
        <IconBrandFacebook
          stroke={1}
          className="w-8 h-8  hover:rotate-6 hover:scale-[1.2]  transition-all"
        />
        <IconBrandGithub
          stroke={1}
          className="w-8 h-8  hover:rotate-6 hover:scale-[1.2]  transition-all"
        />
        <IconBrandX
          stroke={1}
          className="w-8 h-8  hover:rotate-6 hover:scale-[1.2]  transition-all"
        />
      </div>
    </section>
  );
};

export default HeroSection;
