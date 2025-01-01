import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoscroll from 'embla-carousel-auto-scroll';
import { IconMedal, IconSchool } from '@tabler/icons-react';
import { cn } from '../utils';
// import { EmblaCarouselType } from 'embla-carousel';

interface EducationItem {
  period: string;
  place: string;
  degree: string;
  location: string;
}

const EducationCarousel: React.FC<{ isExp?: boolean }> = ({ isExp = false }) => {
  const [isVertical, setIsVertical] = useState<boolean>(window.innerWidth > 768);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: isVertical ? 'y' : 'x',
      loop: !isVertical,
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: true
    },
    [Autoscroll({ speed: 1, stopOnInteraction: true })]
  );

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleResize = useCallback(() => {
    const newIsVertical = window.innerWidth > 768;
    if (newIsVertical !== isVertical) {
      setIsVertical(newIsVertical);
    }
  }, [isVertical]);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (isVertical && emblaApi) {
        event.preventDefault();
        event.stopPropagation();

        event.deltaY > 0 && emblaApi.scrollNext();
        event.deltaY < 0 && emblaApi.scrollPrev();
      }
    },
    [isVertical, emblaApi]
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [isVertical, emblaApi]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);
  return (
    <div className="w-full bg-inherit relative">
      <div
        className="absolute top-0 left-0 md:w-full md:h-10 w-10 h-full pointer-events-none
             bg-gradient-to-r md:bg-gradient-to-b from-grayCustom to-transparent z-10"
      />
      <div
        className="absolute bottom-0 right-0 md:w-full md:h-10 w-10 h-full pointer-events-none
             bg-gradient-to-l md:bg-gradient-to-t from-grayCustom to-transparent z-10"
      />
      <div
        className={cn('embla', isVertical ? 'embla-vertical' : '')}
        ref={(node: HTMLDivElement | null) => {
          emblaRef(node);
          containerRef.current = node;
        }}
      >
        <div className={cn('embla__container', isVertical ? 'flex-col' : 'flex-row')}>
          {!isExp &&
            educationArray.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'embla__slide',
                  index === 0 ? 'md:mt-10' : 'md:mt-0',
                  index === eduExp.length - 1 ? 'me-5 md:me-0 md:mb-5' : 'me-0 md:me-0 md:mb-0'
                )}
              >
                <EducationCard item={item} />
              </div>
            ))}
          {isExp &&
            experienceArray.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'embla__slide',
                  index === 0 ? 'md:mt-10' : 'md:mt-0',
                  index === eduExp.length - 1 ? 'me-5 md:me-0 md:mb-5' : 'me-0 md:me-0 md:mb-0'
                )}
              >
                <EducationCard item={item} isExp={isExp} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

interface EducationCardProps {
  item: EducationItem;
  isExp?: boolean;
}
const EducationCard: React.FC<EducationCardProps> = ({ item, isExp }: EducationCardProps) => {
  const [isCardHovered, setIsCardHovered] = useState<boolean>(false);
  const pElemVAriant: Variants = {
    notHovered: {
      color: '#212830'
    },
    hovered: {
      color: '#fff'
    }
  };
  return (
    <motion.div
      className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="w-fit rounded-full">
        {!isExp && (
          <IconSchool
            stroke={1}
            className="w-9 h-9 aspect-square p-1 rounded-full bg-white border border-blackCustom"
          />
        )}
        {isExp && (
          <IconMedal
            stroke={1}
            className="w-9 h-9 aspect-square p-1 rounded-full bg-white border border-blackCustom"
          />
        )}
      </span>
      <motion.div
        className="w-full flex-1 flex flex-col justify-start  p-4 rounded-xl bg-white cursor-default select-none relative overflow-hidden"
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
        }}
        onMouseLeave={() => {
          setIsCardHovered(false);
        }}
      >
        <motion.p
          className={cn(
            'uppercase font-normal text-sm relative z-10',
            isCardHovered ? 'text-white' : 'text-blackCustom'
          )}
          variants={pElemVAriant}
          initial="notHovered"
          animate={isCardHovered ? 'hovered' : 'notHovered'}
        >
          {item.period}
        </motion.p>
        <motion.p
          className={cn(
            'text-lg font-extrabold uppercase text-blueCustom relative z-10 transition-all',
            isCardHovered ? 'text-white' : 'text-blueCustom'
          )}
        >
          {item.place}
        </motion.p>
        <span className="w-full flex justify-between items-center relative z-10 transition-all">
          <motion.p
            className={cn('text-sm')}
            variants={pElemVAriant}
            initial="notHovered"
            animate={isCardHovered ? 'hovered' : 'notHovered'}
          >
            {item.degree}
          </motion.p>
          <motion.p
            className={cn('italic text-xs transition-all')}
            variants={pElemVAriant}
            initial="notHovered"
            animate={isCardHovered ? 'hovered' : 'notHovered'}
          >
            {item.location}
          </motion.p>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default EducationCarousel;

const eduExp: EducationItem[] = [
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    degree: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    degree: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    degree: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    degree: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    degree: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    degree: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    degree: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2012-present',
    place: 'RP/IPRC KIGALI',
    degree: 'Advanced diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  }
];

const educationArray: EducationItem[] = [
  {
    period: '2023 - 2024',
    place: 'Andela Rwanda',
    degree: 'Andela Technical Leadership Certification Program',
    location: 'Remote'
  },
  {
    period: 'May 2024',
    place: 'University of Rwanda',
    degree: 'XR (VR/AR) application development program beginner',
    location: 'Kigali, Rwanda'
  },
  {
    period: 'December 2024',
    place: 'University of Rwanda',
    degree: 'XR (VR/AR) application development program intermediate',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2024',
    place: 'ALU - Africa',
    degree: 'CodeXtreme Hackathon',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2021- Present',
    place: 'RP - KIGALI COLLEGE',
    degree: 'Advanced Diploma in Mechatronics',
    location: 'Kigali, Rwanda'
  },
  {
    period: ' 2018 - 2021',
    place: 'IPRC KIGALI / TSS',
    degree: 'Diploma in Production & Manufacturing Technology',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2015 - 2018',
    place: 'ESSA GISENYI',
    degree: ' Ordinary Level',
    location: 'Gisenyi - Rwanda'
  }
];

const experienceArray: EducationItem[] = [
  {
    period: '2024 - Present',
    place: 'Harena MEP',
    degree: 'Designer and MEP modeller',
    location: ' Kigali, Rwanda'
  },
  {
    period: '2023 - 2024',
    place: 'Cover Soko',
    degree: 'Fullstack Web developer',
    location: 'Kigali - Rwanda'
  },
  {
    period: 'January 2024 - December 2024',
    place: 'Wildlife Conservation Travel',
    degree: 'UI/ UX designer & Frontend developer',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2023 - 2024',
    place: 'Andela',
    degree: 'Junior Full stack Developer',
    location: 'Kigali - Rwanda'
  },
  {
    period: '2023 - 2024',
    place: 'Digital Minds Tech',
    degree: 'Software Engineer & Designer',
    location: 'Kigali, Rwanda'
  },
  {
    period: '2022 - 2024',
    place: 'BICE Mechatrotech Ltd',
    degree: 'Designer and Web engineer',
    location: 'Kigali Rwanda'
  }
];
