import EyeCatcher from '../components/EyeCatcher';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MyServices from '../components/MyServices';
import MyWorks from '../components/MyWorks';
import EducExp from '../components/EducExp';
import { IconHome, IconUser, IconMessage } from '@tabler/icons-react';
import { FloatingNav } from '../components/common/FloatingNav';
import OtherSkills from '../components/OtherSkills';
import ReviewSection from '../components/ReviewSection';
import ContactMeSection from '../components/ContactMeSection';
import Footer from '../components/Footer';
const Homepage = () => {
  return (
    <main className="h-full  relative">
      {/* <div className="w-full min-h-screen relative flex flex-col  bg-inherit"> */}
      <Header />
      <div className="w-96 h-96 absolute top-0 right-40 bg-blueCustom bg-opacity-10 rounded-full  blur-2xl -z-10" />
      <div className="w-full flex-1 h-full flex flex-col  justify-between items-center  gap-5">
        <FloatingNav navItems={navItems} />
        <HeroSection />
        <EyeCatcher />
      </div>
      {/* </div> */}
      <MyServices fromHome={true} />
      <MyWorks />
      <EducExp />
      <OtherSkills />
      <ReviewSection />
      <ContactMeSection />
      <Footer />
    </main>
  );
};

export default Homepage;

const navItems = [
  {
    name: 'Home',
    link: '/',
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />
  },
  {
    name: 'About',
    link: '/about',
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />
  },
  {
    name: 'Contact',
    link: '/contact',
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
  }
];
