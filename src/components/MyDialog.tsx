import { motion, AnimatePresence } from 'framer-motion';
import {  IconX } from '@tabler/icons-react';
import ReactDOM from 'react-dom';

const MyDialog = ({
  image,
  isOpen,
  onClose
}: {
  image: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.main
          className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center bg-black/60 p-4 z-[1000] overflow-y-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Adjust the fade-in duration
        >
          <motion.section
            className="w-full max-w-screen-lg bg-grayCustom rounded-lg relative p-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }} // Delays dialog animation slightly
          >
            <IconX
              className="absolute top-2 right-2 cursor-pointer border border-blackCustom text-blackCustom bg-opacity-50 hover:bg-blackCustom hover:text-white hover:rotate-90 transition-all p-1 rounded-lg hover:rounded-xl h-8 w-8 shadow-lg"
              onClick={onClose}
            />
            <img src={image} className="w-full object-cover shadow-xl" />
          </motion.section>
        </motion.main>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MyDialog;
