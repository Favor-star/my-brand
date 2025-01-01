// import { IconSchool, IconAward } from '@tabler/icons-react';
// import { Variants } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
// import { cn } from '../utils';
import useEmblaCarousel from 'embla-carousel-react';
import Autoscroll from 'embla-carousel-auto-scroll';
// import { EmblaCarouselType } from 'embla-carousel';
import EducationCarousel from './CarouselTest';
// import Autoplay from 'embla-carousel-autoplay';

const EducExp = () => {
  // const [isCardHovered, setIsCardHovered] = useState(false);
  // const [hoveredIndex, setHOveredIndex] = useState<number | null>(null);
  const [isMedium, setIsMedium] = useState<boolean>(false);
  // const [hoveredIndexOne, setHOveredIndexOne] = useState<number | null>(null);
  //@ts-ignore
  const [eduSlideRef, eduSlideAPI] = useEmblaCarousel(
    {
      axis: isMedium ? 'y' : 'x',
      loop: true,
      dragFree: true,
      containScroll: 'trimSnaps'
    },
    [Autoscroll()]
  );

  const eduRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  // const pElemVAriant: Variants = {
  //   notHovered: {
  //     color: '#212830'
  //   },
  //   hovered: {
  //     color: '#fff'
  //   }
  // };
  // const combinedRef = useCallback(
  //   (node: HTMLDivElement | null) => {
  //     if (eduSlideRef && typeof eduSlideRef === 'function') {
  //       eduSlideRef(node);
  //     }
  //     eduRef.current = node;
  //   },
  //   [eduSlideRef]
  // );
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (!eduSlideAPI) return;

      event.preventDefault();

      if (event.deltaY > 0) {
        eduSlideAPI.scrollNext();
      } else {
        eduSlideAPI.scrollPrev();
      }
    },
    [eduSlideAPI]
  );
  useEffect(() => {
    const currentNode = eduRef.current;
    const sectionNode = sectionRef.current;
    if (!currentNode) return;

    currentNode.addEventListener('wheel', handleWheel, { passive: false });

    const handleWidth = () => {
      if (!sectionNode) return;
      setIsMedium(sectionNode.offsetWidth > 761);
      // console.log(sectionNode.offsetWidth);
    };
    window.addEventListener('resize', handleWidth);
    return () => {
      currentNode.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel, eduRef]);
  useEffect(() => {
    if (eduSlideAPI) {
      eduSlideAPI.reInit();
    }
  }, [isMedium, eduSlideAPI]);

  return (
    <section
      className="w-full bg-grayCustom text-blackCustom flex flex-col items-center justify-center px-4 py-8 md:py-16  bg- border-2 border-grayCustom"
      ref={sectionRef}
    >
      <main className="w-full max-w-screen-lg flex flex-col md:flex-row gap-10 relative justify-between ">
        <section className="flex flex-col items-center gap-1 w-full md:w-6/12 ">
          {/* <div className="flex flex-row gap-2 mb-1 items-center justify-start border border-red-500 ">
            <p className="font-bold text-2xl text-center">Education</p>
          </div> */}
          <p className="mb-1 text-2xl font-bold w-full">Education</p>
          {/* <div
            className="w-full embla_before border border-black overflow-hidden relative"
            ref={combinedRef}
          >
            <div className="w-full flex flex-row md:flex-col gap-4 justify-center  items-center  border border-green-500">
              {eduExp.map((item, index) => (
                <div
                  className={cn(
                    'w-full  flex flex-col-reverse md:flex-row gap-4 items-center justify-between ps-[2px] min-w-0 ',
                    !isMedium ? 'flex-0-0-100' : ''
                  )}
                  key={index + '-one'}
                >
                  <span className="w-fit rounded-full">
                    <IconSchool
                      stroke={1}
                      className="w-9 h-9 aspect-square p-1 rounded-full bg-white border border-blackCustom"
                    />
                  </span>
                  <motion.div
                    className="w-full flex-1 flex flex-col justify-start  p-4 rounded-2xl bg-white cursor-default select-none relative overflow-hidden"
                    initial={{
                      opacity: 0.1,
                      translateX: -10,
                      background: '#fff'
                    }}
                    whileHover={{
                      scale: 1.01,
                      translateY: -3,
                      background: '#2454FF',
                      transition: {
                        duration: 0.5,
                        type: 'tween'
                      }
                    }}
                    whileInView={{
                      opacity: 1,
                      translateX: 0,
                      transition: {
                        delay: 0.3,
                        duration: 1.3,
                        type: 'spring'
                      }
                    }}
                    onMouseEnter={() => {
                      setIsCardHovered(true);
                      setHOveredIndexOne(index);
                    }}
                    onMouseLeave={() => {
                      setIsCardHovered(false);
                      setHOveredIndexOne(null);
                    }}
                  >
                    <motion.p
                      className={cn(
                        'uppercase font-normal text-sm relative z-10'
                        // isCardHovered && hoveredIndex === index ? 'text-white' : 'text-blackCustom'
                      )}
                      variants={pElemVAriant}
                      initial="notHovered"
                      animate={
                        isCardHovered && hoveredIndexOne === index ? 'hovered' : 'notHovered'
                      }
                    >
                      {item.period}
                    </motion.p>
                    <motion.p
                      className={cn(
                        'text-lg font-extrabold uppercase text-blueCustom relative z-10 transition-all',
                        isCardHovered && hoveredIndexOne === index
                          ? 'text-white'
                          : 'text-blueCustom'
                      )}
                    >
                      {item.place}
                    </motion.p>
                    <span className="w-full flex justify-between items-center relative z-10 transition-all">
                      <motion.p
                        className={cn('text-sm')}
                        variants={pElemVAriant}
                        initial="notHovered"
                        animate={
                          isCardHovered && hoveredIndexOne === index ? 'hovered' : 'notHovered'
                        }
                      >
                        {item.deggre}
                      </motion.p>
                      <motion.p
                        className={cn('italic text-xs transition-all')}
                        variants={pElemVAriant}
                        initial="notHovered"
                        animate={
                          isCardHovered && hoveredIndexOne === index ? 'hovered' : 'notHovered'
                        }
                      >
                        {item.location}
                      </motion.p>
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div> */}
          <EducationCarousel />
        </section>
        <section className="flex flex-col items-center gap-1 w-full md:w-6/12 ">
          {/* <div className="flex flex-row gap-2 mb-1 items-center justify-start ">
            <p className="font-bold  text-2xl text-center">Experience</p>
          </div> */}
          <p className="mb-1 text-2xl font-bold w-full">Experience</p>

          {/* <div className="w-full flex flex-col gap-4 justify-center items-center relative">
            <span className="absolute w-[1.5px] h-full bg-blackCustom bg-opacity-50 left-4 "></span>
            {eduExp.map((item, index) => (
              <div
                className="w-full relative  flex gap-3 items-center justify-center"
                key={index + '-two'}
              >
                <span>
                  <IconAward
                    stroke={1}
                    className="w-9 h-9 aspect-square p-1 rounded-full bg-white border border-blackCustom"
                  />
                </span>
                <motion.div
                  className="w-full max-w-[400px] flex flex-col justify-start  p-4 rounded-2xl bg-white cursor-default select-none relative overflow-hidden"
                  initial={{
                    opacity: 0.1,
                    translateX: 10,
                    background: '#fff'
                  }}
                  whileHover={{
                    scale: 1.01,
                    translateY: -3,
                    background: '#2454FF',
                    transition: {
                      duration: 0.5,
                      type: 'tween'
                    }
                  }}
                  whileInView={{
                    opacity: 1,
                    translateX: 0,
                    transition: {
                      delay: 0.3,
                      duration: 1.3,
                      type: 'spring'
                    }
                  }}
                  onMouseEnter={() => {
                    setIsCardHovered(true);
                    setHOveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    setIsCardHovered(false);
                    setHOveredIndex(null);
                  }}
                >
                  <motion.p
                    className={cn(
                      'uppercase font-normal text-sm relative z-10'
                      // isCardHovered && hoveredIndex === index ? 'text-white' : 'text-blackCustom'
                    )}
                    variants={pElemVAriant}
                    initial="notHovered"
                    animate={isCardHovered && hoveredIndex === index ? 'hovered' : 'notHovered'}
                  >
                    {item.period}
                  </motion.p>
                  <motion.p
                    className={cn(
                      'text-lg font-extrabold uppercase text-blueCustom relative z-10 transition-all',
                      isCardHovered && hoveredIndex === index ? 'text-white' : 'text-blueCustom'
                    )}
                  >
                    {item.place}
                  </motion.p>
                  <span className="w-full flex justify-between items-center relative z-10 transition-all">
                    <motion.p
                      className={cn('text-sm')}
                      variants={pElemVAriant}
                      initial="notHovered"
                      animate={isCardHovered && hoveredIndex === index ? 'hovered' : 'notHovered'}
                    >
                      {item.deggre}
                    </motion.p>
                    <motion.p
                      className={cn('italic text-xs transition-all')}
                      variants={pElemVAriant}
                      initial="notHovered"
                      animate={isCardHovered && hoveredIndex === index ? 'hovered' : 'notHovered'}
                    >
                      {item.location}
                    </motion.p>
                  </span>
                </motion.div>
              </div>
            ))}
          </div> */}
          <EducationCarousel isExp={true} />
        </section>
      </main>
    </section>
  );
};

export default EducExp;
