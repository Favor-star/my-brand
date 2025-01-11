import { IconRefresh } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { FocusCards } from './FocusCard';
import Image from '../assets/Design 1.png';
import WCT from '../assets/WCT.png';
import oldPortfolio from '../assets/oldPortfolio.png';
import Weather from '../assets/Weather.png';
import igaApp from '../assets/igaApp.png';
import countriesApp from '../assets/countriesApp.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from './common/button';
const MyWorks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate('/portfolio');
  };

 
  return (
    <section className="w-full bg-inherit text-blackCustom flex flex-col items-center justify-center px-4 md:py-10 py-5 relative overflow-hidden ">
      <motion.div className="w-[500px] aspect-square bg-blueCustom rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  bg-opacity-15 -z-20" />

      <div className="flex flex-row gap-2 mb-5   w-full max-w-screen-lg ">
        {/* <IconBriefcase stroke={1} className="w-10 h-10 " /> */}
        <p className="font-bold text-2xl">Portfolio</p>
      </div>
      <FocusCards cards={cards} fromHome={location.pathname === '/'} />
      {location.pathname === '/' && (
        <Button variant={'outline'} className="mt-5 text-sm " onClick={handleViewMore}>
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
  {
    title: 'wildlifeconservationtravel.com',
    src: WCT,
    href: 'https://wildlifeconservationtravel.com'
  },
  { title: 'Iga App', src: Image, href: 'https://favor-star.github.io/tsinda/' },
  { title: 'Tsinda', src: igaApp, href: 'https://favor-star.github.io/quiz-app/' },
  {
    title: 'Countries App',
    src: countriesApp,
    href: 'https://favor-star.github.io/countries-app/'
  },
  {
    title: 'Outdated Portofolio',
    src: oldPortfolio,
    href: 'https://favor-star.github.io/my-brand-favor/'
  },
  { title: 'Weather app', src: Weather, href: 'https://favor-star.github.io/weather-app/' }
];
