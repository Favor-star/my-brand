'use client';
import React, { useState } from 'react';
import { IconArrowsMaximize, IconExternalLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { cn } from '../utils';
import { Link } from 'react-router-dom';
import MyDialog from './MyDialog';

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleCardClick = () => {
      if (card.filter === 'Design') {
        setDialogOpen(true);
      }
    };

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          'rounded-lg relative bg-grayCustom dark:bg-blackCustom overflow-hidden h-60 md:h-72 w-full transition-all duration-300 ease-out user-select-none cursor-pointer',
          hovered !== null && hovered !== index && 'blur-sm scale-[0.98]'
        )}
        onClick={handleCardClick}
      >
        <div className="absolute top-2 right-2 bg-grayCustom text-blackCustom rounded-lg p-2 text-sm z-30 cursor-not-allowed shadow-xl">
          {card.filter === 'Web Development' ? 'Web Dev' : 'Design'}
        </div>
        <motion.img
          src={card.src}
          alt={card.title}
          className="object-cover absolute inset-0"
          animate={hovered === index ? { scale: 1.1, transformOrigin: 'center' } : { scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        <div
          className={cn(
            'absolute inset-0 bg-blackCustom/50 flex items-end py-8 px-4 transition-opacity duration-300',
            hovered === index ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="text-base md:text-lg font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 flex gap-2 items-center">
            {card.title}

            {card.filter === 'Web Development' && (
              <Link to={card.href} target="_blank">
                <IconExternalLink stroke={1.25} className="text-white" />
              </Link>
            )}
            {card.filter !== 'Web Development' && (
              <IconArrowsMaximize
                stroke={1.25}
                className="text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setDialogOpen(true);
                }}
              />
            )}
            <MyDialog image={card.src} isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards, fromHome }: { cards: Card[]; fromHome: boolean }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto  w-full">
      {[...(fromHome ? cards.slice(0, 2) : cards)].map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
