import ContactMeSection from '../components/ContactMeSection';
import FAQsSection from '../components/FAQsSection';
import Footer from '../components/Footer';
import ReviewSection from '../components/ReviewSection';
import SingleService from '../components/servicePage/SingleService';
import SubHeroSection from '../components/SubHeroSection';
// import { ReactLenis } from 'lenis/react';
// import Lenis from 'lenis';
import SmoothScroll from '../components/common/SmoothScroll';

const Services = () => {
  return (
    <SmoothScroll>
      <main className="w-full flex flex-col justify-center items-center relative">
        <SubHeroSection title="services" />
        <p className="w-full max-w-screen-xl  text-center px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore eligendi ab
          dicta consequuntur necessitatibus officia, aperiam explicabo in quia ea tempora
          praesentium veritatis dolores rerum eius omnis magni repellendus tempore dolore velit
          officiis voluptas voluptates unde! Consequatur, dolor eligendi.
        </p>

        <section className="w-full max-w-screen-xl flex flex-col gap-5 items-center mt-10 px-4">
          <p className="font-bold text-3xl">Services</p>
          <div className="w-10/12 md:w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <SingleService />
            <SingleService />
            <SingleService />
            <SingleService />
          </div>
        </section>
        <ReviewSection />
        <ContactMeSection />
        <FAQsSection />
        <Footer />
      </main>
    </SmoothScroll>
  );
};

export default Services;
