import { IconBrandFigma } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const OtherSkills = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="w-full max-w-screen-xl  ">
        <p className="">Apart from technical skills, I also posseses the following skills:</p>
        <div className="w-full flex justify-between gap-5 items-center flex-wrap">
          <p className="w-[322px] p-3 bg-grayCustom rounded-lg">Comunication SKills</p>
          <p className="w-[322px] p-3 bg-grayCustom rounded-lg">Comunication SKills</p>
          <p className="w-[322px] p-3 bg-grayCustom rounded-lg">Comunication SKills</p>
          <p className="w-[322px] p-3 bg-grayCustom rounded-lg">Comunication SKills</p>
          <p className="w-[322px] p-3 bg-grayCustom rounded-lg">Comunication SKills</p>
          <p className="w-[322px] p-3 bg-grayCustom rounded-lg">Comunication SKills</p>
        </div>
        <div className="flex gap-4 w-full items-center justify-center">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </section>
    </div>
  );
};

export default OtherSkills;

export const Skill = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLogoHovered, setIsLogoHovered] = useState<boolean>(false);
  return (
    <motion.div
      className="w-fit flex flex-col items-center gap-2 p-4 bg-grayCustom my-10 rounded-[32px] relative overflow-hidden"
      whileHover={{
        backgroundColor: '#2454ff80',
        scale: 1.03,
        transition: {
          duration: 0.4
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className=" bg-blueCustom h-full w-full aspect-square absolute top-0 left-0 -z-10"
        style={{
          clipPath: 'ellipse(50px 50px at 10% 20%)'
        }}
        // whileHover={{ clipPath: 'ellipse(300px 300px at 10% 20%)' }}
        animate={
          isHovered
            ? {
                clipPath: 'ellipse(300px 300px at 10% 20%)',
                opacity: 1,
                transition: {
                  duration: 1
                }
              }
            : {
                clipPath: 'ellipse(50px 50px at 10% 20%)',
                opacity: 0,
                transition: {
                  duration: 1
                }
              }
        }
      ></motion.span>
      <motion.span
        className="w-full max-w-[100px] aspect-square h-[100px] text-blackCustom bg-white p-3 rounded-2xl relative z-10 overflow-hidden"
        animate={
          isHovered
            ? { backgroundColor: '#e5e4e2', color: '#2454ff' }
            : { backgroundColor: '#fff', color: '#212830' }
        }
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
      >
        <motion.span
          className=" bg-white h-full w-full aspect-square absolute top-0 left-0 -z-10"
          style={{
            clipPath: 'ellipse(50px 50px at 10% 20%)'
          }}
          // whileHover={{ clipPath: 'ellipse(300px 300px at 10% 20%)' }}
          animate={
            isLogoHovered
              ? {
                  clipPath: 'ellipse(120px 120px at 90% 80%)',
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.3
                  }
                }
              : {
                  clipPath: 'ellipse(10px 10px at 90% 80%)',
                  opacity: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.3
                  }
                }
          }
        ></motion.span>
        <IconBrandFigma stroke={0.6} className="w-full h-full" />
      </motion.span>
      <motion.p
        className="text-blueCustom text-lg capitalize"
        animate={isHovered ? { color: '#fff' } : { color: '#2454ff' }}
      >
        Figma
      </motion.p>
      <div className="w-full flex flex-col items-center gap-1">
        <motion.p className="italic" animate={isHovered ? { color: '#fff' } : { color: '#212830' }}>
          80%
        </motion.p>
        <motion.div
          className="w-full h-2 border  rounded-full"
          animate={isHovered ? { border: '1px solid #fff' } : { border: '1px solid #212830' }}
        >
          <motion.span
            className="w-[80%] bg-blackCustom h-full block "
            animate={isHovered ? { backgroundColor: '#fff' } : { backgroundColor: '#212830' }}
          ></motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};
