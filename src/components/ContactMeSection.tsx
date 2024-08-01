import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandUpwork,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
  IconMapPin,
  IconPhone
} from '@tabler/icons-react';
import LinkedinIcon from '../assets/icons/linkedin.svg';
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
    <div className="w-full flex items-center justify-center py-16  bg-grayCustom text-blackCustom">
      <main className="w-full grid grid-cols-1 md:grid-cols-2 max-w-screen-xl px-4">
        <ContactMeForm />
        <section className="w-full ms-20 flex flex-col gap-10 justify-center items-start">
          <div className="flex gap-5 items-center">
            <motion.span
              className="w-fit border rounded-full"
              variants={iconsVariants}
              initial="notHovered"
              whileHover={'hovered'}
            >
              <Link to="tel:+250787922900">
                <IconPhone
                  stroke={1}
                  className=" w-20 h-20 p-3 rounded-full bg-blueCustom text-white"
                />
              </Link>
            </motion.span>
            <span className="">
              <p className="tetx-sm font-light">Phone</p>
              <Link
                to="tel:+250787922900"
                className="font-bold text-lg text-blackCustom cursor-pointer"
              >
                +250 787 922 900
              </Link>
            </span>
          </div>
          <div className="flex gap-5 items-center">
            <motion.span variants={iconsVariants} initial="notHovered" whileHover={'hovered'}>
              <Link to="mailto:favoureliab@gmail.com">
                <IconMail
                  stroke={1}
                  className=" w-20 h-20 p-3 rounded-full bg-blueCustom text-white"
                />
              </Link>
            </motion.span>

            <span className="">
              <p className="tetx-sm font-light">Email</p>
              <Link
                to="mailto:favoureliab@gmail.com"
                className="font-bold text-lg text-blackCustom"
              >
                favoureliab@gmail.com
              </Link>
            </span>
          </div>
          <div className="flex gap-5 items-center">
            <motion.span variants={iconsVariants} initial="notHovered" whileHover={'hovered'}>
              <IconMapPin
                stroke={1}
                className=" w-20 h-20 p-3 rounded-full bg-blueCustom text-white"
              />
            </motion.span>
            <span className="">
              <p className="tetx-sm font-light">Address</p>
              <p className="font-bold text-lg text-blackCustom">
                KK 15 Rd, <br /> Kicukiro, Kigali Rwanda
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-4 w-full px-4">
            <p className="tetx-sm t">Or you can reach me through :</p>
            <div className="flex  justify-between items-center">
              <motion.span>
                <IconBrandWhatsapp
                  stroke={1}
                  className=" w-16 h-16 p-3 rounded-full  text-blackCustom border-blackCustom border-opacity-50 border-[1px]"
                />
              </motion.span>
              <motion.span>
                <IconBrandX
                  stroke={1}
                  className=" w-16 h-16 p-3 rounded-full  text-blackCustom border-blackCustom border-opacity-50 border-[1px]"
                />
              </motion.span>
              <motion.span>
                <IconBrandDribbble
                  stroke={1}
                  className=" w-16 h-16 p-3 rounded-full  text-blackCustom border-blackCustom border-opacity-50 border-[1px]"
                />
              </motion.span>
              <motion.span>
                <IconBrandGithub
                  stroke={1}
                  className=" w-16 h-16 p-3 rounded-full  text-blackCustom border-blackCustom border-opacity-50 border-[1px]"
                />
              </motion.span>
              <motion.span>
                <IconBrandUpwork
                  stroke={1}
                  className=" w-16 h-16 p-3 rounded-full  text-blackCustom border-blackCustom border-opacity-50 border-[1px]"
                />
              </motion.span>
              <motion.span className=" w-16 h-16 p-3 rounded-full border-blackCustom border-opacity-50 border">
                <img
                  src={LinkedinIcon}
                  alt=""
                  className="  text-blackCustom   object-cover w-full h-full"
                />
              </motion.span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactMeSection;
