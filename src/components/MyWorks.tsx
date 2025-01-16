import { IconRefresh } from '@tabler/icons-react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FocusCards } from './FocusCard';
import Image from '../assets/Design 1.png';
import WCT from '../assets/WCT.png';
import oldPortfolio from '../assets/oldPortfolio.png';
import Weather from '../assets/Weather.png';
import igaApp from '../assets/igaApp.png';
import countriesApp from '../assets/countriesApp.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from './common/button';
import { cn } from '../utils';
import MyPortfolioDesign from '../assets/MyPortfolioDesign.webp';
import vShop from "../assets/LANDING PAGE.webp"
const MyWorks = () => {
  const [filterIndex, setFilterIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate('/portfolio');
  };
  const filteredCards = useMemo(() => {
    return filterIndex === filterArray.indexOf('All')
      ? cards
      : cards.filter((elem) => elem.filter === filterArray[filterIndex]);
  }, [filterIndex, cards, filterArray]);

  return (
    <section className="w-full bg-inherit text-blackCustom flex flex-col items-center justify-center px-4 md:py-10 py-5 relative overflow-hidden ">
      <motion.div className="w-[500px] aspect-square bg-blueCustom rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  bg-opacity-15 -z-20" />

      <div className="flex flex-col gap-2 mb-5    w-full max-w-screen-lg ">
        {/* <IconBriefcase stroke={1} className="w-10 h-10 " /> */}
        <p className="font-bold text-2xl">Portfolio</p>
        <div className="w-fit max-w-screen-sm flex flex-row justify-center self-center p-2 bg-grayCustom  gap-2 rounded-[12px]">
          {/* <p className="py-2 rounded-[10px] text-lg bg-blueCustom text-white  px-4 text-center w-fit">
            All
          </p>
          <p className="py-2 rounded-sm text-lg bg-inherit ">Web Design</p>
          <p className="py-2 rounded-sm text-lg bg-inherit w-fit px-4">Web Development</p> */}
          {filterArray.map((item, index) => (
            <p
              className={cn(
                'py-2 rounded-[10px] text-lg   px-4 text-center w-fit cursor-pointer transition-all user-select-none',
                index === filterIndex
                  ? 'bg-blueCustom text-white'
                  : 'bg-inherit hover:bg-opacity-10  hover:bg-blueCustom transiton-all'
              )}
              onClick={() => setFilterIndex(index)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <FocusCards cards={filteredCards} fromHome={location.pathname === '/'} />
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
export const filterArray = ['All', 'Web Design', 'Web Development'];

const cards = [
  {
    title: 'wildlifeconservationtravel.com',
    src: WCT,
    href: 'https://wildlifeconservationtravel.com',
    filter: 'Web Development'
  },
  {
    title: 'Iga App',
    src: Image,
    href: 'https://favor-star.github.io/tsinda/',
    filter: 'Web Development'
  },
  {
    title: 'Tsinda',
    src: igaApp,
    href: 'https://favor-star.github.io/quiz-app/',
    filter: 'Web Development'
  },
  {
    title: 'Countries App',
    src: countriesApp,
    href: 'https://favor-star.github.io/countries-app/',
    filter: 'Web Development'
  },
  {
    title: 'Outdated Portofolio',
    src: oldPortfolio,
    href: 'https://favor-star.github.io/my-brand-favor/',
    filter: 'Web Development'
  },
  {
    title: 'Weather app',
    src: Weather,
    href: 'https://favor-star.github.io/weather-app/',
    filter: 'Web Development'
  },
  {
    title: 'My Portfolio',
    src: MyPortfolioDesign,
    href: '',
    filter: 'Web Design'
  },
  {
    title: 'Virtual workshop',
    src: vShop,
    href: '',
    filter: 'Web Design'
  }
];
