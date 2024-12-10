import { IconBriefcase, IconRefresh } from '@tabler/icons-react';
import WorkCard from './WorkCard';
import { motion } from 'framer-motion';
import { FocusCards } from './FocusCard';
import { useEffect } from 'react';
import Image from '../assets/Design 1.png';
import { useLocation } from 'react-router-dom';
import { Button } from './common/button';
const MyWorks = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname === '/');

    return () => {};
  }, [location]);

  return (
    <section className="w-full bg-inherit text-blackCustom flex flex-col items-center justify-center px-4 md:py-10 py-5 relative overflow-hidden ">
      <motion.div className="w-[500px] aspect-square bg-blueCustom rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  bg-opacity-15"></motion.div>

      <div className="flex flex-row gap-2 mb-5   w-full max-w-screen-lg ">
        {/* <IconBriefcase stroke={1} className="w-10 h-10 " /> */}
        <p className="font-bold text-2xl">Portfolio</p>
      </div>
      <FocusCards cards={cards} fromHome={location.pathname === '/'} />
      {location.pathname === '/' && (
        <Button variant={'outline'} className='mt-2 text-sm '>
          View More
          <IconRefresh stroke={1} />
        </Button>
      )}
      {/* <main className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 ">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </main> */}
    </section>
  );
};

export default MyWorks;
// const cards = [
//   {
//     title: 'Forest Adventure',
//     src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   },
//   {
//     title: 'Valley of life',
//     src: 'https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   },
//   {
//     title: 'Sala behta hi jayega',
//     src: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   },
//   {
//     title: 'Camping is for pros',
//     src: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   },
//   {
//     title: 'The road not taken',
//     src: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//   },
//   {
//     title: 'The First Rule',
//     src: 'https://assets.aceternity.com/the-first-rule.png'
//   }
// ];

const cards = [
  { title: 'wildlifeconservationtravel.com', src: Image },
  { title: 'wildlifeconservationtravel.com', src: Image },
  { title: 'wildlifeconservationtravel.com', src: Image },
  { title: 'wildlifeconservationtravel.com', src: Image },
  { title: 'wildlifeconservationtravel.com', src: Image }
];
