import { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';

export const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined) => {
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [prevBtnDisbled, setprevBtnDisbled] = useState(false);
  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    setNextBtnDisabled(!emblaApi.canScrollNext());
    setprevBtnDisbled(!emblaApi.canScrollPrev());
  }, []);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  const nextWhileMoving = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false ? autoScroll.reset : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );
  return {
    nextBtnDisabled,
    prevBtnDisbled,
    onNextButtonClick,
    onPrevButtonClick,
    nextWhileMoving
  };
};
