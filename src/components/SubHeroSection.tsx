import Header from '../components/Header';
// import bgImg from '../assets/bgImg.jpg';
import bgImg2 from '../assets/bgImg2.jpg';
import { Link } from 'react-router-dom';
import { IconArrowNarrowRight, IconMessageDots } from '@tabler/icons-react';

interface SubHeroSectionProps {
  title: string;
}
const SubHeroSection = ({ title }: SubHeroSectionProps) => {
  return (
    <>
      <section
        className="w-full min-h-[650px] flex flex-col gap-2 items-center justify-center text-white relative mb-7"
        style={{
          background: `url(${bgImg2})`,
          objectFit: 'cover',
          backgroundPosition: 'top left',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="w-full items-start absolute top-0 left-0 justify-self-start z-20">
          <Header isTextWhite={true} />
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-0"></div>
        <p className="font-bold text-5xl relative z-10 capitalize">{title}</p>
        <div className="flex flex-row gap-2 w-fit relative z-10">
          <Link to={'/'} className="text-white font-bold text-lg cursor-pointer">
            Home
          </Link>
          <IconArrowNarrowRight className="w-7 h-7" />
          <p className="text-white font-bold text-lg capitalize">{title}</p>
        </div>
        <div className="w-full absolute bottom-8 left-0 flex items-center justify-center  z-10">
          <span className="w-full max-w-screen-xl flex justify-end px-4">
            <IconMessageDots stroke={1} className="w-16 h-16 p-3 bg-blueCustom  rounded-full " />
          </span>
        </div>
      </section>
    </>
  );
};

export default SubHeroSection;
