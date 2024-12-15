import { IconCode } from '@tabler/icons-react';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { ServiceListProps } from '../../pages/Services';

const SingleService = ({ title, description }: ServiceListProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const variants: Variants = {
    notHovered: {
      backgroundColor: '#E5E4E266',
      opacity: 0,
      y: 30,
      color: '#212830'
    },
    hovered: {
      backgroundColor: '#2454ff',
      color: '#fff',
      scale: 1.03
    }
  };
  return (
    <motion.div
      className="w-full flex flex-col gap-2 justify-center items-start rounded-2xl border-blueCustom border p-4 bg-grayOp40 "
      variants={variants}
      initial="notHovered"
      layout="preserve-aspect"
      whileHover={'hovered'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: 'tween'
      }}
    >
      <IconCode stroke={1} className="w-10 h-10  " />
      <motion.span
        className="w-full h-[2px] block "
        // initial={{ backgroundColor: 'inherit' }}
        // style={{ backgroundColor: 'inherit' }}
        animate={
          isHovered ? { backgroundColor: '#fff' } : { backgroundColor: 'inherit', opacity: 0 }
        }
      />
      <motion.p
        className="font-bold text-xl text-blueCustom "
        animate={isHovered ? { color: '#fff' } : { color: '#2454ff' }}
      >
        {title}
      </motion.p>
      <p className="">{description}</p>
    </motion.div>
  );
};

export default SingleService;
