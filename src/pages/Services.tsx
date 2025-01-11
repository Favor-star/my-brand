import { useEffect } from 'react';
import ContactMeSection from '../components/ContactMeSection';
import FAQsSection from '../components/FAQsSection';
import Footer from '../components/Footer';
import ReviewSection from '../components/ReviewSection';
import SingleService from '../components/servicePage/SingleService';
import SubHeroSection from '../components/SubHeroSection';
import { motion } from 'framer-motion';
// import { ReactLenis } from 'lenis/react';
// import Lenis from 'lenis';
// import SmoothScroll from '../components/common/SmoothScroll';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    // <SmoothScroll>
    <motion.main className="w-full flex flex-col justify-center items-center relative">
      <SubHeroSection title="services" />
      <p className="w-full max-w-screen-lg  text-start px-3">
        Explore a wide array of services designed to bring your tech visions to life. From custom
        software solutions to complex mechanical designs, I’m here to transform ideas into impactful
        results.
      </p>

      <section className="w-full max-w-screen-lg flex flex-col gap-5 items-center mt-10 px-4">
        <p className="font-bold text-2xl self-start">Services</p>
        <div className="w-full md:w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ">
          {servicesList.map(({ title, description }) => (
            <SingleService title={title} description={description} />
          ))}
        </div>
      </section>
      <ReviewSection />
      <ContactMeSection />
      <FAQsSection />
      <Footer />
    </motion.main>
    // </SmoothScroll>
  );
};

export default Services;

export type ServiceListProps = { title: string; description: string };
const servicesList: ServiceListProps[] = [
  {
    title: 'Web Development',
    description:
      'Creating visually appealing, responsive websites that prioritize user experience and functionality. From landing pages to full-fledged web apps, I ensure every project is designed to engage and perform.'
  },
  {
    title: 'No-Code development',
    description:
      'Bringing ideas to life rapidly using no-code tools. Perfect for startups or quick prototyping, I create efficient, flexible solutions without extensive coding, reducing development time while ensuring quality'
  },
  {
    title: 'Web Design & Prototyping',
    description:
      'Designing intuitive, user-centered interfaces and prototypes to make your vision a reality. Combining creativity with functionality, I deliver designs that are not only visually compelling but also easy to navigate.'
  },
  {
    description:
      'Providing precision in mechanical designs for various industries. From concept to 3D modeling, each design is tailored to meet specifications with attention to detail and functional integrity.',
    title: 'Mechanical Design'
  },
  {
    title: '3D printing',
    description:
      'Offering 3D printing services to turn your digital models into physical prototypes or end-use parts. Ideal for testing concepts, designs, and mechanical parts before full-scale production.'
  },
  {
    title: 'Embedded System',
    description:
      'Specializing in the integration of hardware and software for real-world applications. From IoT devices to industrial automation, I bring innovative solutions to complex problems in the embedded systems domain.'
  }
];
