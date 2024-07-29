import { IconCode } from '@tabler/icons-react';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

const SingleService = () => {
  const [isHovered, setIsHovered] = useState(false);
  const variants: Variants = {
    notHovered: {
      backgroundColor: '#E5E4E266',
      color: '#212830',
      transition: {
        duration: 0.5,
        type: 'tween'
      }
    },
    hovered: {
      backgroundColor: '#2454ff',
      color: '#fff',
      scale: 1.03,
      transition: {
        duration: 0.5,
        type: 'tween'
      }
    }
  };
  return (
    <motion.div
      className="w-full flex flex-col gap-2 justify-center items-start rounded-3xl border-blueCustom border p-4 bg-grayOp40 "
      variants={variants}
      initial="notHovered"
      whileHover={'hovered'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconCode stroke={1} className="w-10 h-10  " />
      <motion.p
        className="font-bold text-xl text-blueCustom"
        animate={isHovered ? { color: '#fff' } : { color: '#2454ff' }}
      >
        Web development
      </motion.p>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus fugit placeat
        deleniti, omnis eveniet atque debitis. Atque, veniam nemo.
      </p>
    </motion.div>
  );
};

export default SingleService;
