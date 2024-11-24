import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { IconHome } from '@tabler/icons-react';
import { cn } from '../../utils';

interface HeaderIconProps {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  isTextWhite?: boolean;
  onClick?: () => void;
}
const HeaderIcon = ({ icon, title, onClick, isActive, isTextWhite }: HeaderIconProps) => {
  const [hovered, setHovered] = useState(false);
  const variants: Variants = {
    hovered: {
      width: 'auto',
      opacity: 1,
      paddingInlineStart: '4px',
      transition: {
        delay: 0.3
      }
    },
    notHovered: {
      width: 0,
      opacity: 0
    }
    // iconHovered: {
    //   //   backgroundColor: 'red',
    //   clipPath: 'ellipse(50px 50px at 50% 50%)',
    //   transition: {
    //     duration: 0.5
    //   }
    // },
    // iconNotHovered: {
    //   //   backgroundColor: 'white',
    //   clipPath: 'ellipse(0px 0px at 50% 50%)',
    //   transition: {
    //     duration: 0.3
    //   }
    // }
  };
  return (
    <React.Fragment>
      <motion.div
        className={cn(
          ' border-[1px]  bg-inherit rounded-xl p-1 py-1 flex flex-row justify-center items-center overflow-hidden cursor-pointer',
          isActive
            ? 'border-blueCustom text-blueCustom'
            : isTextWhite
              ? 'border-white text-white'
              : 'border-blackCustom text-blackCustom'
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        layout
      >
        <motion.span className=" p-1   rounded-full relative overflow-hidden ">
          {/* <IconHome stroke={1.2} size={40} className="relative z-10 text-white block" /> */}
          <span className="relative z-10 text-inherit block rounded-full p-[1.5px]">{icon}</span>
          {/* <motion.span
            className="bg-grayCustom absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full"
            variants={variants}
            animate={hovered ? 'iconHovered' : 'iconNotHovered'}
          /> */}
        </motion.span>
        <motion.span
          className="  text-sm p-0 text-inherit text-nowrap whitespace-nowrap border-0 font-medium "
          variants={variants}
          animate={hovered || isActive ? 'hovered' : 'notHovered'}
          layout
        >
          {title}
        </motion.span>
      </motion.div>
    </React.Fragment>
  );
};

export default HeaderIcon;
