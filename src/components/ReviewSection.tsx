import SingleReview from './SingleReview';
import Arrows from './common/Arrows';
import useEmblaCarousel from 'embla-carousel-react';

import Autoscroll from 'embla-carousel-auto-scroll';
import { useCallback, } from 'react';

const ReviewSection = () => {
  const [reviewSlideRef, reviewSlideAPI] = useEmblaCarousel({ loop: true, slidesToScroll: 2 }, [
    Autoscroll({ speed: 0.8, startDelay: 500, }),
  ]);
  const handleRightClick = useCallback(() => {
    if (reviewSlideAPI) reviewSlideAPI.scrollPrev();
  }, [reviewSlideAPI]);

  const handleLeftClick = useCallback(() => {
    if (reviewSlideAPI) reviewSlideAPI.scrollNext();
  }, [reviewSlideAPI]);

  return (
    <section className="w-full max-w-screen-xl flex flex-col gap-4 justify-center items-center my-8 mt-16 px-4 relative">
      <div className="absolute top-1/2 left-1/2 w-[500px] aspect-square bg-blueCustom -z-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 bg-opacity-10"></div>
      <p className="font-bold text-3xl">They are happy with my services</p>
      <span className="flex gap-8">
        <p className="text-center self-start ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ullam expedita, quae
          repellendus aliquid voluptatem accusantium, neque libero adipisci possimus, molestiae eos
          voluptas! axime doloribus fuga exercitationem nemo quibusdam?
        </p>
        <Arrows onRightCLick={handleLeftClick} onLeftClick={handleRightClick} />
      </span>
      <div className="overflow-hidden w-full " ref={reviewSlideRef}>
        <div className="flex md:grid-cols-2 gap-4 md:gap-8 w-10/12 md:w-full">
          <span className=" flex-0-0-100 md:flex-0-0-48">
            <SingleReview />
          </span>
          <span className=" flex-0-0-100 md:flex-0-0-48">
            <SingleReview />
          </span>
          <span className=" flex-0-0-100 md:flex-0-0-48">
            <SingleReview />
          </span>
          <span className=" flex-0-0-100 md:flex-0-0-48">
            <SingleReview />
          </span>
          <span className=" flex-0-0-100 md:flex-0-0-48">
            <SingleReview />
          </span>
          <span className=" flex-0-0-100 md:flex-0-0-48">
            <SingleReview />
          </span>
          <span className=" flex-0-0-100 md:flex-0-0-48 me-8">
            <SingleReview />
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full block bg-blackCustom"></span>
        <span className="w-3 h-3 rounded-full block bg-grayCustom"></span>
        <span className="w-3 h-3 rounded-full block bg-grayCustom"></span>
        <span className="w-3 h-3 rounded-full block bg-grayCustom"></span>
      </div>
    </section>
  );
};

export default ReviewSection;
