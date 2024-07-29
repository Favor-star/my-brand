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
      className="text-blackCustom py-4 px-10 rounded-[20px]  bg-grayOp40 justify-center gap-10 hidden md:flex  my-8"
      whileHover={{
        scale: 1.01,
        // rotate: '.5deg',
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
          <motion.span>{roundedProjects}</motion.span>+
        </p>
        <p className="font-light ">Projects worked on so far</p>
      </motion.span>
      <span className="max-w-60 w-full flex gap-1 md:gap-4 ">
        <p className="font-bold text-3xl md:text-5xl text-blueCustom flex ">
          <motion.span>{roundedExperience}</motion.span>+
        </p>
        <p className="font-light ">Years of experience</p>
      </span>
      <span className="max-w-60 w-full flex gap-1 md:gap-4 ">
        <p className="font-bold text-3xl md:text-5xl text-blueCustom flex ">
          <motion.span>{roundedCustomers}</motion.span> +
        </p>

        <p className="font-light ">Happily Served customers</p>
      </span>
    </motion.div>
  );
};

export default EyeCatcher;
