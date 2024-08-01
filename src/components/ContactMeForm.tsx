import { IconSend } from '@tabler/icons-react';
import Input from './common/Input';
import { Button } from './common/button';
import { motion } from 'framer-motion';
import { useState } from 'react';
const ContactMeForm = () => {
  const [isButtonHovered, setIsbuttonHovered] = useState(false);
  return (
    <main className="w-full rounded-2xl flex flex-col gap-4 text-blackCustom p-5 bg-white">
      <p className="text-5xl font-extrabold w-full">Let's work together</p>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit libero illum animi est
        fugit voluptatibus quasi officiis distinctio nam.
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
  );
};

export default ContactMeForm;
