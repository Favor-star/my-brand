import { IconArrowNarrowRight, IconCreditCard, IconRefresh } from '@tabler/icons-react';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../utils';
import { Button } from './common/button';

const MyServices = ({ fromHome = false }: { fromHome?: boolean }) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);
  const y = useMotionValue(0);

  useEffect(() => {
    const calculateMaxHeight = () => {
      const heights = itemRefs.current
        .filter((ref): ref is HTMLDivElement => ref !== null)
        .map((ref) => ref.offsetHeight);

      const newMaxHeight = Math.max(...heights);
      setMaxHeight(newMaxHeight);
    };

    calculateMaxHeight();
    window.addEventListener('resize', calculateMaxHeight);

    return () => window.removeEventListener('resize', calculateMaxHeight);
  }, []);

  useEffect(() => {
    y.set(hoveredIndex * maxHeight);
  }, [hoveredIndex, maxHeight, y]);

  return (
    <section className="w-full bg-grayCustom text-blackCustom flex flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-row gap-2 mb-5">
        <IconCreditCard stroke={1} className="w-10 h-10" />
        <p className="font-bold text-3xl">My offered Services</p>
      </div>
      <main className="w-full max-w-screen-lg flex flex-col gap-0 relative">
        {[...(fromHome ? services.slice(0, 3) : services)].map((service, index) => (
          <div
            className="grid grid-cols-[auto,30px] gap-5 justify-between items-stretch py-3 px-2 border-b border-b-blackCustom relative z-10"
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            style={{ minHeight: maxHeight > 0 ? `${maxHeight}px` : 'auto' }}
            onMouseEnter={() => {
              setHoveredIndex(index);
            }}
          >
            <span className="flex gap-2 ">
              <p
                className={cn(
                  'font-bold text-lg transition-all',
                  hoveredIndex === index ? 'text-white' : 'text-blackCustom'
                )}
              >
                0{index + 1}.
              </p>
              <span className="flex gap-3 flex-col sm:flex-row">
                <p
                  className={cn(
                    'font-bold text-lg w-[250px] transition-all',
                    hoveredIndex === index ? 'text-white' : 'text-blackCustom'
                  )}
                >
                  {service.title}
                </p>
                <p
                  className={cn(
                    'font-normal max-w-[600px] flex-1 transition-all text-base',
                    hoveredIndex === index ? 'text-white' : 'text-blackCustom'
                  )}
                >
                  {service.info}
                </p>
              </span>
            </span>
            <motion.span
              className="w-fit"
              whileHover={{
                translateX: 10
              }}
            >
              <IconArrowNarrowRight
                stroke={1.25}
                className={cn(
                  'w-6 h-6 text-blackCustom',
                  hoveredIndex === index ? 'text-white' : 'text-blackCustom'
                )}
              />
            </motion.span>
          </div>
        ))}
        <motion.span
          className="bg-blueCustom w-full absolute z-0 rounded-lg"
          style={{
            height: maxHeight,
            y
          }}
          initial={false}
          animate={{ y: hoveredIndex * maxHeight }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        ></motion.span>
      </main>
      <Button variant={'outline'} className="mt-10" onHoverChange={setIsButtonHovered}>
        View More
        <motion.span
          animate={isButtonHovered ? { rotate: '180deg' } : { rotate: '0deg' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <IconRefresh />
        </motion.span>
      </Button>
    </section>
  );
};

export default MyServices;

// const ServicePoint = ({ title, info }: ServicePointProps) => {
//   const [hovered, setHovered] = useState(false);
//   const [hoveredIndex, sethoveredIndex] = useState(second)
//   return (
//     <div
//       className="flex gap-5 justify-between items-center py-3 px-2 border-b border-b-blackCustom relative z-10"
//       key={index}
//       ref={index === 0 ? divRef : null}
//       onMouseEnter={() => {
//         setHoveredIndex(index);
//       }}
//     >
//       <span className="flex gap-5">
//         <p
//           className={cn(
//             'font-bold text-xl transition-all',
//             hoveredIndex === index ? 'text-white' : 'text-blackCustom'
//           )}
//         >
//           0{index + 1}.
//         </p>
//         <p
//           className={cn(
//             'font-bold text-xl w-[250px] transition-all',
//             hoveredIndex === index ? 'text-white' : 'text-blackCustom'
//           )}
//         >
//           {service.title}
//         </p>
//       </span>
//       <p
//         className={cn(
//           'font-normal max-w-[650px] flex-1 transition-all',
//           hoveredIndex === index ? 'text-white' : 'text-blackCustom'
//         )}
//       >
//         {service.info}
//       </p>
//       <motion.span
//         className="w-fit"
//         whileHover={{
//           translateX: 10
//         }}
//       >
//         <IconArrowNarrowRight
//           stroke={0.5}
//           className={cn(
//             'w-16 h-16 text-blackCustom',
//             hoveredIndex === index ? 'text-white' : 'text-blackCustom'
//           )}
//         />
//       </motion.span>
//     </div>
//   );
// };

type ServicePointProps = {
  title: string;
  info: string;
};

const services: ServicePointProps[] = [
  {
    title: 'Design & Prototyping',
    info: ' My favorite tool, FIGMA, helps me to design best of the best websites, wireframes and even presentations. '
  },
  {
    title: 'Modelling',
    info: ' I use mechanical designing software, especially SOLIDWORKS to create accurate and beautifully crafted mechanical components.'
  },
  {
    title: 'Web development',
    info: 'By mostly using popular stack, MERN, I find myself crafting beautiful, user-friendly websites that always meets customers’ needs.'
  },
  {
    title: 'Embedded Systems',
    info: ' Mechatronics background equips me with essential skills to be able to handle different micro-controller based works efficiently.'
  },
  {
    title: '3D Printing',
    info: ' WIth more that a year in 3D printing, I am able to turn complicated designs into real world products using cross-cutting 3D printing tech.'
  }
];
