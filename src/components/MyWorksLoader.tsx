import { filterArray } from './MyWorks';
import { motion } from 'framer-motion';
import { IconLoader2 } from '@tabler/icons-react';
import { cn } from '../utils';

const MyWorksLoader = () => {
  return (
    <section className="w-full bg-inherit text-blackCustom flex flex-col items-center justify-center px-4 md:py-10 py-5 relative overflow-hidden ">
      <motion.div className="w-[500px] aspect-square bg-blueCustom rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  bg-opacity-15 -z-20" />

      <div className="flex flex-col gap-2 mb-5    w-full max-w-screen-lg ">
        <p className="font-bold text-2xl">Portfolio</p>
        <div className="w-fit max-w-screen-sm flex flex-row justify-center self-center p-2 bg-grayCustom  gap-2 rounded-[12px]">
          {filterArray.map((item, index) => (
            <p
              className={cn(
                'py-2 rounded-[10px] text-lg   px-4 text-center w-fit cursor-pointer transition-all user-select-none ',
                index === 0
                  ? 'bg-blueCustom text-white'
                  : 'bg-inherit hover:bg-opacity-10  hover:bg-blueCustom transiton-all'
              )}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full min-h-10 h-fit flex flex-col justify-center items-center">
        <IconLoader2 className="flex-1 h-full animate-spin " />
      </div>
    </section>
  );
};

export default MyWorksLoader;
