import FAQ from './FAQ';


const FAQsSection = () => {
  return (
    <div className="w-full flex items-center justify-center py-10  text-blackCustom realtive">
      <main className="w-full max-w-screen-xl flex flex-col gap-3 items-center justify-center px-4">
        <p className="font-bold text-3xl text-center">You might ask yourself:</p>
        <section className=" flex flex-col gap-3 w-full md:w-8/12 pt-5">
          <FAQ />
          <FAQ />
          <FAQ />
          <FAQ />
        </section>
      </main>
     
    </div>
  );
};

export default FAQsSection;
