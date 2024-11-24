import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils';

interface SecondButtonProps {
  icon: React.ReactNode;
  className?: string;
  title: string;
  onClick?: () => void;
}
const SecondButton: React.FC<SecondButtonProps> = ({ icon, className, title, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      className={cn(
        'px-3 py-3 flex gap-2 bg-blueCustom rounded-lg  relative text-white overflow-hidden h-[44px]  text-lg ',
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <motion.span
        className="h-full "
        initial={{ x: -200 }}
        style={{ x: -50, position: 'absolute' }}
        animate={hovered ? { x: '100%' } : { x: -50 }}
      >
        {icon}
      </motion.span>
      <motion.span
        className="flex gap-2 justify-center items-center text-inherit text-lg h-full relative"
        animate={hovered ? { x: 120 } : { x: 0 }}
      >
        <p>{title}</p>
        {icon}
      </motion.span>
    </motion.button>
  );
};

export default SecondButton;
