import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

//SINCE THE CONTENTS CAN NOT SCROLL DIRECTLY, RMEMEBER TO ADD THE LOADING EFFECT JUST BEFORE THE CONTENTS GET LOADED.
//YOUTUBE LINK: https://www.youtube.com/watch?v=CvBuqEfw0mU&ab_channel=BuiltWithCode

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    if (latest === 0) {
      setIsLoading(false);
      console.log(isLoading);
    }
  });
  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [contentRef]);
  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        ref={contentRef}
        style={{ y: isLoading ? 0 : y }}
        className="w-screen fixed top-0  flex flex-col justify-center items-center"
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
