import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
const EyeCatcher = () => {
  const SERVED_CUSTOMERS = 50;
  const EXPERIENCE = 3;
  const PROJECTS = 20;

  const countCustomers = useMotionValue(0);
  const countExperience = useMotionValue(0);
  const countProjects = useMotionValue(0);

  const roundedCustomers = useTransform(countCustomers, Math.round);
  const roundedExperience = useTransform(countExperience, Math.round);
  const roundedProjects = useTransform(countProjects, Math.round);

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
    <motion.div
      className="text-blackCustom py-4 px-10 rounded-[20px] border-blackCustom border  justify-center gap-10 hidden md:flex mx-4 my-8"
      whileHover={{
        scale: 1.03,
        rotate: '1deg',
        transition: {
            duration: 0.5,
            type: "spring"
        }
      }}
    >
      <motion.span
        className="max-w-60 w-full flex gap-1 md:gap-4 "
        whileHover={{
          scale: 1.02,
          rotate: '-2deg'
        }}
      >
        <p className="font-bold text-3xl md:text-5xl  text-blueCustom flex ">
          <motion.p>{roundedProjects}</motion.p>+
        </p>
        <p className="font-light ">Projects worked on so far</p>
      </motion.span>
      <span className="max-w-60 w-full flex gap-1 md:gap-4 ">
        <p className="font-bold text-3xl md:text-5xl text-blueCustom flex ">
          <motion.p>{roundedExperience}</motion.p>+
        </p>
        <p className="font-light ">Years of experience</p>
      </span>
      <span className="max-w-60 w-full flex gap-1 md:gap-4 ">
        <p className="font-bold text-3xl md:text-5xl text-blueCustom flex ">
          <motion.p>{roundedCustomers}</motion.p> +
        </p>

        <p className="font-light ">Happily Served customers</p>
      </span>
    </motion.div>
  );
};

export default EyeCatcher;
