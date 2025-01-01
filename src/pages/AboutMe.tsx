// import CarouselTest from '../components/CarouselTest';
import EducExp from '../components/EducExp';
import FAQsSection from '../components/FAQsSection';
import Footer from '../components/Footer';
import OtherSkills from '../components/OtherSkills';
import SubHeroSection from '../components/SubHeroSection';
import WorkWithMe from '../components/WorkWithMe';

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <SubHeroSection title="about me" />
      <p className="w-full max-w-screen-lg  text-start px-4 text-inherit mb-10">
        My full name is IRANKOMEJE Favor Eliab, I pursue web developemnt as a passion. That is the
        reason why I took the intiative to teach it to myself. However, I pursued Mechatronics
        Technolgy in univeristy. I am always eager to learn, especially those things that I enjoy
        doing.
      </p>
      <EducExp />
      <OtherSkills />
      <div className='w-full bg-inherit mt-20 '/>
      <WorkWithMe />
      <FAQsSection />
      <Footer />
      {/* <CarouselTest /> */}
    </div>
  );
};

export default AboutMe;
