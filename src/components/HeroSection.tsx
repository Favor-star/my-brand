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
  const handleTalk = () => {
    const contactSection = document.getElementById('contactMeSection');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleGetCV = () => {
    alert('CV is not yet uploaded. Contact me for more info. Thanks');
  };
  return (
    <section className="w-full bg-inherit px-3  max-w-screen-lg flex flex-col md:flex-row justify-center gap-1 items-center text-blackCustom mt-10  md:mt-20 h-fit">
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
           
            <Button
              variant={'default'}
              className="border border-blueCustom text-lg"
              onClick={handleTalk}
            >
              Let's Talk
              <IconArrowNarrowRight stroke={1.25} />
            </Button>
            <Button variant={'outline'} className="py-2 text-lg" onClick={handleGetCV}>
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
