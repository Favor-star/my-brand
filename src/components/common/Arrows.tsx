import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface ArrowsProps {
  onLeftClick?: () => void;
  onRightClick?: () => void;
}
const Arrows = ({ onLeftClick, onRightClick }: ArrowsProps) => {
  return (
    <div className=" flex-row gap-3 w-fit cursor-pointer hidden sm:flex">
      <motion.span
        whileHover={{
          x: -10,
          transition: {
            duration: 0.5,
            type: 'spring'
          }
        }}
        whileTap={{
          scale: 0.9
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        onClick={onLeftClick}
      >
        <IconArrowNarrowLeft
          stroke={1}
          className="w-12 h-10 p-1  rounded-lg border-blueCustom border text-blueCustom transition-all"
        />
      </motion.span>
      <motion.span
        className="cursor-pointer"
        whileHover={{
          x: 10,
          transition: {
            duration: 0.5,
            type: 'spring'
          }
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        onClick={onRightClick}
      >
        <IconArrowNarrowRight
          stroke={1}
          className="w-12 h-10 p-1  rounded-lg border-blueCustom border text-blueCustom transition-all"
        />
      </motion.span>
    </div>
  );
};

export default Arrows;
