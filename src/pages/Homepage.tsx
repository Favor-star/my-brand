import { useEffect, useRef, useState } from 'react';
import EyeCatcher from '../components/EyeCatcher';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MyServices from '../components/MyServices';
import MyWorks from '../components/MyWorks';
import { motion, useScroll, useMotionValue, useSpring } from 'framer-motion';

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 40,
    restDelta: 0.001
  });
  const mainHeightRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState<number>(0);
  const dragY = useMotionValue(0);

  useEffect(() => {
    const updateHeight = () => {
      if (mainHeightRef.current) {
        setPageHeight(mainHeightRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const scrollableHeight = pageHeight - window.innerHeight;

  useEffect(() => {
    dragY.set(scrollableHeight);
  }, [dragY]);

  return (
    <main className="h-full border relative" ref={mainHeightRef}>
      <div className="w-full min-h-screen relative flex flex-col  bg-inherit">
        <Header />
        <div className="w-96 h-96 absolute top-0 right-40 bg-blueCustom bg-opacity-10 rounded-full  blur-2xl -z-10"></div>
        <div className="w-full flex-1 h-full flex flex-col  justify-between items-center">
          <HeroSection />
          <EyeCatcher />
        </div>
      </div>
      <MyServices />
      <MyWorks />
      <motion.div
        className="fixed right-1 top-0 h-full w-2 bg-blackCustom block "
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      ></motion.div>
      <motion.span
        className="p-2 rounded-lg bg-grayCustom text-blackCustom text-sm fixed right-2 h-fit cursor-grab active:cursor-grabbing select-none"
        style={{ top: dragY }}
      >
        Scroll here
      </motion.span>
    </main>
  );
};

export default Homepage;
