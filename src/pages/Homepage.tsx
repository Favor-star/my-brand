import EyeCatcher from '../components/EyeCatcher';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MyServices from '../components/MyServices';
import MyWorks from '../components/MyWorks';
import EducExp from '../components/EducExp';
import {
  IconHome,
  IconFolderCode,
  IconUserCode,
  IconBriefcase,
  IconNotebook
} from '@tabler/icons-react';
import { FloatingNav } from '../components/common/FloatingNav';
import OtherSkills from '../components/OtherSkills';
import ReviewSection from '../components/ReviewSection';
import ContactMeSection from '../components/ContactMeSection';
import Footer from '../components/Footer';
import DotPattern from '../components/backgrounds/DotPattern';
import { cn } from '../utils';
import HI from '../assets/HI (1).svg';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <main className="h-full  relative">
      {/* <Loader /> */}

      {/* <div
        className="absolute -top-5 left-0 h-screen z-50 bg-blackCustom w-full block"
        style={{
          clipPath:
            'polygon(0% 0%, 0% 100%, 50% 100%, 50% 0%, 50% 0%, 50% 100%, 100% 100%, 100% 0%)'
        }}
      ></div> */}
      <div className="h-screen w-full block absolute right-0 top-0">
        <DotPattern
          className={cn(
            // '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] absolute top-0 right-0',
            '[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]',
            'h-screen w-full block absolute right-0 top-0'
          )}
        />
        <motion.img
          src={HI}
          alt="HI image"
          className="absolute -bottom-28 md:top-40 rotate-12 right-1/2 translate-x-1/2 -translate-y-1/2 -z-30 h-fit w-[600px] bg-opacity-5 opacity-100 md:opacity-10 animate-pulse  "
        />
        {/* <RetroGrid /> */}
      </div>
      {/* <div className="w-full min-h-screen relative flex flex-col  bg-inherit"> */}
      <Header />
      <div className="w-96 h-96 absolute top-0 right-40 bg-blueCustom bg-opacity-10 rounded-full  blur-2xl -z-10" />
      <div className="w-full flex-1 h-full flex flex-col  justify-between items-center  gap-5">
        <FloatingNav navItems={navItems} />
        <HeroSection />
        <EyeCatcher />
      </div>
      {/* </div> */}
      <MyServices fromHome={true} />
      <MyWorks />
      <EducExp />
      <OtherSkills fromHome={true} />
      <ReviewSection />
      <div id="contactMeSection" />
      <ContactMeSection />
      <Footer />
    </main>
  );
};

export default Homepage;

export const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: <IconHome stroke={1.25} className="h-4 w-4 text-neutral-500 dark:text-white" />
  },
  {
    name: 'About',
    link: '/about',
    icon: <IconUserCode stroke={1.25} className="h-4 w-4 text-neutral-500 dark:text-white" />
  },
  {
    name: 'Portfolio',
    link: '/portfolio',
    icon: <IconFolderCode stroke={1.25} className="h-4 w-4 text-neutral-500 dark:text-white" />
  },
  {
    name: 'Services',
    link: '/services',
    icon: <IconBriefcase stroke={1.25} className="h-4 w-4 text-neutral-500 dark:text-white" />
  },
  {
    name: 'Blog',
    link: '/my-blog',
    icon: <IconNotebook stroke={1.25} className="h-4 w-4 text-neutral-500 dark:text-white" />
  }
];
