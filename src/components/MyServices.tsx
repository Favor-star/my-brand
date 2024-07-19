import { IconArrowNarrowRight, IconCreditCard, IconRefresh } from '@tabler/icons-react';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../utils';
import { Button } from './common/button';

const MyServices = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [divHeight, setDivHeight] = useState<number>(0);
  const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);
  const y = useMotionValue(0);

  useEffect(() => {
    const updateHeight = () => {
      divRef.current?.offsetHeight && setDivHeight(divRef.current?.offsetHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', () => {});
  }, [divHeight]);
  useEffect(() => {
    y.set(hoveredIndex * divHeight);
  }, [hoveredIndex, divHeight, y]);
  return (
    <section className="w-full bg-grayCustom text-blackCustom flex flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-row gap-2 mb-5">
        <IconCreditCard stroke={1} className="w-10 h-10 " />
        <p className="font-bold text-3xl">My offered Services</p>
      </div>
      <main className="w-full 2xl:container flex flex-col gap2 relative ">
        {services.map((service, index) => (
          <div
            className="flex gap-5 justify-between items-center py-3 px-2 border-b border-b-blackCustom relative z-10"
            key={index}
            ref={index === 0 ? divRef : null}
            onMouseEnter={() => {
              setHoveredIndex(index);
            }}
          >
            <span className="flex gap-5">
              <p
                className={cn(
                  'font-bold text-xl transition-all',
                  hoveredIndex === index ? 'text-white' : 'text-blackCustom'
                )}
              >
                0{index + 1}.
              </p>
              <p
                className={cn(
                  'font-bold text-xl w-[250px] transition-all',
                  hoveredIndex === index ? 'text-white' : 'text-blackCustom'
                )}
              >
                {service.title}
              </p>
            </span>
            <p
              className={cn(
                'font-normal max-w-[650px] flex-1 transition-all',
                hoveredIndex === index ? 'text-white' : 'text-blackCustom'
              )}
            >
              {service.info}
            </p>
            <motion.span
              className="w-fit"
              whileHover={{
                translateX: 10
              }}
            >
              <IconArrowNarrowRight
                stroke={0.5}
                className={cn(
                  'w-16 h-16 text-blackCustom',
                  hoveredIndex === index ? 'text-white' : 'text-blackCustom'
                )}
              />
            </motion.span>
          </div>
        ))}
        <motion.span
          className="bg-blueCustom w-full absolute z-0 rounded-lg"
          style={{
            height: divHeight,
            y
          }}
          initial={false}
          animate={{ y: hoveredIndex * divHeight }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        ></motion.span>
      </main>
      <Button variant={'outline'} className="mt-10" onHoverChange={setIsButtonHovered}>
        View More
        <motion.span
          animate={isButtonHovered ? { rotate: '180deg' } : { rotate: '0deg' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <IconRefresh />
        </motion.span>
      </Button>
    </section>
  );
};

export default MyServices;

const services = [
  {
    title: 'Modelling',
    info: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat placerat magna utfaucibus. Etiam'
  },
  {
    title: 'Web development',
    info: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat placerat magna utfaucibus. Etiam'
  },
  {
    title: 'Web Design',
    info: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat placerat magna utfaucibus. Etiam'
  },
  {
    title: 'Embedded Systems',
    info: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat placerat magna utfaucibus. Etiam'
  },
  {
    title: '3D Printing',
    info: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat placerat magna utfaucibus. Etiam'
  }
];
