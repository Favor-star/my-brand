import FAQsSection from '../components/FAQsSection';
import Footer from '../components/Footer';
import MyWorks from '../components/MyWorks';
import SubHeroSection from '../components/SubHeroSection';
import WorkWithMe from '../components/WorkWithMe';

const Portfolio = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center relative text-blackCustom">
      <SubHeroSection title="portfolio" />
      <p className="w-full max-w-screen-xl  text-start px-4 text-inherit">
        Be the first to take a look at amazing works that I have recently completed. I am always
        ready to take on new challenges and deliver the best results, like I have always done. Even
        though they are not quite a lot, but I hope they are enough to demonstrate my level of
      expertise.
      </p>
      <section className="w-full  flex items-center justify-center py-10 bg-grayCustom text-inherit my-10">
        <div className="max-w-screen-lg w-full flex flex-col md:flex-row justify-center  gap-10 md:gap-0 md:justify-around items-start md:items-center px-4">
          <div className=" w-fit flex-1 flex flex-row justify-center gap-3 items-center">
            <span className="flex items-center justify-center gap-0">
              <p className="text-5xl font-extrabold ">20</p>
              <p className="text-5xl font-extrabold ">+</p>
            </span>
            <p className=" w-full  md:max-w-[130px] text-left  text-lg font-medium md:font-normal">
              Happily served customers
            </p>
          </div>
          <div className=" w-fit flex-1 flex flex-row justify-center gap-3 items-center">
            <span className="flex items-center justify-center gap-0">
              <p className="text-5xl font-extrabold ">10</p>
              <p className="text-5xl font-extrabold ">+</p>
            </span>
            <p className=" w-full md:max-w-[100px] text-left text-lg font-medium md:font-normal">
              Projects worked on
            </p>
          </div>
          <div className=" w-fit flex-1 flex flex-row justify-center gap-3 items-center">
            <span className="flex items-center justify-center gap-0">
              <p className="text-5xl font-extrabold ">2</p>
              <p className="text-5xl font-extrabold ">+</p>
            </span>
            <p className=" w-full md:max-w-[100px] text-left text-lg font-medium md:font-normal">
              Years of experience
            </p>
          </div>
        </div>
      </section>
      <MyWorks />
      <WorkWithMe />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
