import { IconSchool, IconAward } from '@tabler/icons-react';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../utils';

const EducExp = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [hoveredIndex, setHOveredIndex] = useState<number | null>(null);
  const [hoveredIndexOne, setHOveredIndexOne] = useState<number | null>(null);
  const pElemVAriant: Variants = {
    notHovered: {
      color: '#212830'
    },
    hovered: {
      color: '#fff'
    }
  };

  return (
    <section className="w-full bg-grayCustom text-blackCustom flex flex-col items-center justify-center px-4 py-16  bg- border-2 border-grayCustom">
      <main className="w-full 2xl:container flex flex-row gap-10 relative justify-center">
        <section className="flex flex-col items-center gap-4 w-5/12">
          <div className="flex flex-row gap-2 mb-1 items-center">
            <IconSchool stroke={1} className="w-10 h-10" />
            <p className="font-bold text-3xl text-center">Education</p>
          </div>
          <div className="w-full flex flex-col gap-4 justify-center border items-center">
            {eduExp.map((item, index) => (
              <motion.div
                className="w-full max-w-[400px] flex flex-col justify-start  p-4 rounded-2xl bg-white cursor-default select-none relative overflow-hidden"
                key={index + '-one'}
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
                  animate={isCardHovered && hoveredIndexOne === index ? 'hovered' : 'notHovered'}
                >
                  {item.period}
                </motion.p>
                <motion.p
                  className={cn(
                    'text-lg font-extrabold uppercase text-blueCustom relative z-10 transition-all',
                    isCardHovered && hoveredIndexOne === index ? 'text-white' : 'text-blueCustom'
                  )}
                >
                  {item.place}
                </motion.p>
                <span className="w-full flex justify-between items-center relative z-10 transition-all">
                  <motion.p
                    className={cn('text-sm')}
                    variants={pElemVAriant}
                    initial="notHovered"
                    animate={isCardHovered && hoveredIndexOne === index ? 'hovered' : 'notHovered'}
                  >
                    {item.deggre}
                  </motion.p>
                  <motion.p
                    className={cn('italic text-xs transition-all')}
                    variants={pElemVAriant}
                    initial="notHovered"
                    animate={isCardHovered && hoveredIndexOne === index ? 'hovered' : 'notHovered'}
                  >
                    {item.location}
                  </motion.p>
                </span>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center gap-4 w-5/12">
          <div className="flex flex-row gap-2 mb-1 items-center">
            <IconAward stroke={1} className="w-10 h-10" />
            <p className="font-bold text-3xl text-center">Experience</p>
          </div>
          <div className="w-full flex flex-col gap-4 justify-center border items-center">
            {eduExp.map((item, index) => (
              <motion.div
                className="w-full max-w-[400px] flex flex-col justify-start  p-4 rounded-2xl bg-white cursor-default select-none relative overflow-hidden"
                key={index + '-two'}
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
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};

export default EducExp;

const eduExp = [
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    deggre: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    deggre: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    deggre: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    deggre: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    deggre: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  }
];
