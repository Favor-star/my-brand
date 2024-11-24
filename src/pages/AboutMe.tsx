// import CarouselTest from '../components/CarouselTest';
import EducExp from '../components/EducExp';
import OtherSkills from '../components/OtherSkills';
import SubHeroSection from '../components/SubHeroSection';

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <SubHeroSection title="about me" />
      <p className="w-full max-w-screen-lg  text-start px-4 text-inherit mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore eligendi ab
        dicta consequuntur necessitatibus officia, aperiam explicabo in quia ea tempora praesentium
        veritatis dolores rerum eius
      </p>
      <EducExp />
      <OtherSkills />
      {/* <CarouselTest /> */}
    </div>
  );
};

export default AboutMe;
