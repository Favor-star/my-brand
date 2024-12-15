import {
  IconBrandInstagram,
  // IconBrandUpwork,
  // IconBrandGithub,
  IconBrandX,
  // IconChecks,
  // IconBrandFacebook,
  IconDownload,
  // IconArrowRight,
  IconArrowNarrowRight,
  IconCornerDownRight,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  // IconArrowMoveRight,
  IconChevronsRight
} from '@tabler/icons-react';
import Favor from '../assets/Favor.png';
import { motion } from 'framer-motion';
import { Button } from './common/button';
import { useState } from 'react';
// import DotPattern from './backgrounds/DotPattern';
// import SlideButton from './common/Another';
// import SecondButton from './common/Another';
const HeroSection = () => {
  const [imageHovered, setImageHovered] = useState(false);
  return (
    <section className="w-full bg-inherit px-3  max-w-screen-lg flex flex-col md:flex-row justify-center gap-1 items-center text-blackCustom mt-10  md:mt-20 h-fit">
      {/* <main className="w-full md:w-10/12  flex flex-col-reverse md:flex-row items-center justify-between flex-1  gap-20 me-0 md:gap-10 md:me-16 lg:me-32 ">
        <div className="flex flex-col gap-8 ms-0 md:ms-10 w-full md:w-1/2">
          <span className="w-full">
            <p className="font-light ">Hi! I'm Favour Eliab,</p>
            <p className="text-blueCustom font-semibold md:text-4xl lg:text-5xl ms-3 mt-3 text-nowrap text-2xl ">
              a Web Developer
            </p>
          </span>
          <p className=" max-w-[600px] w-fullt text-balance">
            a Rwanda-based developer,designer and mechanincal engineer. I put a lot of energy into
            any work that I'm given, and make sure they are done within specified time.
          </p>
          <div className="w-full flex gap-5 items-center">
            <SlideButton></SlideButton>
            <Button>
              Let's talk
              <IconArrowRight stroke={1.5} />
            </Button>
            <Button variant={'outline'}>
              <p className="hidden lg:block"> Download CV</p>
              <IconDownload stroke={1} />
            </Button>
          </div>
        </div>
        <motion.span
          className="max-w-[300px] w-full min-w-40  bg-blackCustom rounded-full border-blueCustom border overflow-hidden p-0 -translate-y-10"
          style={{ scale: 1, borderRadius: '50%' }}
          initial={{ rotate: '10deg' }}
          whileHover={{
            rotate: '0deg',
            scale: 1.1,
            borderRadius: '10px',
            transition: {
              duration: 0.7,
              type: 'spring'
            }
          }}
        >
          <motion.img src={Favor} alt="" className="w-full  h-full object-cover  object-center " />
        </motion.span>
      </main> */}
      {/* <div className="h-full flex flex-row md:flex-col justify-between md:justify-between w-full md:w-fit items-end gap-5 justify-self-end mt-10 md:mt-0">
        <span className="md:min-h-52 h-[1px]  flex-1 md:h-full block w-full md:min-w-[2px] md:w-[2px] me-4 bg-blueCustom "></span>
        <IconBrandInstagram
          stroke={1}
          className="w-8 h-8  hover:rotate-6 hover:scale-[1.2]  transition-all"
        />
        <span >
          <IconBrandUpwork
            stroke={1}
            className="w-8 h-8  hover:rotate-6 hover:scale-[1.2]  transition-all"
          />
        </span>
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
      </div> */}

      <main className="w-full h-full flex  flex-col-reverse md:flex-row gap-10 md:gap-3 justify-between items-center relative">
        <div className="flex flex-col gap-5">
          <span className="hidden md:block text-blackCustom">
            <p className="text-sm text-inherit">Hi! I'm</p>
            <p className="text-5xl font-bold text-inherit">Favour Eliab</p>
          </span>
          <span className="w-full max-w-full md:max-w-[430px] text-xl text-blackCustom">
            a Rwanda-based self-made web-developer & UI-UX designer.
            <br />
            Holds a degree in Mechatronics technology, therefore, I am capable of efficiently using
            SOLDIWORKS too.
          </span>
          <span className="flex gap-10 max-w-[400px]">
            {/* <SecondButton title="Let's Talk" icon={<IconArrowNarrowRight stroke={1.5} />} />
            <SecondButton
              title="Get CV"
              icon={<IconArrowNarrowRight stroke={1.5} />}
              className="border border-blueCustom bg-inherit text-blueCustom"
            /> */}
            <Button variant={'default'} className='border border-blueCustom text-lg'>
              Let's Talk
              <IconArrowNarrowRight stroke={1.25} />
            </Button>
            <Button variant={'outline'} className="py-2 text-lg">
              Get a CV
              <IconDownload stroke={1.25} />
            </Button>
          </span>
          <span className="flex gap-2 items-center justify-start">
            <IconCornerDownRight stroke={1.25} />
            <p className="text-sm">or reach me through:</p>
            <IconBrandWhatsapp stroke={1.25} />
            <IconBrandX stroke={1.25} />
            <IconBrandInstagram stroke={1.25} />
            <IconBrandLinkedin stroke={1.25} />
            <span className="p1 rounded-md border border-grayOp40 bg-white text-grayCustom hover:text-blackCustom transition-all hover:border-blackCustom">
              <IconChevronsRight stroke={1.25} />
            </span>
          </span>
        </div>

        <div className="w-full md:w-fit flex flex-col gap-5 justify-center items-start relative">
          <span className="md:hidden">
            <p className="text-sm">Hi! I'm</p>
            <p className="text-5xl font-bold">Favour Eliab</p>
          </span>
          <motion.div
            className="w-fit rounded-2xl border-2 border-blueCustom bg-blackCustom overflow-hidden self-center"
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
            animate={{
              borderRadius: imageHovered ? 40 : 16
            }}
            transition={{
              duration: 0.5
            }}
          >
            <motion.img
              src={Favor}
              className="max-h-[340px] max-w-[278px] object-cover w-full h-full block"
              animate={
                imageHovered
                  ? {
                      scale: 1.1,
                      rotate: 5
                    }
                  : { scale: 1, rotate: 0 }
              }
              transition={{
                duration: 0.5
              }}
            />
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
