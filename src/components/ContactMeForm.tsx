import { IconSend } from '@tabler/icons-react';
import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandUpwork,
  IconBrandWhatsapp,
  IconBrandX
} from '@tabler/icons-react';
// import LinkedinIcon from '../assets/icons/linkedin.svg';
import Input from './common/Input';
import { Button } from './common/button';
import { motion } from 'framer-motion';
import { useState } from 'react';
const ContactMeForm = () => {
  const [isButtonHovered, setIsbuttonHovered] = useState(false);
  return (
    <div className="w-full flex flex-col gap-2">
      <main className="w-full rounded-2xl flex flex-col gap-4 text-blackCustom p-5 bg-white">
        <p className="text-4xl font-extrabold w-full">Let's work together</p>
        <p className="text-lg">
          Ready to start? Reach out and let's make something amazing together.
        </p>
        <section className="w-full flex flex-col gap-3">
          <div className="w-full grid grid-cols-2 gap-3">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>
          <div className="w-full grid grid-cols-2 gap-3">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Phone Number" type="tel" />
          </div>
          <div className="w-full">
            <input
              type=""
              placeholder="Choose a service"
              className="border border-blackCustom p-3 focus-within:outline-none placeholder:text-blackCustom placeholder:text-opacity-60 border-opacity-50 rounded-lg  w-full"
            />
          </div>
          <div className="w-full">
            <input
              type="file"
              placeholder="Choose a service"
              className="border border-blackCustom p-3 focus-within:outline-none placeholder:text-blackCustom placeholder:text-opacity-60 border-opacity-50 rounded-lg  w-full"
            />
          </div>
          <div className="w-full">
            {/* <input
            type="file"
            placeholder="Choose a service"
            className="border border-blackCustom p-3 focus-within:outline-none placeholder:text-blackCustom placeholder:text-opacity-60 border-opacity-50 rounded-lg  w-full"
          /> */}
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="border border-blackCustom p-3 focus-within:outline-none placeholder:text-blackCustom placeholder:text-opacity-60 border-opacity-50 rounded-lg  w-full resize-y min-h-32 h-fit "
            ></textarea>
          </div>

          <Button onHoverChange={setIsbuttonHovered}>
            Send Message
            <motion.span
              animate={isButtonHovered ? { rotate: '45deg', scale: 1.01 } : { rotate: '0deg' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <IconSend stroke={1} />
            </motion.span>
          </Button>
        </section>
      </main>
      <div className="flex flex-col  gap-2 mt-4 w-full max-w-[350px] md:max-w-full">
        <p className="text-sm ">Or you can reach me through:</p>
        <div className="flex w-full   justify-between items-center ">
          <motion.span
            whileHover={{ scale: 1.1 }}
            layout="position"
            transition={{
              type: 'spring',
              stiffness: 400,
              dammping: 10
            }}
          >
            <IconBrandWhatsapp
              stroke={1}
              className=" w-10 h-10 md:w-12 md:h-12 p-1 rounded-md sm:rounded-lg  text-white  border-blackCustom bg-blackCustom  border-[1px]"
            />
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            layout="size"
            transition={{
              type: 'spring',
              stiffness: 400,
              dammping: 10
            }}
          >
            <IconBrandX
              stroke={1}
              className=" w-10 h-10 md:w-12 md:h-12  p-1 rounded-md sm:rounded-lg  text-white  border-blackCustom bg-blackCustom  border-[1px]"
            />
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            layout="size"
            transition={{
              type: 'spring',
              stiffness: 400,
              dammping: 10
            }}
          >
            <IconBrandDribbble
              stroke={1}
              className=" w-10 h-10 md:w-12 md:h-12  p-1 rounded-md sm:rounded-lg  text-white  border-blackCustom bg-blackCustom  border-[1px]"
            />
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            layout="size"
            transition={{
              type: 'spring',
              stiffness: 400,
              dammping: 10
            }}
          >
            <IconBrandGithub
              stroke={1}
              className=" w-10 h-10 md:w-12 md:h-12  p-1 rounded-md sm:rounded-lg  text-white  border-blackCustom bg-blackCustom  border-[1px]"
            />
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            layout="size"
            transition={{
              type: 'spring',
              stiffness: 400,
              dammping: 10
            }}
          >
            <IconBrandUpwork
              stroke={1}
              className=" w-10 h-10 md:w-12 md:h-12  p-1 rounded-md sm:rounded-lg  text-white  border-blackCustom bg-blackCustom  border-[1px]"
            />
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            layout="size"
            transition={{
              type: 'spring',
              stiffness: 400,
              dammping: 10
            }}
          >
            <IconBrandLinkedin
              stroke={1}
              className=" w-10 h-10 md:w-12 md:h-12 p-1 rounded-md sm:rounded-lg  text-white  border-blackCustom bg-blackCustom  border-[1px]"
            />
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default ContactMeForm;
