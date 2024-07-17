import EyeCatcher from '../components/EyeCatcher';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Homepage = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col  bg-inherit">
      <Header />
      <div className="w-96 h-96 absolute top-0 right-40 bg-blueCustom bg-opacity-10 rounded-full  blur-2xl -z-10"></div>
      <div className="w-full flex-1 h-full flex flex-col  justify-between items-center">
        <HeroSection />
        <EyeCatcher />
      </div>
    </div>
  );
};

export default Homepage;
