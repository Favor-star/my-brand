import { IconArrowNarrowRight } from '@tabler/icons-react';
import DesignSample from '../assets/Design 1.png';
import { motion } from 'framer-motion';
import { useState } from 'react';

const WorkCard = () => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <motion.div
      className="w-full p-5 rounded-[30px]  bg-grayCustom bg-opacity-50 flex items-center justify-center relative "
      initial={{
        opacity: 0.1,
        scale: 1,
        translateX: 10
      }}
      style={{ scale: 1 }}
      whileHover={{
        // translateY: [null, -1],
        // scale: [null, 1.005, 1.01],
        scale: 1.01,
        y: -1,
        transition: { duration: 0.2 }
      }}
      whileInView={{
        opacity: 1,
        translateX: 0,
        transition: {
          delay: 0.3,
          duration: 1.2,
          type: 'spring'
        }
      }}
      onMouseEnter={() => {
        setIsCardHovered(true);
      }}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <img
        src={DesignSample}
        alt=""
        className="w-full object-cover rounded-[10px] aspect-[548/418]"
      />
      <motion.div
        className="w-10/12 absolute  bottom-10 right-1/2 translate-x-1/2 flex justify-between items-center bg-blueCustom p-4 rounded-[10px]"
        style={{ right: '50%', translateX: '50%', willChange: 'transform, scale' }}
        animate={
          isCardHovered
            ? {
                scale: 1,
                y: 0,
                transition: { duration: 0.3, type: 'tween', delay: 0.3 }
              }
            : { scale: 1, y: 20, transition: { duration: 0.3, type: 'tween' } }
        }
        layout
      >
        <motion.span className="w-full flex-1 text-white flex flex-col gap-0" >
          <motion.p className=" w-full text-xl font-medium">Project Name</motion.p>
          <motion.p className=" w-full  h-fit font-light ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>
        </motion.span>
        <motion.span
          className="w-fit"
          animate={isCardHovered ? { scale: 1.1, rotate: '-20deg' } : { scale: 1 }}
        >
          <IconArrowNarrowRight stroke={1} className="w-10 h-10 text-white" />
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default WorkCard;
