import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000); // Adjust timing if necessary
  }, []);

  return (
    <>
      <motion.div
        className="h-screen w-screen block bg-blackCustom absolute z-50 -top-5"
        animate={
          loaded
            ? { backgroundColor: 'transparent', zIndex: -9999 }
            : { backgroundColor: '#212830', zIndex: 100 }
        }
        transition={{
          delay: 0.5
        }}
      >
        <motion.div
          className="w-full h-full block absolute bg-white"
          //   initial={{ opacity: 0 }}
          animate={
            loaded
              ? {
                  //   opacity: 1,
                  clipPath: 'circle(1000% at 50% 100%)'
                }
              : {
                  //   opacity: 0,
                  clipPath: 'circle(0% at 50% 100%)'
                }
          }
          transition={{
            opacity: { duration: 0.4 },
            clipPath: { duration: 8, delay: 0.2 }
          }}
        />
      </motion.div>
    </>
  );
};

export default Loader;
