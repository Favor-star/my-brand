import SingleReview from './SingleReview';
import Arrows from './common/Arrows';
import useEmblaCarousel from 'embla-carousel-react';

import Autoscroll from 'embla-carousel-auto-scroll';
import { cn } from '../utils';
import { usePrevNextButtons } from '../hooks/usePrevNextButtons';

const ReviewSection = () => {
  const [reviewSlideRef, reviewSlideAPI] = useEmblaCarousel({ loop: true, slidesToScroll: 2 }, [
    Autoscroll({ speed: 0.8, startDelay: 500 })
  ]);
  const { onPrevButtonClick, onNextButtonClick, nextWhileMoving } =
    usePrevNextButtons(reviewSlideAPI);

  return (
    <section className="w-full max-w-screen-lg flex flex-col gap-4 justify-center items-center my-8 mt-10 px-4 relative ">
      <div className="absolute top-1/2 left-1/2 w-[200px] sm:w-[500px] aspect-square bg-blueCustom -z-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 bg-opacity-10" />
      <p className="font-bold text-2xl justify-self-start  w-full">Their plaises</p>
      <span className="flex gap-2">
        <p className="text-start self-start text-sm">
          I have worked with tons of people. They have been highly impressed with the way I handled
          theier tasks. While reviewing them, consider how impressed they are. Ask yourself, why
          can't I hire him?
        </p>
        <Arrows
          onLeftClick={() => nextWhileMoving(onPrevButtonClick)}
          onRightClick={() => nextWhileMoving(onNextButtonClick)}
        />
      </span>
      <div className="overflow-hidden w-full " ref={reviewSlideRef}>
        <div className="flex md:grid-cols-2 gap-4 md:gap-8 w-10/12 md:w-full">
          {reviewsList.map(({ names, title, company, review }, index) => (
            <span
              className={cn(
                'flex-0-0-100 md:flex-0-0-48',
                index === reviewsList.length - 1 && 'me-8'
              )}
              key={`${names}-${index}`}
            >
              <SingleReview title={title} names={names} company={company} review={review} />
            </span>
          ))}
        </div>
      </div>
      {/* <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full block bg-blackCustom"></span>
        <span className="w-3 h-3 rounded-full block bg-grayCustom"></span>
        <span className="w-3 h-3 rounded-full block bg-grayCustom"></span>
        <span className="w-3 h-3 rounded-full block bg-grayCustom"></span>
      </div> */}
    </section>
  );
};

export default ReviewSection;

export type ReviewListProps = { names: string; title: string; company: string; review: string };
const reviewsList: ReviewListProps[] = [
  {
    names: 'John Doe',
    title: 'Manager',
    company: 'BraveLink Tech',
    review:
      '“Favor delivered an outstanding web application for our project. His attention to detail and dedication to meeting deadlines truly made a difference.”'
  },
  {
    names: 'Jane Smith',
    title: 'Founder',
    review:
      'Working with Favor was a game-changer. They understood our vision perfectly and delivered an elegant, functional website on time. Highly recommend for anyone needing a tech partner who truly listens',
    company: 'Creativa Tech'
  },
  {
    names: 'Paul Johnson',
    title: 'Product Manager',
    review:
      'We approached Favor for an embedded system project, and they exceeded expectations! The final product was seamless, efficient, and has transformed our operations.',
    company: 'Innovative Solutions'
  },
  {
    names: 'Emily Tan',
    title: 'CEO',
    review:
      "Favor's expertise in 3D modeling and printing helped us create flawless prototypes quickly. The quality and precision of their work is unmatched",
    company: '3DHub'
  },
  {
    names: 'Rukundo Jean',
    title: 'Product Lead',
    review:
      'Working with Favor has been a game-changer. His expertise in both web and embedded systems brought our ideas to life effortlessly',
    company: 'TechForge'
  }
];
