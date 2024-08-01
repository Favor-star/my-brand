import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';

interface ArrowsProps {
  onLeftClick?: () => void;
  onRightCLick?: () => void;
}
const Arrows = ({ onLeftClick, onRightCLick }: ArrowsProps) => {
  return (
    <div className="flex flex-row gap-3 w-fit cursor-pointer">
      <motion.span
        whileHover={{
          x: -10,
          transition: {
            duration: 0.5,
            type: 'spring'
          }
        }}
        onClick={onLeftClick}
      >
        <IconArrowNarrowLeft
          stroke={1}
          className="w-14 h-12 p-1  rounded-xl border-blueCustom border text-blueCustom transition-all"
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
        onClick={onRightCLick}
      >
        <IconArrowNarrowRight
          stroke={1}
          className="w-14 h-12 p-1  rounded-xl border-blueCustom border text-blueCustom transition-all"
        />
      </motion.span>
    </div>
  );
};

export default Arrows;
