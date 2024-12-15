import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import ContactMeForm from './ContactMeForm';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactMeSection = () => {
  const iconsVariants: Variants = {
    notHovered: {
      scale: 1
    },
    hovered: {
      scale: 1.07
    }
  };
  return (
    <div className="w-full flex items-center justify-center py-5  bg-grayCustom text-blackCustom">
      <main className="w-full flex flex-col-reverse justify-start items-center md:flex-row  max-w-screen-lg px-3 gap-5 md:gap-10">
        <ContactMeForm />
        <section className="w-full grid grid-rows-3 gap-2 justify-start items-start ">
          <div className="flex gap-5 items-center">
            <motion.span variants={iconsVariants} initial="notHovered" whileHover={'hovered'}>
              <Link to="mailto:favoureliab@gmail.com">
                <IconPhone
                  stroke={1}
                  className=" w-16 h-16 p-3 rounded-2xl bg-blueCustom text-white"
                />
              </Link>
            </motion.span>

            <span className="">
              <p className="text-xs font-light">Phone</p>
              <Link to="tel:+250787922900" className="font-medium text-lg text-blackCustom">
                +250 787 922 900
              </Link>
            </span>
          </div>
          <div className="flex gap-5 items-center">
            <motion.span variants={iconsVariants} initial="notHovered" whileHover={'hovered'}>
              <Link to="mailto:favoureliab@gmail.com">
                <IconMail
                  stroke={1}
                  className=" w-16 h-16 p-3 rounded-2xl bg-blueCustom text-white"
                />
              </Link>
            </motion.span>

            <span className="">
              <p className="text-xs font-light">Email</p>
              <Link
                to="mailto:favoureliab@gmail.com"
                className="font-medium text-lg text-blackCustom "
              >
                favoureliab@gmail.com
              </Link>
            </span>
          </div>
          <div className="flex gap-5 items-center">
            <motion.span variants={iconsVariants} initial="notHovered" whileHover={'hovered'}>
              <IconMapPin
                stroke={1}
                className=" w-16 h-16 p-3 rounded-2xl bg-blueCustom text-white"
              />
            </motion.span>
            <span className="">
              <p className="text-xs font-light">Address</p>
              <p className="font-medium text-lg text-blackCustom">
                KK 15 Rd, <br /> Kicukiro, Kigali Rwanda
              </p>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactMeSection;
