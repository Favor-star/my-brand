import {
  IconBrandBootstrap,
  IconBrandCpp,
  IconBrandCSharp,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandFramer,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandUnity,
  IconBrandWordpress,
  IconChecks
} from '@tabler/icons-react';
import { easeInOut, motion } from 'framer-motion';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoscroll from 'embla-carousel-auto-scroll';
import Arrows from './common/Arrows';
import { cn } from '../utils';
import { usePrevNextButtons } from '../hooks/usePrevNextButtons';

const OtherSkills = ({ fromHome = false }: { fromHome?: boolean }) => {
  const [skillsSlideRef, skillsSlideAPI] = useEmblaCarousel({ loop: true, slidesToScroll: 2 }, [
    Autoscroll({ speed: 0.8, startDelay: 500 })
  ]);
  const { nextWhileMoving, onNextButtonClick, onPrevButtonClick } =
    usePrevNextButtons(skillsSlideAPI);

  return (
    <div className="w-full flex flex-col items-center justify-center px-3">
      <section className="w-full max-w-screen-lg  ">
        <div className="w-full flex justify-between items-center my-5">
          <p className="font-medium text-2xl">Skills</p>
          <Arrows
            onLeftClick={() => nextWhileMoving(onPrevButtonClick)}
            onRightClick={() => nextWhileMoving(onNextButtonClick)}
          />
        </div>
        <div className="overflow-hidden w-full " ref={skillsSlideRef}>
          <div className="flex flex-row gap-3 w-full items-center justify-start">
            {mainSkills.map(({ title, logo, level }, index) => (
              <span
                style={{
                  flex: '0 0 124px',
                  marginRight: index === mainSkills.length - 1 ? '12px' : 0
                }}
              >
                <Skill title={title} logo={logo} level={level} key={index + Math.random()} />
              </span>
            ))}
          </div>
        </div>
        {!fromHome && (
          <p className="py-2">Apart from technical skills, I also posseses the following skills:</p>
        )}
        {!fromHome && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 items-center flex-wrap">
            {softSkils.map((skill, index) => (
              <p
                className="w-full p-3 bg-grayCustom rounded-md flex items-center justify-start gap-2 whitespace-nowrap"
                key={skill + (index + 1)}
              >
                <IconChecks stroke={1.25} className="text-blueCustom" />

                {skill}
              </p>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default OtherSkills;

export const Skill = ({
  title,
  logo,
  level
}: {
  title: string;
  logo: React.ReactNode;
  level: number;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLogoHovered, setIsLogoHovered] = useState<boolean>(false);
  return (
    <motion.div
      className={cn(
        'w-fit flex flex-col items-center gap-2 p-3 bg-grayCustom my-5 rounded-[20px] relative overflow-hidden '
      )}
      layout="position"
      style={{ flex: '0 0 124px' }}
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
        className=" bg-blueCustom h-full w-full aspect-square absolute top-0 left-0 -z-10 select-none"
        layout="position"
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
      />
      <motion.span
        className="w-full max-w-[100px] aspect-square h-[100px] text-blackCustom bg-white p-3 rounded-[10px] relative z-10 overflow-hidden"
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
        {/* <IconBrandFigma stroke={0.6} className="w-full h-full" /> */}
        <span className="w-full h-full select-none">{logo}</span>
      </motion.span>
      <motion.p
        className="text-blackCustom text-lg capitalize select-none"
        layout="position"
        animate={
          isHovered ? { color: '#fff', transition: { type: 'tween' } } : { color: '#212830' }
        }
      >
        {title}
      </motion.p>
      <div className="w-full flex flex-col items-center gap-1">
        {/* <motion.p className="italic" animate={isHovered ? { color: '#fff' } : { color: '#212830' }}>
          80%
        </motion.p> */}
        <motion.div
          className="w-full h-2 m-1 border  rounded-[2px] "
          animate={isHovered ? { border: '1px solid #fff' } : { border: '1px solid #e5e4e2' }}
        >
          <motion.span
            className="w-[80%]  h-full block "
            animate={
              isHovered
                ? {
                    backgroundColor: '#fff',
                    width: `${level}%`,
                    transition: { delay: 0.4, duration: 0.8, type: 'tween', ease: easeInOut }
                  }
                : { backgroundColor: '#fff', width: 0 }
            }
          ></motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

const softSkils = [
  'Problem Solving Skills',
  'Networking Skills',
  'Analytical Skills',
  'Communication Skills',
  'Teamwork',
  'Adaptability',
  'Time Management',
  'Critical Thinking',
  'Creativity',
  'Leadership',
  'Emotional Intelligence',
  'Conflict Resolution',
  'Decision Making',
  'Interpersonal Skills',
  'Work Ethic'
];

const mainSkills = [
  {
    title: 'JS',
    logo: <IconBrandJavascript stroke={0.6} className="w-full h-full" />,
    level: 80
  },
  {
    title: 'Figma',
    logo: <IconBrandFigma stroke={0.6} className="w-full h-full" />,
    level: 70
  },
  {
    title: 'CSS3',
    logo: <IconBrandCss3 stroke={0.6} className="w-full h-full" />,
    level: 90
  },
  {
    title: 'Tailwind',
    logo: <IconBrandTailwind stroke={0.6} className="w-full h-full" />,
    level: 90
  },
  {
    title: 'NextJs',
    logo: <IconBrandNextjs stroke={0.6} className="w-full h-full" />,
    level: 30
  },
  {
    title: 'React',
    logo: <IconBrandReact stroke={0.6} className="w-full h-full" />,
    level: 80
  },
  {
    title: 'TypeScript',
    logo: <IconBrandTypescript stroke={0.6} className="w-full h-full" />,
    level: 70
  },
  {
    title: 'WordPress',
    logo: <IconBrandWordpress stroke={0.6} className="w-full h-full" />,
    level: 60
  },
  {
    title: 'Framer',
    logo: <IconBrandFramer stroke={0.6} className="w-full h-full" />,
    level: 30
  },
  {
    title: 'VR / AR',
    logo: <IconBrandUnity stroke={0.6} className="w-full h-full" />,
    level: 30
  },
  {
    title: 'C#',
    logo: <IconBrandCSharp stroke={0.6} className="w-full h-full" />,
    level: 45
  },
  {
    title: 'C++',
    logo: <IconBrandCpp stroke={0.6} className="w-full h-full" />,
    level: 45
  },
  {
    title: 'Bootstrap',
    logo: <IconBrandBootstrap stroke={0.6} className="w-full h-full" />,
    level: 80
  }
];
