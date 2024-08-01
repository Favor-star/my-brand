import { IconBriefcase } from '@tabler/icons-react';
import WorkCard from './WorkCard';
import { motion } from 'framer-motion';

const MyWorks = () => {
  return (
    <section className="w-full bg-inherit text-blackCustom flex flex-col items-center justify-center px-4 py-16 relative">
      <motion.div className="w-[500px] aspect-square bg-blueCustom rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  bg-opacity-25"></motion.div>

      <div className="flex flex-row gap-2 mb-5">
        <IconBriefcase stroke={1} className="w-10 h-10 " />
        <p className="font-bold text-3xl">My works</p>
      </div>
      <main className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 ">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </main>
    </section>
  );
};

export default MyWorks;
