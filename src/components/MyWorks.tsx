import { IconBriefcase } from '@tabler/icons-react';
import WorkCard from './WorkCard';

const MyWorks = () => {
  return (
    <section className="w-full bg-inherit text-blackCustom flex flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-row gap-2 mb-5">
        <IconBriefcase stroke={1} className="w-10 h-10 " />
        <p className="font-bold text-3xl">My offered Services</p>
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
