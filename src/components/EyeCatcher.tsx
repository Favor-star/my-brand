import { useMotionValue,  animate } from 'framer-motion';
import { useEffect } from 'react';
const EyeCatcher = () => {
  const SERVED_CUSTOMERS = 50;
  const EXPERIENCE = 3;
  const PROJECTS = 20;

  const countCustomers = useMotionValue(0);
  const countExperience = useMotionValue(0);
  const countProjects = useMotionValue(0);

  // const roundedCustomers = useTransform(countCustomers, Math.round);
  // const roundedExperience = useTransform(countExperience, Math.round);
  // const roundedProjects = useTransform(countProjects, Math.round);

  useEffect(() => {
    const animationCustomers = animate(countCustomers, SERVED_CUSTOMERS, { duration: 2 });
    const animationExperience = animate(countExperience, EXPERIENCE, { duration: 2 });
    const animationProjects = animate(countProjects, PROJECTS, { duration: 2 });

    return () => {
      animationCustomers.stop();
      animationExperience.stop();
      animationProjects.stop();
    };
  }, []);
  return (
    // <motion.div
    //   className="text-blackCustom py-4 px-10 rounded-[20px]  bg-grayOp40 justify-center gap-10 hidden md:flex  my-8"
    //   whileHover={{
    //     scale: 1.01,
    //     // rotate: '.5deg',
    //     transition: {
    //         duration: 0.5,
    //         type: "spring"
    //     }
    //   }}
    // >
    //   <motion.span
    //     className="max-w-60 w-full flex gap-1 md:gap-4 "
    //     whileHover={{
    //       scale: 1.02,
    //       rotate: '-2deg'
    //     }}
    //   >
    //     <p className="font-bold text-3xl md:text-5xl  text-blueCustom flex ">
    //       <motion.span>{roundedProjects}</motion.span>+
    //     </p>
    //     <p className="font-light ">Projects worked on so far</p>
    //   </motion.span>
    //   <span className="max-w-60 w-full flex gap-1 md:gap-4 ">
    //     <p className="font-bold text-3xl md:text-5xl text-blueCustom flex ">
    //       <motion.span>{roundedExperience}</motion.span>+
    //     </p>
    //     <p className="font-light ">Years of experience</p>
    //   </span>
    //   <span className="max-w-60 w-full flex gap-1 md:gap-4 ">
    //     <p className="font-bold text-3xl md:text-5xl text-blueCustom flex ">
    //       <motion.span>{roundedCustomers}</motion.span> +
    //     </p>

    //     <p className="font-light ">Happily Served customers</p>
    //   </span>
    // </motion.div>
    <main className="max-w-screen-lg px-3 w-full flex flex-col gap-2 my-5 text-blackCustom">
      <p className="text-base text-start">So far, more than</p>
      <div className="w-full  justify-center gap-5 items-center grid grid-cols-2  md:grid-cols-4">
        <span className="flex flex-col sm:flex-row gap-2 justify-start items-center md:justify-center  md:max-w-[240px] w-full">
          <p className="text-5xl font-semibold">20+</p>
          <p className="text-base  leading-snug">Different projects have been deployed so far</p>
        </span>
        <span className="flex flex-col sm:flex-row gap-2 justify-start items-center md:justify-center md:max-w-[240px] w-full">
          <p className="text-5xl font-semibold">20+</p>
          <p className="text-base leading-snug">Clients are well satisfied, happy and cheering</p>
        </span>
        <span className="flex flex-col sm:flex-row gap-2 justify-start items-center md:justify-center md:max-w-[240px] w-full">
          <p className="text-5xl font-semibold">20+</p>
          <p className="text-base leading-snug">
            Different designs, prototyps & websites were made{' '}
          </p>
        </span>
        <span className="flex flex-col sm:flex-row gap-2 justify-start items-center md:justify-center md:max-w-[240px] w-full">
          <p className="text-5xl font-semibold">5+</p>
          <p className="text-base leading-none">Years of experience spent doing this stuffs</p>
        </span>
      </div>
    </main>
  );
};

export default EyeCatcher;
