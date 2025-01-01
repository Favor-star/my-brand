import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { cn } from '../utils';

interface FAQProps {
  question: string;
  answer: string;
}
const FAQ = ({ question, answer }: FAQProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const containerVariants: Variants = {
    folded: {
      backgroundColor: '#e5e4e2',
      color: '#212830'
    },
    unfolded: {
      backgroundColor: '#2454ff',
      color: '#fff',
      transition: {
        delayChildren: 1
      }
    }
  };
  const itemsVariants: Variants = {
    folded: {
      scaleY: 0,
      opacity: 0
    },
    unfolded: {
      scaleY: 1,
      opacity: 1,
      color: '#fff'
    }
  };
  return (
    <motion.div
      className="w-full flex flex-col gap-1 p-5 bg-grayCustom rounded-xl "
      variants={containerVariants}
      initial="folded"
      animate={isClicked ? 'unfolded' : 'folded'}
    >
      <span
        className="w-full flex justify-between items-center cursor-pointer select-none"
        onClick={() => setIsClicked(!isClicked)}
      >
        <p className="font-medium">{question}</p>
        <IconPlus className={cn('transition-all', isClicked ? ' hidden' : 'shown')} />
        <IconMinus className={cn('transition-all', !isClicked ? ' hidden' : 'shown')} />
      </span>
      <motion.span
        className="w-fit  "
        initial={{ height: 0, opacity: 0 }}
        animate={
          isClicked
            ? {
                height: 'fit-content',
                opacity: 1,
                transformOrigin: 0,
                scaleY: 1,
                marginTop: '10px',
                transition: {
                  duration: 0.5,
                  type: 'spring'
                }
              }
            : { scaleY: 0, height: 0, opacity: 0, marginTop: '0px' }
        }
      >
        <motion.p
          variants={itemsVariants}
          animate={isClicked ? 'unfolded' : 'folded'}
          className="italic font-light  text-balance"
        >
          {answer}
        </motion.p>
      </motion.span>
    </motion.div>
  );
};

export default FAQ;
